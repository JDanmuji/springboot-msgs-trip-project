package com.msgs.api.controller;

import org.json.JSONArray;
import org.json.JSONObject;
import org.json.XML;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

import reactor.core.publisher.Mono;

@RestController
@RequestMapping(value = "api")
public class ApiParseController3 {

    @Value("${tourApi.decodingKey}")
    private String decodingKey;
    
	// <a> 태그 붙은 url 데이터 전처리
    public String modifyUrl(String url) {
    	String modifiedUrl = null;
    	
    	if (!url.isEmpty()) {
            int startTagIndex = url.indexOf(">") + 1;
            int tempIndex = url.indexOf("<");
            int endTagIndex = url.indexOf("<", tempIndex + 1);
            modifiedUrl = (startTagIndex != -1 && endTagIndex != -1)
                    ? url.substring(startTagIndex, endTagIndex)
                    : url;
            modifiedUrl = modifiedUrl.trim();
        } //if
    	return modifiedUrl;
    }
    
    // 숙박 list 데이터 불러오는 메소드
    // list, detail에서 두 번 불러오기 위해 따로 메소드 분리함
    public ResponseEntity<String> restaurantListData(int pageNo) {
        WebClient webClient = WebClient.builder().baseUrl("https://apis.data.go.kr")
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_XML_VALUE)
                .build();
        
        String url = "/B551011/KorService1" +
        		"/locationBasedList1" +
                "?MobileOS=ETC" +
                "&MobileApp=MSGS" +
                "&numOfRows=12" +
                "&pageNo={pageNo}" +
                "&mapX=128.8321" +
                "&mapY=37.751853" +
                "&radius=200000" + 
                "&contentTypeId=39" +
                "&serviceKey={serviceKey}";
        
        Mono<String> result = webClient.get().uri(url, pageNo, decodingKey)
                .retrieve()
                .bodyToMono(String.class);
        String response = result.block();

        JSONObject obj = XML.toJSONObject(response.toString());
        JSONObject items = obj.getJSONObject("response").getJSONObject("body").getJSONObject("items");
        JSONArray item = items.getJSONArray("item");

        // 제목, 이미지 데이터 가공
        JSONArray filteredArray = new JSONArray();

        for (int i = 0; i < item.length(); i++) {
            JSONObject filteringItem = item.getJSONObject(i);
            String firstimage = filteringItem.optString("firstimage", "");
            String title = filteringItem.optString("title", "");
            
            // 이미지 없는 데이터 필터링
            if(firstimage.isEmpty()) {
            	continue;
            }

            else if (!title.isEmpty()) {
                // 데이터에 페이지번호 추가
            	// (stayDetail에서 list 데이터 끌어올 때 필요)
                filteringItem.put("pageNo", pageNo);
                
                // 제목 뒤의 부가설명 지움
                int startBracketIndex = title.indexOf("[");
                int endBracketIndex = title.indexOf("]");
                String modifiedTitle = (startBracketIndex != -1 && endBracketIndex != -1)
                        ? title.substring(0, startBracketIndex)
                        : title;
                modifiedTitle = modifiedTitle.trim();
                filteringItem.put("title", modifiedTitle);
                filteredArray.put(filteringItem);
            } //if
        } //for

        String jsonString = filteredArray.toString();

        return ResponseEntity.status(HttpStatus.OK).body(jsonString);
    }
    
    @PostMapping(value = "/restaurant/list")
    public ResponseEntity<String> restaurantList(@RequestBody String data) {
    	JSONObject requestData = new JSONObject(data);
    	int pageNo = requestData.getInt("pageNo");
    	return restaurantListData(pageNo);
    }
    
    @PostMapping(value = "/restaurant/detail")
    public ResponseEntity<String> restaurantDetail(@RequestBody String data) {
    	
    	JSONObject requestData = new JSONObject(data);
        int pageNo = requestData.getInt("pageNo");
        String contentId = requestData.getString("contentId");

        WebClient webClient = WebClient.builder().baseUrl("https://apis.data.go.kr")
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_XML_VALUE)
                .build();

        String url = "/B551011/KorService1/detailIntro1" +
                "?MobileOS=ETC" +
                "&MobileApp=MSGS" +
                "&contentId={contentId}" +
                "&contentTypeId=39" +
                "&serviceKey={serviceKey}";
        
        Mono<String> result = webClient.get().uri(url, contentId, decodingKey)
                .retrieve()
                .bodyToMono(String.class);
        String response = result.block();

        JSONObject obj = XML.toJSONObject(response.toString());
        JSONObject items = obj.getJSONObject("response").getJSONObject("body").getJSONObject("items");
        JSONObject item = items.getJSONObject("item");
        System.out.println(items);
        System.out.println(item);
        
        // <a> 태그 붙은 url 데이터 전처리
        String reservationurl = item.optString("reservationurl", "");
        String homepage = item.optString("homepage", "");
        if (!reservationurl.isEmpty()) {
            int startTagIndex = reservationurl.indexOf(">") + 1;
            int tempIndex = reservationurl.indexOf("<");
            int endTagIndex = reservationurl.indexOf("<", tempIndex + 1);
            String modifiedUrl = (startTagIndex != -1 && endTagIndex != -1)
                    ? reservationurl.substring(startTagIndex, endTagIndex)
                    : reservationurl;
            modifiedUrl = modifiedUrl.trim();
            item.put("reservationurl", modifiedUrl);

            System.out.println(reservationurl);
            System.out.println(modifiedUrl);
        } //if
        
        // list API에서 제목, 주소, 좌표, 이미지 가져오기
        JSONObject jsonResponse = new JSONObject(restaurantListData(pageNo));
        String body = jsonResponse.getString("body");
        JSONArray bodyArray = new JSONArray(body);
        JSONObject searchedData = null;
        
        for (int i = 0; i < bodyArray.length(); i++) {
            JSONObject searchingItem = bodyArray.getJSONObject(i);
            
            // 숙박 리스트에서 contentid 검색
            if (Integer.toString(searchingItem.getInt("contentid")).equals(contentId)) {
	        	searchedData = searchingItem;
	            break;
            }
        } //for

        // 결과로 return할 JSON 객체에 추가로 붙여줌
        item.put("title", searchedData.getString("title"));
        item.put("addr1", searchedData.getString("addr1"));
        item.put("mapx", searchedData.getBigDecimal("mapx"));
        item.put("mapy", searchedData.getBigDecimal("mapy"));
        item.put("firstimage", searchedData.getString("firstimage"));
        
        String jsonString = item.toString();

        return ResponseEntity.status(HttpStatus.OK).body(jsonString);
    }
    

    
    @PostMapping(value = "/place/detail")
    public ResponseEntity<String> placeDetail(@RequestBody String data) {

        //----------------------------
    	
    	JSONObject requestData = new JSONObject(data);
        String areaCode = requestData.getString("areaCode");
        String contentId = requestData.getString("contentId");
        String contentTypeId = requestData.getString("contentTypeId");
        
        //----------------------------

        WebClient webClient = WebClient.builder().baseUrl("https://apis.data.go.kr/B551011/KorService1")
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_XML_VALUE)
                .build();
        
        // 장소 정보
        String commonUrl = "/detailCommon1" +
                "?MobileOS=ETC" +
                "&MobileApp=MSGS" +
                "&contentId={contentId}" +
				"&defaultYN=Y" +
				"&firstImageYN=Y" +
				"&areacodeYN=Y" +
				"&addrinfoYN=Y" +
				"&mapinfoYN=Y" +
				"&serviceKey={serviceKey}";

        // common 장소정보 item 추출
        Mono<String> result = webClient.get().uri(commonUrl, contentId, decodingKey)
                .retrieve()
                .bodyToMono(String.class);
        String response = result.block();
        JSONObject obj = XML.toJSONObject(response.toString());
        JSONObject items = obj.getJSONObject("response").getJSONObject("body").getJSONObject("items");
        JSONObject commonItem = items.getJSONObject("item");
        
	        // 제목 뒤의 부가설명 지움
	        String title = commonItem.optString("title");
	        if(!title.isEmpty()) {
	        	int startBracketIndex = title.indexOf("[");
	        	int endBracketIndex = title.indexOf("]");
	        	String modifiedTitle = (startBracketIndex != -1 && endBracketIndex != -1)
	        			? title.substring(0, startBracketIndex)
	        					: title;
	        	modifiedTitle = modifiedTitle.trim();
	        	commonItem.put("title", modifiedTitle);
	        } //if
	        
	        // <a> 태그 붙은 url 데이터 전처리
	        String homepage = commonItem.optString("homepage");
	        commonItem.put("homepage", modifyUrl(homepage));
	    	System.out.println(homepage);
	    	System.out.println(modifyUrl(homepage));
        
	    	
	    	
	    ///////////////////////////////////////////////////////////////////////
        
        // 상세 정보
        String introUrl = "/detailIntro1" +
                "?MobileOS=ETC" +
                "&MobileApp=MSGS" +
                "&contentId={contentId}" +
                "&contentTypeId={contentTypeId}" +
                "&serviceKey={serviceKey}";

        // intro 상세정보 item 추출
        result = webClient.get().uri(introUrl, contentId, contentTypeId, decodingKey)
                .retrieve()
                .bodyToMono(String.class);
        response = result.block();
        obj = XML.toJSONObject(response.toString());
        items = obj.getJSONObject("response").getJSONObject("body").getJSONObject("items");
        JSONObject introItem = items.getJSONObject("item");
	        
	        // <a> 태그 붙은 url 데이터 전처리
	        String reservationurl = introItem.optString("reservationurl");
	    	introItem.put("reservationurl", modifyUrl(reservationurl));
	    	System.out.println(reservationurl);
	    	System.out.println(modifyUrl(reservationurl));
	        
	    	
	    	
	    ///////////////////////////////////////////////////////////////////////
        
        // 지역명
        String areaUrl = "/areaCode1" +
                "?MobileOS=ETC" +
                "&MobileApp=MSGS" +
                "&areaCode={areaCode}" +
                "&serviceKey={serviceKey}";

        // area 지역명 item 추출
        result = webClient.get().uri(areaUrl, areaCode, decodingKey)
                .retrieve()
                .bodyToMono(String.class);
        response = result.block();
        obj = XML.toJSONObject(response.toString());
        items = obj.getJSONObject("response").getJSONObject("body").getJSONObject("items");
        JSONObject areaItem = items.getJSONArray("item").getJSONObject(0);
        String cityName = areaItem.getString("name");

        commonItem.put("cityname", cityName);
	    
        
        // 두 JSON Object 하나에 담음
        System.out.println(commonItem);
        System.out.println(introItem);
        JSONObject commonIntroObj = new JSONObject();
        commonIntroObj.put("common", commonItem);
        commonIntroObj.put("intro", introItem);

        String commonIntroStr = commonIntroObj.toString();

        return ResponseEntity.status(HttpStatus.OK).body(commonIntroStr);
    }
}
