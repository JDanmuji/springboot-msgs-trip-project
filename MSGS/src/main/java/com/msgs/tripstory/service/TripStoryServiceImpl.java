package com.msgs.tripstory.service;


import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.msgs.msgs.dto.StoryCommentDTO;
import com.msgs.msgs.entity.tripstory.StoryComment;
import com.msgs.msgs.entity.tripstory.TripStory;
import com.msgs.msgs.entity.tripstory.TripStoryId;
import com.msgs.msgs.entity.user.UserEntity;
import com.msgs.tripstory.dao.StoryCommentDAO;
import com.msgs.tripstory.dao.TripStoryDAO;
import com.msgs.user.dao.UserDAO;

import java.math.BigInteger;
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
	public List<StoryComment> storyCommentsList() {
		// TODO Auto-generated method stub
		return null;
	}



/*    @Override
    public List<StoryComment> storyCommentsList() {
        System.out.println("serviceImpl 호출");
        return tripStoryDAO.findAllWithUserImg();
    }
 */

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
		
		// 1. TripStory Entity는 복합키이므로 String 2개로 넘어온 데이터 타입을 기본키 클래스(TripStoryId)로 변환
		System.out.println("====================" + new BigInteger(storyCommentDTO.getScheduleId()));
		TripStoryId tripStoryId = new TripStoryId(storyCommentDTO.getTripId(), Long.valueOf(storyCommentDTO.getScheduleId()));
		System.out.println("====================" + tripStoryId.getId());
		System.out.println("====================" + tripStoryId.getTripSchedule());

		// 2. tripId 이용한 TripStory 엔티티 반환
		Optional<TripStory> tripStory =  tripStoryDAO.findById(tripStoryId);
		if(tripStory.isPresent()) {
			TripStory resultTripStory = tripStory.get();
			System.out.println("222222222resultTripStory" + resultTripStory);
			storyComment.setTripStoryCmnt(resultTripStory);	
		}

		System.out.println("TripStoryServiceImpl");
		System.out.println("...................." + storyCommentDTO.getTripId());
		System.out.println("...................." + storyCommentDTO.getUserId());
		System.out.println("...................." + storyCommentDTO.getContent());
		System.out.println("...................." + storyCommentDTO.getRegDate());
		System.out.println("...................." + storyCommentDTO.getModDate());

		storyCommentDAO.save(storyComment);
	}
}
