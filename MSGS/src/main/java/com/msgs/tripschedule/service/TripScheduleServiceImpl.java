package com.msgs.tripschedule.service;

import com.msgs.msgs.dto.PlaceInfoDTO;
import com.msgs.msgs.entity.user.UserEntity;
import com.msgs.tripschedule.dao.TripScheduleDAO;
import java.util.ArrayList;
import java.util.List;
import org.json.JSONObject;
import org.json.XML;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
public class TripScheduleServiceImpl implements TripScheduleService {
    @Value("${tourApi.decodingKey}")
    private String serviceKey;

//    @Autowired
//    private TripScheduleDAO tripScheduleDAO;

    @Override
    public List<PlaceInfoDTO> getDormList(int areaCode, List<Integer> sigunguCode){

        WebClient wc = WebClient.builder().baseUrl("http://apis.data.go.kr/B551011/KorService1")
            .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
            .build();

        //create api url
        String url = "&serviceKey={serviceKey}"+
            "?MobileOS=ETC" +
            "&MobileApp=msgs" +
            "&contentTypeId={contentTypeId}"
            ;

        Mono<String> result = wc.get()
            .uri(uriBuilder -> uriBuilder.path("/areaBasedList1") //지역기반 관광정보 조회
                    .queryParam("serviceKey", serviceKey)
                    .queryParam("pageNo", 1)
                    .queryParam("numOfRows", 50)
                    .queryParam("MobileApp", "msgs")
                    .queryParam("MobileOS", "ETC")
                    .queryParam("arrange", "Q")
                    .queryParam("contentTypeId", 32) //숙박
                    .queryParam("_type", "json")
                    .queryParam("areaCode", areaCode)
                    .queryParam("sigunguCode", sigunguCode)
                .build())
            .retrieve()
            .bodyToMono(String.class);


        System.out.println(result);

        List<PlaceInfoDTO> list = new ArrayList<>();
        list.add(new PlaceInfoDTO());
        return list;

    };

}
