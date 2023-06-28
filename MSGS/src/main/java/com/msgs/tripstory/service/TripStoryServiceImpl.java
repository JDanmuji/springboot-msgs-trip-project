package com.msgs.tripstory.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.msgs.msgs.dto.StoryCommentDTO;
import com.msgs.msgs.entity.tripstory.StoryComment;

import com.msgs.tripstory.dao.TripStoryDAO;
import com.msgs.tripstory.dto.StoryLikeCountDTO;

import com.msgs.msgs.entity.user.UserEntity;
import com.msgs.msgs.entity.user.UserImg;
import com.msgs.tripstory.dao.StoryCommentDAO;
import com.msgs.user.dao.UserDAO;

import java.util.ArrayList;

import java.util.List;
import java.util.Optional;

@Service
public class TripStoryServiceImpl implements TripStoryService {
	
    @Autowired
    private UserDAO userDAO;
  
    @Autowired
    private TripStoryDAO tripStoryDAO;
    @Autowired
    private StoryCommentDAO storyCommentDAO;


	@Override
	public List<StoryCommentDTO> getCommentList(String tripId) {
        List<Object[]> queryResult = storyCommentDAO.findAllWithUserAndImg();

        List<StoryCommentDTO> resultList = new ArrayList<>(); // 반환받을 DTO
        
        for(Object[] result : queryResult) {
        	StoryComment storyComment = (StoryComment) result[0];
        	UserEntity userEntity = (UserEntity) result[1];
        	UserImg userImg = (UserImg) result[2];
        	System.out.println("=======getCommentList===========" + result);
        	
            StoryCommentDTO storyCommentDTO = new StoryCommentDTO(); // StoryCommentDTO 객체 생성

            if(userImg == null) {
        		storyCommentDTO.setUserId(userEntity.getId());
        		storyCommentDTO.setContent(storyComment.getContent());
        	} else {
        		storyCommentDTO.setUserId(userEntity.getId());
        		storyCommentDTO.setContent(storyComment.getContent());
        		storyCommentDTO.setUserImgPath(userImg.getImgPath());
        	}
        	
        	System.out.println("=======userId===========" + storyCommentDTO.getUserId());
        	resultList.add(storyCommentDTO);
        	
        }
		
		return resultList;
	}

	@Override
	public void storyLike(StoryLikeCountDTO storyLikeCountDTO) {
//		storyLikeCountDTO.setTripId("");
		storyLikeCountDTO.setUserId("msgs01");
//		tripStoryDAO.save(storyLikeCountDTO);
	}





//   @Override
//
//    public List<StoryComment> storyCommentsList() {
//        System.out.println("serviceImpl 호출");
//        return tripStoryDAO.findAllWithUserImg();
//    }




	@Override
	public void commentInsert(StoryCommentDTO storyCommentDTO) {
		StoryComment storyComment = new StoryComment();
		
		// seq값은 자동 생성되므로 set 사용 X
		storyComment.setContent(storyCommentDTO.getContent());
		storyComment.setRegDate(storyCommentDTO.getRegDate());
		storyComment.setModDate(storyCommentDTO.getModDate());
		
		// userId 이용한 UserEntity 엔티티 반환
		Optional<UserEntity> userEntity = userDAO.findById(storyCommentDTO.getUserId());
		if(userEntity.isPresent()) {
			UserEntity resultUserEntity = userEntity.get();
			storyComment.setUserStoryCmnt(resultUserEntity);			
		}		

		

		// 기존
		// TripStory Entity는 복합키이므로 String 2개로 넘어온 데이터 타입을 기본키 클래스(TripStoryId)로 변환
		/*희경이 주석처리함
		TripStoryId tripStoryId = new TripStoryId(storyCommentDTO.getTripId(), Long.valueOf(storyCommentDTO.getScheduleId()));

		Long scheduleId;
		
		// tripId 이용한 TripStory 엔티티 반환
		Optional<TripStory> tripStory = tripStoryDAO.findById(tripStoryId);
		if(tripStory.isPresent()) {
			TripStory resultTripStory = tripStory.get();
			storyComment.setTripStoryCmnt(resultTripStory);
			
			// scheduleId 값 가져오기
			TripSchedule tripSchedule = resultTripStory.getTripSchedule();
			
		    scheduleId = tripSchedule.getId();
		    System.out.println("search===============" + scheduleId);
		}
		
희경이 주석처리함*/
		System.out.println("TripStoryServiceImpl");

		storyCommentDAO.save(storyComment);
	}

}

