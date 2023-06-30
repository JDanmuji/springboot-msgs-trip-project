package com.msgs.mypage.service;


import java.util.Optional;

import java.util.ArrayList;
import java.util.List;


import com.msgs.msgs.dto.MyPageScheduleDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.msgs.msgs.dto.TripScheduleDTO;
import com.msgs.mypage.dao.MyPageDAO;

import com.msgs.msgs.entity.user.UserEntity;
import com.msgs.mypage.dto.MyPageUserDTO;

@Service
public class MyPageServiceImpl implements MyPageService {
	
  @Autowired
	private MyPageDAO myPageDAO;
  
	@Override
	public MyPageUserDTO getMyInfo(String userId) {
		Optional<UserEntity> userEntity = myPageDAO.findById(userId);

        if (userEntity.isPresent()) {
            UserEntity resultUserEntity = userEntity.get();
            MyPageUserDTO myPageUserDTO = new MyPageUserDTO(resultUserEntity);

            System.out.println("myPageUserDTO 데이터 있음 ");
            return myPageUserDTO;
            
        }
        
        System.out.println("myPageUserDTO 비어있음 ");

        return null;
	}
	
	// 회원 탈퇴
	@Override
	public void userDelete(String id) {
		myPageDAO.deleteById(id);
	}



//	@Override
//	public void insertImgPath(String imagePath, String userId) {
//		MyPageUserDTO userDTO = new MyPageUserDTO();
//		userDTO.setImgPath(imagePath);
//		myPageDAO.save(userDTO);
//	}

	

//	@Override
//	public void insertImagePath(String imagePath) {
//		MyPageUserDTO userDTO = new MyPageUserDTO();
//		userDTO.setImgPath(imagePath);
//		myPageDAO.save(userDTO);
//	}
	
	// tripSchedule List 조회
	@Override
	public List<TripScheduleDTO> tripListAll(String id) {
//        List<Object[]> queryResult = myPageDAO.findAllWithTripAndDetail();
        
        List<TripScheduleDTO> resultList = new ArrayList<>(); // 반환받을 DTO

		return resultList;
	}



	//----------
	@Override
	public List<MyPageScheduleDTO> getScheduleList(String id) {
		List<MyPageScheduleDTO> scheduleList = myPageDAO.findMyPageTripSchedule(id);
		System.out.println(scheduleList.get(0).getScheduleId());
		System.out.println(scheduleList.get(0).getUserId());
		for(int i=0; i < scheduleList.size(); i++){
			int cnt = myPageDAO.countMyPageTripSchedule(id, scheduleList.get(i).getScheduleId());
			scheduleList.get(i).setPlaceCnt(cnt);
		}
		return scheduleList;
	}


}
