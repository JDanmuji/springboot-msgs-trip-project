package com.msgs.mypage.controller;

import com.msgs.msgs.dto.MyPageReviewDTO;
import com.msgs.msgs.dto.MyPageScheduleDTO;
import com.msgs.msgs.dto.TripStoryMainDTO;
import com.msgs.msgs.dto.UserEntityDTO;

import com.msgs.msgs.dto.MyPageReviewDTO;
import com.msgs.msgs.dto.MyPageScheduleDTO;

import com.msgs.msgs.jwt.controller.UserController2;
import com.msgs.mypage.service.MyPageService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("mypage")
public class MyPageController3 {

    @Autowired
    private UserController2 userController2;

    @Autowired
    private MyPageService myPageService;

    public JSONObject getUserInfo(String token) {
        ResponseEntity<?> userInfoResponse = userController2.getUserInfo(token);
        JSONObject userInfo = new JSONObject((String) userInfoResponse.getBody());
        return userInfo;
    }

    @PostMapping("/profile")
    public UserEntityDTO getProfile(@RequestBody Map<String, String> tokenValue) {
    	String token = tokenValue.get("tokenValue");
        JSONObject userInfo = getUserInfo(token);
        String id = userInfo.getString("id");
        return myPageService.getProfile(id);
    }

    @PostMapping("/scheduleList")
    public List<MyPageScheduleDTO> getScheduleList(@RequestBody Map<String, String> tokenValue) {
    	String token = tokenValue.get("tokenValue");
        JSONObject userInfo = getUserInfo(token);
        String id = userInfo.getString("id");
        return myPageService.getScheduleList(id);
    }

    @PostMapping("/reviewList")
    public List<MyPageReviewDTO> getReviewList(@RequestBody Map<String, String> tokenValue) {
    	String token = tokenValue.get("tokenValue");
        JSONObject userInfo = getUserInfo(token);
        String id = userInfo.getString("id");
        return myPageService.getReviewList(id);
    }
    
    
  @PostMapping("/storyList")
  public List<TripStoryMainDTO> getStoryList(@RequestBody Map<String, String> tokenValue) {
	  String token = tokenValue.get("tokenValue");
      JSONObject userInfo = getUserInfo(token);
      String id = userInfo.getString("id");
      return myPageService.getStoryList(id);
  }
  

}