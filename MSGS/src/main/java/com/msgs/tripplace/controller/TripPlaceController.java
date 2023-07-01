package com.msgs.tripplace.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.msgs.msgs.dto.TripPlaceReviewDTO;
import com.msgs.msgs.entity.placereview.PlaceReview;
import com.msgs.tripplace.service.TripPlaceService;
import com.msgs.tripstory.service.TripStoryService;

import lombok.RequiredArgsConstructor;

@RequestMapping("tripplace")
@RestController // JSON 또는 XML 형식의 데이터를 반환
@RequiredArgsConstructor // final variable에 대한 생성자 생성
public class TripPlaceController {
	
	private final TripPlaceService tripPlaceService;
	
    @PostMapping(value = "/reviewSubmit")
    public void reviewSubmit(@RequestBody TripPlaceReviewDTO tripPlaceReviewDTO) {
    	tripPlaceService.reviewSubmit(tripPlaceReviewDTO);
    }
}
