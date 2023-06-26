package com.msgs.api.controller;


import org.json.JSONArray;
import org.json.JSONObject;
import org.json.XML;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping(value = "api")
@CrossOrigin(origins = "http://localhost:3000")
public class BusApiController {
    @Value("${busApi.decodingKey}")
    private String decodingKey;


    //terminal list 출력
    @GetMapping(value = "terminalList")
    public String getBusTerminalList(int pageNo) {

        WebClient webClient = WebClient.builder().baseUrl("http://apis.data.go.kr/1613000")
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_XML_VALUE)
                .build();
        String url = "/ExpBusInfoService/getExpBusTrminlList" +
                "?serviceKey={decodingKey}" +
                "&pageNo={pageNo}";

        Mono<String> result = webClient.get().uri(url, decodingKey, pageNo)
                .retrieve()
                .bodyToMono(String.class);
        String response = result.block();
        System.out.println(response);

        JSONObject obj = XML.toJSONObject(response.toString());
        JSONObject items = obj.getJSONObject("response").getJSONObject("body").getJSONObject("items");
        System.out.println(obj);

        JSONArray item = items.getJSONArray("item");
        System.out.println(item);

        return item.toString();
    }

    @GetMapping(value = "busTime")
    public String getBusTime(String depTerminalId, String arrTerminalId) {

        WebClient webClient = WebClient.builder().baseUrl("http://apis.data.go.kr/1613000")
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_XML_VALUE)
                .build();
        String url = "/ExpBusInfoService/getExpBusTrminlList" +
                "?serviceKey={decodingKey}" +
                "&pageNo={pageNo}";
// http://apis.data.go.kr/1613000
// /ExpBusInfoService/getStrtpntAlocFndExpbusInfo
// ?serviceKey=인증키(URL Encode)
// &depTerminalId=NAEK010
// &arrTerminalId=NAEK300
// &depPlandTime=20211201
// &busGradeId=1
// &numOfRows=10
// &pageNo=1
// &_type=xml

        Mono<String> result = webClient.get().uri(url, decodingKey, pageNo)
                .retrieve()
                .bodyToMono(String.class);
        String response = result.block();
        System.out.println(response);

        JSONObject obj = XML.toJSONObject(response.toString());
        JSONObject items = obj.getJSONObject("response").getJSONObject("body").getJSONObject("items");
        System.out.println(obj);

        JSONArray item = items.getJSONArray("item");
        System.out.println(item);

        return item.toString();
    }

}
