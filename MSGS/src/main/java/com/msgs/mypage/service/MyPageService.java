package com.msgs.mypage.service;

import com.msgs.mypage.dto.MyPageUserDTO;

import java.util.List;

import com.msgs.msgs.dto.TripScheduleDTO;

public interface MyPageService {

	List<TripScheduleDTO> tripListAll(String id);
  
  
	MyPageUserDTO getMyInfo(String userId);

	void userDelete(String id);

//	void insertImgPath(String imagePath, String userId);

}
