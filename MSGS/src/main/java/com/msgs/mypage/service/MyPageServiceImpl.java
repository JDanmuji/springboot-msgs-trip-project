package com.msgs.mypage.service;

import java.util.Optional;

import java.util.ArrayList;
import java.util.List;

import com.msgs.msgs.dto.MyPageReviewDTO;
import com.msgs.msgs.dto.MyPageScheduleDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.msgs.msgs.dto.TripScheduleDTO;
import com.msgs.msgs.dto.TripStoryMainDTO;
import com.msgs.msgs.dto.UserEntityDTO;
import com.msgs.mypage.dao.MyPageDAO;
import com.msgs.msgs.entity.tripstory.StoryImg;
import com.msgs.msgs.entity.tripstory.TripStory;
import com.msgs.msgs.entity.user.UserEntity;
import com.msgs.msgs.entity.user.UserImg;
import com.msgs.mypage.dto.MyPageUserDTO;
import com.msgs.tripstory.dao.TripStoryDAO;
import com.msgs.user.dao.UserDAO;

@Service
public class MyPageServiceImpl implements MyPageService {

	@Autowired
	private MyPageDAO myPageDAO;

	@Autowired
	private UserDAO userDAO;

	@Autowired
	private TripStoryDAO tripStoryDAO;

	// 유저 정보 불러오기
//	@Override
//	public MyPageUserDTO getMyInfo(String userId) {
//		MyPageUserDTO myInfo = myPageDAO.findMyInfo(userId);
//		
//	System.out.println(userEntity);
//        if (userEntity.isPresent()) {
//            UserEntity resultUserEntity = userEntity.get();
//            MyPageUserDTO myPageUserDTO = new MyPageUserDTO(resultUserEntity);
//
//            System.out.println("myPageUserDTO 데이터 있음 ");
//            return myPageUserDTO;
//            
//        }
//        
//        System.out.println("myPageUserDTO 비어있음 ");
//
//        return myInfo;
//	}

//	// 회원 탈퇴
//	@Override
//	public void userDelete(String userId) {
//		myPageDAO.deleteById(userId);
//	}

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

	
	
	
	
	
	
	
	
	
	
	
	
	
	// ========== 유저 정보 불러오기 ==========
	@Override
	public MyPageUserDTO getMyInfo(String userId) {
		MyPageUserDTO myInfo = myPageDAO.findMyInfo(userId);
		return myInfo;
	}
	
	// ========== 유저 정보 업데이트 ==========
	@Override
	public void updateMyInfo(String id) {
		List<Object[]> queryResult = myPageDAO.findUserEntity(id);
		
		UserEntity userEntity = (UserEntity) queryResult.get(0)[0];
		UserImg userImg = (UserImg) queryResult.get(0)[1];
		
		
		
	}
	
	// ========== 유저 정보 삭제 ==========
	@Override
	public void deleteMyInfo(String id) {
//		MyPageUserDTO myInfo = myPageDAO.findMyInfoForDelete(id);
//	    myInfo.setUserEmail("");
//	    myInfo.setUserPhone("");
//	    myInfo.setUserPwd("");
//	    myInfo.setUserName("");
//	    myInfo.setUserGender("");
//	    myInfo.setRegDate("");
//	    myInfo.setModDate("");
//	    myInfo.setLocationConsent("");
//	    myInfo.setRegUser("");
//	    myInfo.setProfileImage("");
//	    
//	    myInfo.setImgOriginName("");
//	    myInfo.setImgPath("");
//	    myInfo.setImgRegDate(null);
//		myPageDAO.save(id);
	}
	
	

	// ========== 여행 일정 불러오기 ==========
	@Override
	public List<MyPageScheduleDTO> getScheduleList(String id) {
		List<MyPageScheduleDTO> scheduleList = myPageDAO.findMyPageTripSchedule(id);
		System.out.println(scheduleList.size());
		for (int i = 0; i < scheduleList.size(); i++) {
			int cnt = myPageDAO.countMyPageTripSchedule(id, scheduleList.get(i).getScheduleId());
			System.out.println(cnt);
			scheduleList.get(i).setPlaceCnt(cnt);

		}
		return scheduleList;
	}

	// ========== 유저 이미지 불러오기 ==========
	@Override
	public UserEntityDTO getProfile(String id) {
		Optional<UserEntity> userEntity = userDAO.findById(id);

		if (userEntity.isPresent()) {
			UserEntity resultUserEntity = userEntity.get();
			UserEntityDTO userEntityDTO = new UserEntityDTO();
			userEntityDTO.setImgPath(resultUserEntity.getUserImg().getImgPath());

			System.out.println("=======getProfile===========" + resultUserEntity.getUserImg().getImgPath());

			return userEntityDTO;
		}
		return null;
	}

	// ========== 리뷰 리스트 불러오기 ==========
	@Override
	public List<MyPageReviewDTO> getReviewList(String id) {
		List<MyPageReviewDTO> getReviewList = myPageDAO.findMyPageTripLocReview(id);
		return getReviewList;
	}

	// ========== 여행 이야기 불러오기 ==========
	@Override
	public List<TripStoryMainDTO> getStoryList(String id) {
		List<Object[]> queryResult = tripStoryDAO.findAllWithStoryImgsAndUserAndImg(); // 반환받은 Entity

		List<TripStoryMainDTO> resultList = new ArrayList<>(); // 반환받을 DTO

		for (Object[] result : queryResult) {
			TripStory tripStory = (TripStory) result[0];
			UserEntity userEntity = (UserEntity) result[1];
			UserImg userImg = (UserImg) result[2];
			StoryImg storyImg = (StoryImg) result[3];

			TripStoryMainDTO tripStoryMainDTO = new TripStoryMainDTO(); // TripStoryMainDTO 객체 생성

			// 매개변수 id와 userEntity.getId()가 같은 데이터만 처리
			if (!userEntity.getId().equals(id)) {
				continue;
			}

			tripStoryMainDTO.setStoryId(tripStory.getId());
			tripStoryMainDTO.setScheduleId(tripStory.getTripSchedule().getId());
			tripStoryMainDTO.setCityName(tripStory.getCityName());
			tripStoryMainDTO.setTitle(tripStory.getTitle());
			tripStoryMainDTO.setDateList(tripStory.getDateList());
			tripStoryMainDTO.setComment(tripStory.getComment());
			tripStoryMainDTO.setRegDate(tripStory.getRegDate());
			tripStoryMainDTO.setModDate(tripStory.getModDate());
			tripStoryMainDTO.setUserId(userEntity.getId());
			tripStoryMainDTO.setUserName(userEntity.getName());

			if (userImg != null && storyImg != null) {
				tripStoryMainDTO.setUserImgPath(userImg.getImgPath());
				tripStoryMainDTO.setStoryImgOriginName(storyImg.getImgOriginName());
				tripStoryMainDTO.setStoryImgPath(storyImg.getImgPath());
			} else if (userImg != null) {
				tripStoryMainDTO.setUserImgPath(userImg.getImgPath());
			} else if (storyImg != null) {
				tripStoryMainDTO.setStoryImgOriginName(storyImg.getImgOriginName());
				tripStoryMainDTO.setStoryImgPath(storyImg.getImgPath());
			} else {
				System.out.println("하이!");
			}

			resultList.add(tripStoryMainDTO);

		}

		return resultList;

	}

}