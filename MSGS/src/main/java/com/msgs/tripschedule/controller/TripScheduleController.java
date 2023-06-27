package com.msgs.tripschedule.controller;


import com.msgs.msgs.dto.PlaceInfoDTO;
import com.msgs.msgs.dto.PlanBlockDTO;
import com.msgs.tripschedule.service.TripScheduleService;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController  // JSON 형식의 데이터 반환
@RequestMapping("/tripschedule")
@CrossOrigin(origins = "http://localhost:3000")
public class TripScheduleController {

    @Autowired
    private TripScheduleService tripScheduleService;


    //해당 areaCode, sigunguCode 에 해당하는 숙박 정보
    @GetMapping("/dormInfo")
    public List<PlaceInfoDTO> getDormList(@RequestParam int areaCode, @RequestParam List<Integer> sigunguCodeList) {
        System.out.println(sigunguCodeList.getClass().getName());
        System.out.println(sigunguCodeList);
        return tripScheduleService.getDormList(areaCode, sigunguCodeList);
    }

    //해당 areaCode, sigunguCode 에 해당하는 관광지, 음식점 정보
    @GetMapping("/placeInfo")
    public List<PlaceInfoDTO> getPlaceList(@RequestParam int areaCode, @RequestParam List<Integer> sigunguCodeList) {
        return tripScheduleService.getPlaceList(areaCode, sigunguCodeList);
    }

    //프론트에서 받은 여행일정 데이터를 DB에 저장함
    @PostMapping("/schedule")
    public ResponseEntity<Void> saveSchedule(@RequestBody List<String> dateList,
        @RequestBody Map<Integer, List<PlanBlockDTO>> planList,
        @RequestBody String cityName){
        Boolean isSuccess = tripScheduleService.saveSchedule(dateList, planList, cityName);

        if(isSuccess){
            return ResponseEntity.status(HttpStatus.OK).build();
        }else{
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }


}
