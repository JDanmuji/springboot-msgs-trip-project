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
    
    @PostMapping(value = "/stay/list")
    public ResponseEntity<String> stayList() {
    	
        WebClient webClient = WebClient.builder().baseUrl("https://apis.data.go.kr")
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_XML_VALUE)
                .build();
        
        String url = "/B551011/KorService1" +
        		"/searchStay1" +
                "?MobileOS=ETC" +
                "&MobileApp=MSGS" +
                "&numOfRows=18" +
                "&serviceKey={serviceKey}";
        
        Mono<String> result = webClient.get().uri(url, decodingKey)
                .retrieve()
                .bodyToMono(String.class);
        String response = result.block();

        JSONObject obj = XML.toJSONObject(response.toString());
        JSONObject items = obj.getJSONObject("response").getJSONObject("body").getJSONObject("items");
        JSONArray item = items.getJSONArray("item");
//        JSONObject item = items.getJSONArray("item").getJSONObject(0);
        System.out.println(item);
        
//        // 제목 뒤의 부가설명 지움
//        for (int i = 0; i < item.length(); i++) {
//            JSONObject filteringItem = item.getJSONObject(i);
//            String title = filteringItem.optString("title", "");
//            if (!title.isEmpty()) {
//                int startBracketIndex = title.indexOf("[");
//                int endBracketIndex = title.indexOf("]");
//                String modifiedTitle = (startBracketIndex != -1 && endBracketIndex != -1)
//                        ? title.substring(0, startBracketIndex)
//                        : title;
//                modifiedTitle = modifiedTitle.trim();
//                filteringItem.put("title", modifiedTitle);
//                item.put(filteringItem);
//            }
//        }
        
        String jsonString = item.toString();

        return ResponseEntity.status(HttpStatus.OK).body(jsonString);
    }
    
    @PostMapping(value = "/stay/detail")
    public ResponseEntity<String> stayDetail(@RequestBody String data) {
    	
    	JSONObject requestData = new JSONObject(data);
        String contentId = requestData.getString("contentId");
        System.out.println("콘텐트 아이디: " + contentId);

        WebClient webClient = WebClient.builder().baseUrl("https://apis.data.go.kr")
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_XML_VALUE)
                .build();

        String url = "/B551011/KorService1/detailIntro1" +
                "?MobileOS=ETC" +
                "&MobileApp=MSGS" +
                "&contentId={contentId}" +
                "&contentTypeId=32" +
                "&serviceKey={serviceKey}";
        
        Mono<String> result = webClient.get().uri(url, contentId, decodingKey)
                .retrieve()
                .bodyToMono(String.class);
        String response = result.block();

        JSONObject obj = XML.toJSONObject(response.toString());
        JSONObject items = obj.getJSONObject("response").getJSONObject("body").getJSONObject("items");
        JSONObject item = items.getJSONObject("item");
        
        // list API에서 제목, 주소, 좌표, 이미지 가져오기
        JSONObject jsonResponse = new JSONObject(stayList());
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
}
