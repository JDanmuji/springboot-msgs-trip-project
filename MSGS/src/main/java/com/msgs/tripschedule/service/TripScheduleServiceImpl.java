package com.msgs.tripschedule.service;

import com.msgs.msgs.dto.PlanBlockDTO;
import com.msgs.msgs.entity.tripschedule.DetailScheduleID;
import com.msgs.msgs.entity.tripschedule.TripDailySchedule;
import com.msgs.msgs.entity.tripschedule.TripDetailSchedule;
import com.msgs.msgs.entity.tripschedule.TripSchedule;
import com.msgs.msgs.entity.user.UserEntity;
import com.msgs.tripschedule.dao.DailyScheduleDAO;
import com.msgs.tripschedule.dao.DetailScheduleDAO;
import com.msgs.tripschedule.dao.TripScheduleDAO;
import com.msgs.user.dao.UserDAO;
import java.time.LocalDateTime;
import java.util.Arrays;
import com.google.gson.Gson;
import com.msgs.msgs.dto.PlaceInfoDTO;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.json.JSONArray;
import org.json.JSONObject;
import org.json.XML;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.reactive.function.client.WebClient;
import java.util.Collections;


@Service
@RequiredArgsConstructor
public class TripScheduleServiceImpl implements TripScheduleService {

    @Value("${tourApi.decodingKey}")
    private String decodingKey;

    List<Integer> contentTypeIds = Arrays.asList(12, 39); //place의 contentId 저장해놓음. 12=관광지, 39=음식점
    Gson gson = new Gson();

//    @Autowired
//    private final TripscheduleRepository tripscheduleRepo;
//    @Autowired
//    private EntityManager entityManager;

    @Autowired
    private UserDAO userDAO;
    @Autowired
    private TripScheduleDAO scheduleDAO;
    @Autowired
    private DailyScheduleDAO dailyScheduleDAO;
    @Autowired
    private DetailScheduleDAO detailScheduleDAO;



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
                "&numOfRows=100" + //100개 출력됨.
                "&arrange=Q" +
                "&contentTypeId=32" + //숙박
                "&areaCode=" + areaCode;


        //시군구 코드 Ex[1, 5, 7] 반복문
        for(int sigunguCode : sigunguCodeList ){
            System.out.println("시군구코드!!!!!!!!!!! = " + sigunguCode);

            //sigunguCode가 없는 경우면 url에서 뺀다.
            String url_2 = sigunguCode == 0 ? "" : "&sigunguCode=" + sigunguCode;
            String url =  url_1 + url_2 + "&serviceKey={serviceKey}";

            System.out.println("url!!!!!!!!!!! = "+ url);

            String response = wc.get()
                .uri(url, decodingKey)
                .retrieve()
                .bodyToMono(String.class) //MonoFlatMap형 리턴함
                .block();

            JSONObject items = XML.toJSONObject(response.toString()).getJSONObject("response").getJSONObject("body").getJSONObject("items");
            JSONArray item = items.getJSONArray("item"); //item = [{...}, {...}, ...]

            // title값 가공
            JSONArray filteredArray = new JSONArray();

            // 제목 뒤의 부가설명 지우기
            for(int i = 0; i < item.length(); i++){
                JSONObject filteredItem = item.getJSONObject(i);
                String firstimage2 = filteredItem.getString("firstimage2");
                String title = filteredItem.getString("title");

                //이미지나 타이틀 정보 없는 경우 뺀다.
                if(firstimage2.isEmpty() || title.isEmpty()) {
                    continue;
                }

                String modifiedTitle = (title.indexOf("[") != -1 && title.indexOf("]") != -1)
                    ? title.substring(0, title.indexOf("["))
                    : title;

                filteredItem.put("title", modifiedTitle.trim());
                filteredArray.put(filteredItem);

            }

            PlaceInfoDTO[] arr = gson.fromJson(filteredArray.toString(), PlaceInfoDTO[].class);
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
                "&numOfRows=50" + //50개 출력됨.
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


                JSONObject items = XML.toJSONObject(response.toString()).getJSONObject("response").getJSONObject("body").getJSONObject("items");
                JSONArray item = items.getJSONArray("item");

                // title값 가공
                JSONArray filteredArray = new JSONArray();

                // 제목 뒤의 부가설명 지우기
                for(int i = 0; i < item.length(); i++){
                    JSONObject filteredItem = item.getJSONObject(i);
                    String title = filteredItem.getString("title");
                    String firstimage2 = filteredItem.getString("firstimage2");

                    //이미지나 타이틀 정보 없는 경우 뺀다.
                    if(firstimage2.isEmpty() || title.isEmpty()) {
                        continue;
                    }

                    String modifiedTitle = (title.indexOf("[") != -1 && title.indexOf("]") != -1)
                        ? title.substring(0, title.indexOf("["))
                        : title;

                    filteredItem.put("title", modifiedTitle.trim());
                    filteredArray.put(filteredItem);

                }

                PlaceInfoDTO[] arr = gson.fromJson(item.toString(), PlaceInfoDTO[].class);
                List<PlaceInfoDTO> list = Arrays.asList(arr);

                joined.addAll(list); //시군구 코드 여러개인 경우 하나의 리스트로 합친다.
            }

        } ////시군구 코드 Ex[1, 5, 7] 반복문 End

        Collections.shuffle(joined);
        return joined;


    };




    @Override
    @Transactional
    //planList(tripSchedule 페이지에서 입력한 일정) 저장
    public Boolean saveSchedule(List<String> dateList, Map<Integer, List<PlanBlockDTO>> planList, String cityName){

        try{
            /*TRIP_SCHEDULE*/
//            Optional<UserEntity> userEntity = userDAO.findById("m000001"); // id 이용해서 UserEntity 엔티티 가져오기 */
            Optional<UserEntity> userEntity = userDAO.findById("0f82a90f9f96402"); // id 이용해서 UserEntity 엔티티 가져오기 */
            UserEntity resultUserEntity = userEntity.get();

            //1. 여행일정 ID는 seq 값이 자동으로 들어감
            TripSchedule tripSchedule = new TripSchedule();
            tripSchedule.setUserEntity(resultUserEntity);
            tripSchedule.setCityName(cityName);
            tripSchedule.setDateList( String.join(",", dateList) );
            //3. 등록일자로 현재date 저장해야 함.


            System.out.println(resultUserEntity.getId());

            TripSchedule savedTripSchedule = null;
            TripDailySchedule savedDailySchedule = null;
            //여기까진 잘 돌아감.
            try{
                /*TRIP_SCHEDULE 에 저장*/
                savedTripSchedule = scheduleDAO.saveAndFlush(tripSchedule); //DB에 저장 -> id 얻어오기 위함
//              // 여기서 에러났었음.
            }catch(Exception e){
                System.out.println("scheduleDAO.saveAndFlush(tripSchedule) 에서 에러남=================================");
                System.out.println(e);
            }


            /*TRIP_DAILY_SCHEDULE*/
            for (Map.Entry<Integer, List<PlanBlockDTO>> entry : planList.entrySet()) {
                /*TRIP_DAILY_SCHEDULE 에 저장*/
                TripDailySchedule tripDailySchedule = new TripDailySchedule();
                tripDailySchedule.setTripSchedule(savedTripSchedule);
                savedDailySchedule = dailyScheduleDAO.saveAndFlush(tripDailySchedule); // DB에 저장


                int day = entry.getKey(); // DAY1
                List<PlanBlockDTO> planBlocks = entry.getValue(); // PlanBlockDTO 목록


                    /*TRIP_DETAIL_SCHEDULE 에 저장*/
                    // 각 PlanBlockDTO를  TripDetailSchedule Entity로 변환하여 저장
                    for(PlanBlockDTO planBlockDTO : planBlocks) {  //planBlocks = List<PlanBlockDTO>>


                        // PlanBlockDTO의 필드 값을 전달하여 TripDetailSchedule Entity를 생성
                        TripDetailSchedule tripDetail = new TripDetailSchedule();
                        tripDetail.setTripDailySchedule(savedDailySchedule);
                        tripDetail.setOrderDay(day);
                        tripDetail.setOrder(planBlockDTO.getOrder());
                        tripDetail.setPlaceOrder(planBlockDTO.getPlaceOrder());
                        tripDetail.setTitle(planBlockDTO.getTitle());
                        tripDetail.setType(planBlockDTO.getType());
                        tripDetail.setLocation(planBlockDTO.getLocation());
                        tripDetail.setMapx(planBlockDTO.getMapx());
                        tripDetail.setMapy(planBlockDTO.getMapy());
                        tripDetail.setContentid(planBlockDTO.getContentid());
                        tripDetail.setFirstimage2(planBlockDTO.getFirstimage2());

                        //엔티티를 분리(detach)하고, 변경된 상태를 영속성 컨텍스트에 반영
                        //entityManager.merge(tripDetail);
                        //entityManager.detach(tripDetail);
                        detailScheduleDAO.saveAndFlush(tripDetail);


                    }
            }


        }catch (Exception e) {
            System.out.println(e);
            return false;
        }

        return true;


    }



    @Override
    @Transactional
    //해당 schedule_id 에 해당하는 여행일정 정보 반환함
    public Map<String, Object> getSchedule(int scheduleId){

        Map<String, Object> responseMap = new HashMap<>();

        /* schedule_id 이용해서 SchduleEntity 엔티티 가져오기 */
        Optional<TripSchedule> scheduleEntity = scheduleDAO.findById(scheduleId);
        TripSchedule resultScheduleEntity = scheduleEntity.get();

        System.out.println("Sche111111111111111111111111111111111111111111111111");
        /* [1] areaTitle */
        String areaTitle = resultScheduleEntity.getCityName();
        System.out.println("areaTitle" + areaTitle);
        responseMap.put("areaTitle", areaTitle);

        /* [2] dateList */
        List<String> dateList = new ArrayList<String>(Arrays.asList(
            resultScheduleEntity.getDateList().split(",")));
        responseMap.put("dateList", dateList);

        /* [3] planList */
        Map<Integer, List<PlanBlockDTO>> planList = new HashMap<>();
        List<TripDailySchedule> dailyScheList = dailyScheduleDAO.findAllByTripSchedule_Id(scheduleId);

        for (TripDailySchedule dailySchedule: dailyScheList){
            int dailyId = dailySchedule.getDailyId();
            System.out.println("dailyId" + dailyId);
            System.out.println("sche222222222222222222222222222222222222222222222222222222222222222222");
            List<TripDetailSchedule> detailScheList = detailScheduleDAO.findAllByTripDailySchedule_DailyId(dailyId);


            List<PlanBlockDTO> planBlockList = new ArrayList<>();

            for (TripDetailSchedule detailSchedule : detailScheList){

                PlanBlockDTO planblock = new PlanBlockDTO();
                planblock.setOrder(detailSchedule.getOrder());
                planblock.setPlaceOrder(detailSchedule.getPlaceOrder());
                planblock.setTitle(detailSchedule.getTitle());
                System.out.println("getTitle"+ detailSchedule.getTitle());
                planblock.setType(detailSchedule.getType());
                planblock.setLocation(detailSchedule.getLocation());

                planblock.setMapx(detailSchedule.getMapx());
                planblock.setMapy(detailSchedule.getMapy());
                planblock.setContentid(detailSchedule.getContentid());
                planblock.setFirstimage2(detailSchedule.getFirstimage2());


                System.out.println("sche3333333333333333333333333333333333333333");

                // 리스트에 PlanBlockDTO 객체 추가
                planBlockList.add(planblock);

                // Map에 Key(몇일차)와 함께 리스트(일정블록 객체들이 있는 배열)를 추가
                planList.put(detailSchedule.getOrderDay(), planBlockList);



            }

        }
        responseMap.put("planList", planList);

        return responseMap;

    }










    @Override
    @Transactional
//    planList(tripSchedule 페이지에서 수정한 일정) 업데이트
    public Boolean updateSchedule(List<String> dateList, Map<Integer, List<PlanBlockDTO>> planList, String scheduleId){

        try{

            /*TRIP_SCHEDULE 업데이트 -> mod_date(수정 시간) 컬럼 추가하기 위함*/
            Optional<TripSchedule> tripSchedule = scheduleDAO.findById(Integer.valueOf(scheduleId)); // id 이용해서 TripSchedule 엔티티 가져오기 */
            TripSchedule resultScheduleEntity = tripSchedule.get();

            resultScheduleEntity.setModDate(LocalDateTime.now());

            /*TRIP_SCHEDULE 에 저장*/
            scheduleDAO.saveAndFlush(resultScheduleEntity); //DB에 update해서 수정시간(mod_date)컬럼을 저장함.

//=============================================================================================================================

            for (Map.Entry<Integer, List<PlanBlockDTO>> entry : planList.entrySet()) {

                /*scheduleId 를 외래키로 갖고 있는 TRIP_DAILY_SCHEDULE의 레코드들을 갖고와서 daily_id를 얻는다*/
                List<TripDailySchedule> dailyScheList = dailyScheduleDAO.findAllByTripSchedule_Id(
                    Integer.parseInt(scheduleId));

                for (TripDailySchedule dailySchedule: dailyScheList){
//                    int dailyId = dailySchedule.getDailyId();


                    /* 얻은 daily_id를 통해 detailSchedule 레코드들을 Update함*/
                    int day = entry.getKey(); // DAY1
                    List<PlanBlockDTO> planBlocks = entry.getValue(); // PlanBlockDTO 목록

//                  List<TripDetailSchedule> detailScheList = detailScheduleDAO.findAllByTripDailySchedule_DailyId(dailyId);



                    /*TRIP_DETAIL_SCHEDULE 에 저장(=Update)*/
                    // 각 PlanBlockDTO를  TripDetailSchedule Entity로 변환하여 저장
                    for(PlanBlockDTO planBlockDTO : planBlocks) {

                        DetailScheduleID detailScheId = new DetailScheduleID(planBlockDTO.getOrder(), dailySchedule);
                        Optional<TripDetailSchedule> detailSche = detailScheduleDAO.findById(detailScheId);
                        TripDetailSchedule resultDetailSche = detailSche.get();

                        // PlanBlockDTO의 필드 값을 전달하여 TripDetailSchedule Entity를 생성

                        resultDetailSche.setTripDailySchedule(dailySchedule);
                        resultDetailSche.setOrderDay(day);
                        resultDetailSche.setOrder(planBlockDTO.getOrder());
                        resultDetailSche.setPlaceOrder(planBlockDTO.getPlaceOrder());
                        resultDetailSche.setTitle(planBlockDTO.getTitle());
                        resultDetailSche.setType(planBlockDTO.getType());
                        resultDetailSche.setLocation(planBlockDTO.getLocation());
                        resultDetailSche.setMapx(planBlockDTO.getMapx());
                        resultDetailSche.setMapy(planBlockDTO.getMapy());
                        resultDetailSche.setContentid(planBlockDTO.getContentid());

                        detailScheduleDAO.saveAndFlush(resultDetailSche);


                    }



                }






            }


        }catch (Exception e) {
            System.out.println(e);
            return false;
        }

        return true;


    }

}