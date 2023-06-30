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
public class ApiParseController2 {

    @Value("${tourApi.decodingKey}")
    private String decodingKey;
    
    // 숙박 list 데이터 불러오는 메소드
    // list, detail에서 두 번 불러오기 위해 따로 메소드 분리함
    public ResponseEntity<String> stayListData(int pageNo) {
    	
        WebClient webClient = WebClient.builder().baseUrl("https://apis.data.go.kr")
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_XML_VALUE)
                .build();
        
        String url = "/B551011/KorService1" +
        		"/searchStay1" +
                "?MobileOS=ETC" +
                "&MobileApp=MSGS" +
                "&numOfRows=12" +
                "&pageNo={pageNo}" +
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
    
    @PostMapping(value = "/stay/list")
    public ResponseEntity<String> stayList(@RequestBody String data) {
    	JSONObject requestData = new JSONObject(data);
    	int pageNo = requestData.getInt("pageNo");
    	return stayListData(pageNo);
    }
    
//    @PostMapping(value = "/stay/detail")
//    public ResponseEntity<String> stayDetail(@RequestBody String data) {
//    	
//    	JSONObject requestData = new JSONObject(data);
//        int pageNo = requestData.getInt("pageNo");
//        String contentId = requestData.getString("contentId");
//
//        WebClient webClient = WebClient.builder().baseUrl("https://apis.data.go.kr")
//                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_XML_VALUE)
//                .build();
//
//        String url = "/B551011/KorService1/detailIntro1" +
//                "?MobileOS=ETC" +
//                "&MobileApp=MSGS" +
//                "&contentId={contentId}" +
//                "&contentTypeId=32" +
//                "&serviceKey={serviceKey}";
//        
//        Mono<String> result = webClient.get().uri(url, contentId, decodingKey)
//                .retrieve()
//                .bodyToMono(String.class);
//        String response = result.block();
//
//        JSONObject obj = XML.toJSONObject(response.toString());
//        JSONObject items = obj.getJSONObject("response").getJSONObject("body").getJSONObject("items");
//        JSONObject item = items.getJSONObject("item");
//        
//        String reservationurl = item.optString("reservationurl", "");
//        
//        // <a> 태그 붙은 url 데이터 전처리
//        if (!reservationurl.isEmpty()) {
//            int startTagIndex = reservationurl.indexOf(">") + 1;
//            int tempIndex = reservationurl.indexOf("<");
//            int endTagIndex = reservationurl.indexOf("<", tempIndex + 1);
//            String modifiedUrl = (startTagIndex != -1 && endTagIndex != -1)
//                    ? reservationurl.substring(startTagIndex, endTagIndex)
//                    : reservationurl;
//            modifiedUrl = modifiedUrl.trim();
//            item.put("reservationurl", modifiedUrl);
//
//            System.out.println(reservationurl);
//            System.out.println(modifiedUrl);
//        } //if
//        
//        // list API에서 제목, 주소, 좌표, 이미지 가져오기
//        JSONObject jsonResponse = new JSONObject(stayListData(pageNo));
//        String body = jsonResponse.getString("body");
//        JSONArray bodyArray = new JSONArray(body);
//        JSONObject searchedData = null;
//        
//        for (int i = 0; i < bodyArray.length(); i++) {
//            JSONObject searchingItem = bodyArray.getJSONObject(i);
//            
//            // 가져온 숙박 리스트에서 contentid 검색
//            if (Integer.toString(searchingItem.getInt("contentid")).equals(contentId)) {
//	        	searchedData = searchingItem;
//	            break;
//            }
//        } //for
//
//        // 결과로 return할 JSON 객체에 추가로 붙여줌
//        item.put("title", searchedData.getString("title"));
//        item.put("addr1", searchedData.getString("addr1"));
//        item.put("mapx", searchedData.getBigDecimal("mapx"));
//        item.put("mapy", searchedData.getBigDecimal("mapy"));
//        item.put("firstimage", searchedData.getString("firstimage"));
//        
//        String jsonString = item.toString();
//
//        return ResponseEntity.status(HttpStatus.OK).body(jsonString);
//    }
}
