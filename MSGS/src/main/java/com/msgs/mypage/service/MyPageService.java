package com.msgs.mypage.service;

import java.util.List;

import com.msgs.msgs.dto.TripScheduleDTO;

public interface MyPageService {

	List<TripScheduleDTO> tripListAll(String id);

}