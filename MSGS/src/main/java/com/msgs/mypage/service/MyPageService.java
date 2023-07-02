package com.msgs.mypage.service;

import com.msgs.msgs.dto.MyPageReviewDTO;
import com.msgs.msgs.dto.MyPageScheduleDTO;
import com.msgs.mypage.dto.MyPageUserDTO;

import java.util.List;

import com.msgs.msgs.dto.TripScheduleDTO;
import com.msgs.msgs.dto.TripStoryMainDTO;
import com.msgs.msgs.dto.UserEntityDTO;

public interface MyPageService {

	public List<TripScheduleDTO> tripListAll(String id);
  
	// 회원 정보 불러오기
	public MyPageUserDTO getMyInfo(String userId);

//	public void insertImgPath(String imagePath, String userId);

	public List<MyPageScheduleDTO> getScheduleList(String id);

	public List<MyPageReviewDTO> getReviewList(String id);

	public UserEntityDTO getProfile(String id);

	public List<TripStoryMainDTO> getStoryList(String id);

	public void updateMyInfo(String id);

	public void deleteMyInfo(String useId);

}
