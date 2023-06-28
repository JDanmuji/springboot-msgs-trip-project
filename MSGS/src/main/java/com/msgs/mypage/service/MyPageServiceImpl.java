package com.msgs.mypage.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.msgs.msgs.dto.TripScheduleDTO;
import com.msgs.msgs.temp.TempUserAndLikeDTO;
import com.msgs.mypage.dao.MyPageDAO;

@Service
public class MyPageServiceImpl implements MyPageService {
	
	@Autowired
	private MyPageDAO myPageDAO;

	// tripSchedule List 조회
	@Override
	public List<TripScheduleDTO> tripListAll(String id) {
//        List<Object[]> queryResult = myPageDAO.findAllWithTripAndDetail();
        
        List<TripScheduleDTO> resultList = new ArrayList<>(); // 반환받을 DTO

		return resultList;
	}

}
