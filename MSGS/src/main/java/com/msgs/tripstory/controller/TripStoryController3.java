package com.msgs.tripstory.controller;

import lombok.RequiredArgsConstructor;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.msgs.msgs.entity.tripstory.StoryLikeCount;
import com.msgs.msgs.entity.user.UserEntity;
import com.msgs.tripstory.dto.StoryLikeCountDTO;
import com.msgs.tripstory.service.TripStoryService;

@RestController // JSON 또는 XML 형식의 데이터를 반환
@RequestMapping("/tripstory")
@RequiredArgsConstructor // final variable에 대한 생성자 생성
public class TripStoryController3 {

	private final TripStoryService tripStoryService;
	
	// 회원 가입
    @PostMapping("/getStorylike")
    public void storyLike(@RequestBody StoryLikeCountDTO storyLikeCountDTO) {
        tripStoryService.storyLike(storyLikeCountDTO);
    }
	
	
}
