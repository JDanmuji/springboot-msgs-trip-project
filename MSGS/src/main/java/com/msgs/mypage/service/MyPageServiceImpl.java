package com.msgs.mypage.service;


import java.util.Optional;

import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.msgs.msgs.dto.TripScheduleDTO;
import com.msgs.msgs.temp.TempUserAndLikeDTO;
import com.msgs.mypage.dao.MyPageDAO;

import com.msgs.msgs.entity.user.UserEntity;
import com.msgs.msgs.temp.TempUserAndLikeDTO;
import com.msgs.mypage.dao.MyPageDAO;
import com.msgs.mypage.dto.MyPageUserDTO;
import com.msgs.temp.dao.TempUserDAO;

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


}
