package com.msgs.api.controller;


import org.json.JSONArray;
import org.json.JSONObject;
import org.json.XML;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "api")
public class BusApiController {
    @Value("${busApi.decodingKey}")
    private String decodingKey;


    //terminal list 출력
    @GetMapping(value = "terminalList")
    public String getBusTerminalList() {

        WebClient webClient = WebClient.builder().baseUrl("http://apis.data.go.kr/1613000/ExpBusInfoService")
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_XML_VALUE)
                .build();
        String url = "/getExpBusTrminlList" +
                "?serviceKey={decodingKey}" +
                "&numOfRows=229";

//        http://apis.data.go.kr/1613000/ExpBusInfoService
//        /getExpBusTrminlList
//        ?serviceKey=
//        &numOfRows=229
//        &pageNo=1
        Mono<String> result = webClient.get().uri(url, decodingKey)
                .retrieve()
                .bodyToMono(String.class);
        String response = result.block();
        System.out.println(response);

        JSONObject obj = XML.toJSONObject(response.toString());
        JSONObject items = obj.getJSONObject("response").getJSONObject("body").getJSONObject("items");
        JSONArray item = items.getJSONArray("item");
        System.out.println(item);

        return item.toString();
    }

    @GetMapping(value = "busTime")
    public String getBusTime(String depTerminalId, String arrTerminalId, int depPlandTime, String selectedSeatType) {
        System.out.println(depTerminalId);
        System.out.println(arrTerminalId);
        System.out.println(depPlandTime);
        System.out.println(selectedSeatType);

        WebClient webClient = WebClient.builder().baseUrl("http://apis.data.go.kr/1613000/ExpBusInfoService")
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_XML_VALUE)
                .build();
        String url = "/getStrtpntAlocFndExpbusInfo" +
                "?serviceKey={decodingKey}" +
                "&depTerminalId={depTerminalId}" +
                "&arrTerminalId={arrTerminalId}" +
                "&depPlandTime={depPlandTime}" +
                "&numOfRows=10000";
        // &numOfRows=10
        // &pageNo=1
        // &_type=xml

        Mono<String> result = webClient.get().uri(url, decodingKey, depTerminalId, arrTerminalId, depPlandTime)
                .retrieve()
                .bodyToMono(String.class);
        String response = result.block();

        JSONObject obj = XML.toJSONObject(response.toString());
        JSONObject body = obj.getJSONObject("response").getJSONObject("body");

        if (!body.get("totalCount").toString().equals("0")) {
            JSONObject items = body.getJSONObject("items");
            JSONArray item = items.getJSONArray("item");
            System.out.println(item);

            // seat type data 가공
            // 일반, 고속 / 우등 / 프리미엄
            JSONArray jsonFilter = new JSONArray();
            List<String> seatType = new ArrayList<>();

            switch (selectedSeatType) {
                case "general": seatType.add("일반"); seatType.add("고속"); break;
                case "honor": seatType.add("우등"); break;
                case "premium": seatType.add("프리미엄"); break;
                default: seatType.add("");
            }

            for(int j=0; j < seatType.size(); j++) {
                for (int i = 0; i < item.length(); i++) {
                    JSONObject jsonObject = item.getJSONObject(i);
                    if (jsonObject.getString("gradeNm").contains(seatType.get(j))) {
                        System.out.println(jsonObject);
                        jsonFilter.put(jsonObject);
                    }
                }
            }
            return jsonFilter.toString();
            // 값을 가져와서 작업하는 코드
        } else {
            System.out.println("not exist 다.");
            JSONObject notExist = new JSONObject();
            notExist.put("depPlaceNm", "notExist");
            return notExist.toString();
        }

    }

}