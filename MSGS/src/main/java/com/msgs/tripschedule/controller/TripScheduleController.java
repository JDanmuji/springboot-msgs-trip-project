package com.msgs.tripschedule.controller;


import com.msgs.msgs.dto.PlaceInfoDTO;
import com.msgs.tripschedule.service.TripScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController  // JSON 형식의 데이터 반환
@RequestMapping("/tripschedule")
public class TripScheduleController {

    @Autowired
    private TripScheduleService tripScheduleService;


    //해당 areaCode, sigunguCode 에 해당하는 숙박 정보
    @GetMapping("/dormInfo")
    public List<PlaceInfoDTO> getDormList(@RequestParam int areaCode, @RequestParam("sigunguCode[]") List<Integer> sigunguCode) {
        return tripScheduleService.getDormList(areaCode, sigunguCode);

    }







}
