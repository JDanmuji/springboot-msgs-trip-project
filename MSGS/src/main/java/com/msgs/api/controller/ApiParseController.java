package com.msgs.api.controller;

import lombok.RequiredArgsConstructor;
import org.json.JSONObject;
import org.json.XML;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;


@RestController
@RequestMapping(value = "api")
public class ApiParseController {
    @Value("${tourApi.decodingKey}")
    private String decodingKey;

    @GetMapping(value = "keyword")
    public void searchKeyword() {
        String keyword = "경복궁";
        int contentTypeId = 12;

        WebClient webClient = WebClient.builder().baseUrl("https://apis.data.go.kr")
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_XML_VALUE)
                .build();

        //create api url
        String url = "/B551011/KorService1/searchKeyword1" +
                "?MobileOS=ETC" +
                "&MobileApp=msgs" +
                "&keyword={keyword}" +
                "&contentTypeId={contentTypeId}" +
                "&serviceKey={serviceKey}";

        Mono<String> result = webClient.get().uri(url, keyword, contentTypeId, decodingKey)
                .retrieve()
                .bodyToMono(String.class);
        String response = result.block();
        System.out.println(response);

        JSONObject obj = XML.toJSONObject(response.toString());
        JSONObject items = obj.getJSONObject("response").getJSONObject("body").getJSONObject("items");
        System.out.println(obj);

        JSONObject item = items.getJSONObject("item");
        System.out.println(item);
    }


    @GetMapping(value = "detail")
    public void detailCommon1() {

        //----------------------------
        int contentId = 126508;
        int contentTypeId = 12;
        //----------------------------

        WebClient webClient = WebClient.builder().baseUrl("https://apis.data.go.kr/B551011/KorService1")
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_XML_VALUE)
                .build();

        //create api url
        String url = "/detailCommon1" +
                "?MobileOS=ETC" +
                "&MobileApp=msgs" +
                "&contentId={contentId}" +
                "&contentTypeId={contentTypeId}" +
                "&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y" +
                "&serviceKey={serviceKey}";

        Mono<String> result = webClient.get().uri(url, contentId, contentTypeId, decodingKey)
                .retrieve()
                .bodyToMono(String.class);
        String response = result.block();
        System.out.println(response);

        JSONObject obj = XML.toJSONObject(response.toString());
        JSONObject items = obj.getJSONObject("response").getJSONObject("body").getJSONObject("items");
        System.out.println(obj);

        JSONObject item = items.getJSONObject("item");
        System.out.println(item);

    }


}

