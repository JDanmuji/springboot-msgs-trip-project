package com.msgs.tripschedule.service;

import com.msgs.msgs.dto.PlanBlockDTO;
import com.msgs.msgs.entity.tripschedule.TripDailySchedule;
import com.msgs.msgs.entity.tripschedule.TripDetailSchedule;
import com.msgs.msgs.entity.tripschedule.TripSchedule;
import com.msgs.tripschedule.repository.TripscheduleRepository;
import java.util.Arrays;
import com.google.gson.Gson;
import com.msgs.msgs.dto.PlaceInfoDTO;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import org.json.JSONArray;
import org.json.JSONObject;
import org.json.XML;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.reactive.function.client.WebClient;
import java.util.Collections;


@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class TripScheduleServiceImpl implements TripScheduleService {

    @Value("${tourApi.decodingKey}")
    private String decodingKey;

    List<Integer> contentTypeIds = Arrays.asList(12, 39); //place의 contentId 저장해놓음. 12=관광지, 39=음식점
    Gson gson = new Gson();

//    @Autowired
    private final TripscheduleRepository tripscheduleRepository;


    @Override
    public List<PlaceInfoDTO> getDormList(int areaCode, List<Integer> sigunguCodeList){

        WebClient wc = WebClient.builder().baseUrl("http://apis.data.go.kr/B551011/KorService1/areaBasedList1")
            .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_XML_VALUE)
            .build();


        List<PlaceInfoDTO> joined = new ArrayList<PlaceInfoDTO>();

        String url_1 =
            "?MobileOS=ETC" +
                "&MobileApp=MSGS" +
                "&pageNo=1" +
                "&numOfRows=30" + //30개 출력됨.
                "&arrange=Q" +
                "&contentTypeId=32" + //숙박
                "&areaCode=" + areaCode;


        //시군구 코드 Ex[1, 5, 7] 반복문
        for(int sigunguCode : sigunguCodeList ){
            System.out.println("시군구코드!!!!!!!!!!!" + sigunguCode);

            //sigunguCode가 없는 경우면 url에서 뺀다.
            String url_2 = sigunguCode == 0 ? "" : "&sigunguCode=" + sigunguCode;
            String url =  url_1 + url_2 + "&serviceKey={serviceKey}";

            System.out.println(url);

            String response = wc.get()
                .uri(url, decodingKey)
                .retrieve()
                .bodyToMono(String.class) //MonoFlatMap형 리턴함
                .block();

            JSONObject items = XML.toJSONObject(response.toString()).getJSONObject("response").getJSONObject("body").getJSONObject("items");
            JSONArray item = items.getJSONArray("item");

            PlaceInfoDTO[] arr = gson.fromJson(item.toString(), PlaceInfoDTO[].class);
            List<PlaceInfoDTO> list = Arrays.asList(arr);

            joined.addAll(list); //시군구 코드 여러개인 경우 하나의 리스트로 합친다.


        } ////시군구 코드 Ex [1, 5, 7] 반복문 End

        Collections.shuffle(joined);
        System.out.println(joined);
        return joined;
    }



    @Override
    public List<PlaceInfoDTO> getPlaceList(int areaCode, List<Integer> sigunguCodeList){

        WebClient wc = WebClient.builder().baseUrl("http://apis.data.go.kr/B551011/KorService1/areaBasedList1")
            .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_XML_VALUE)
            .build();

        List<PlaceInfoDTO> joined = new ArrayList<PlaceInfoDTO>();

        String url_1 =
            "?MobileOS=ETC" +
                "&MobileApp=MSGS" +
                "&pageNo=1" +
                "&numOfRows=15" + //15개 출력됨.
                "&arrange=Q" +
                "&areaCode=" + areaCode;

        //시군구 코드 Ex[1, 5, 7] 반복문
        for(int sigunguCode : sigunguCodeList ){
            for(int contentTypeId: contentTypeIds){ //12=관광지, 39=음식점

                String url_2 = sigunguCode == 0
                    ? "&contentTypeId=" + contentTypeId //관광지 or 음식점
                    : "&contentTypeId=" + contentTypeId + "&sigunguCode=" + sigunguCode;

                String url =  url_1 + url_2 + "&serviceKey={serviceKey}";


                String response = wc.get()
                    .uri(url, decodingKey)
                    .retrieve()
                    .bodyToMono(String.class) //MonoFlatMap형 리턴함
                    .block();

//                System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//                System.out.println(response);
                JSONObject items = XML.toJSONObject(response.toString()).getJSONObject("response").getJSONObject("body").getJSONObject("items");
                JSONArray item = items.getJSONArray("item");

                PlaceInfoDTO[] arr = gson.fromJson(item.toString(), PlaceInfoDTO[].class);
                List<PlaceInfoDTO> list = Arrays.asList(arr);

                joined.addAll(list); //시군구 코드 여러개인 경우 하나의 리스트로 합친다.
            }

        } ////시군구 코드 Ex[1, 5, 7] 반복문 End

        Collections.shuffle(joined);
        return joined;


    };

    @Override
    public Boolean saveSchedule(List<String> dateList, Map<Integer, List<PlanBlockDTO>> planList, String cityName){
        TripSchedule tripSchedule = new TripSchedule();
        TripDailySchedule tripDailySchedule = new TripDailySchedule();
        TripDetailSchedule tripDetailSchedule = new TripDetailSchedule();

        /*TRIP_SCHEDULE*/
        //1. 여행일정 ID를 seq 사용해서 저장해야 함.
        //2. 회원 ID도 프론트에서 받아와서 저장해야 함.
        tripSchedule.getUserTripSchedule().setId("m000005");
        tripSchedule.setCityName(cityName);
        tripSchedule.setDateList( String.join(",", dateList) );
        //3. 등록일자로 현재date 저장해야 함.



        //tripscheduleRepository.save();


        /*TRIP_DAILY_SCHEDULE*/
        for (Map.Entry<Integer, List<PlanBlockDTO>> entry : planList.entrySet()) {
            int day = entry.getKey(); // DAY1
            List<PlanBlockDTO> planBlocks = entry.getValue(); // PlanBlockDTO 목록


//            tripDailySchedule.setDayId(day);



            // 각 PlanBlockDTO를  TripDetailSchedule Entity로 변환하여 저장합니다.
//            for (PlanBlockDTO planBlockDTO : planBlocks) {
//                // PlanBlockDTO의 필드 값을 전달하여 TripDetailSchedule Entity를 생성
//                TripDetailSchedule planBlockEntity = new PlanBlockEntity();
//                planBlockEntity.setOrder(planBlockDTO.getOrder());
//                planBlockEntity.setPlaceOrder(planBlockDTO.getPlaceOrder());
//                planBlockEntity.setChecked(planBlockDTO.isChecked());
//                planBlockEntity.setType(planBlockDTO.getType());
//                planBlockEntity.setTitle(planBlockDTO.getTitle());
//                planBlockEntity.setLocation(planBlockDTO.getLocation());
//                // contentid, mapx, mapy  필드 set해야
//
//                entityManager.persist(planBlockEntity);
//            }
        }






        /*TRIP_DETAIL_SCHEDULE*/










//        tripscheduleRepository.saveTripSchedule(tripSchedule, tripDailySchedule, tripDetailSchedule);
        return true;
    }


}