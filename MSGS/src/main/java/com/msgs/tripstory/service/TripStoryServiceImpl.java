package com.msgs.tripstory.service;


import com.msgs.msgs.dto.StoryBlockDTO;
import java.util.Map;

import lombok.RequiredArgsConstructor;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.msgs.msgs.dto.StoryCommentDTO;

import com.msgs.msgs.dto.TripStoryMainDTO;
import com.msgs.msgs.entity.tripschedule.TripSchedule;

import com.msgs.msgs.entity.tripstory.StoryComment;

import com.msgs.tripstory.dao.TripStoryDAO;
import com.msgs.tripstory.dto.StoryLikeCountDTO;

import com.msgs.msgs.entity.tripstory.TripStory;


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
	public ResponseEntity<String> getStoryDetail(String storyId) {
		// TODO Auto-generated method stub
		return null;
	}



	@Override
	public Boolean saveStory(
		Map<String, String> storyData, List<String> dateList, Map<Integer, List<StoryBlockDTO>> storyList, Map<Integer, String> dailyComment){

		//내용 적어야 됨
		return true;
	}



	@Override
	public List<StoryCommentDTO> getCommentList(String storyId) {
        List<Object[]> queryResult = storyCommentDAO.findAllWithUserAndImg();

        List<StoryCommentDTO> resultList = new ArrayList<>(); // 반환받을 DTO
        
        for(Object[] result : queryResult) {
        	StoryComment storyComment = (StoryComment) result[0];
        	UserEntity userEntity = (UserEntity) result[1];
        	UserImg userImg = (UserImg) result[2];
        	System.out.println("=======getCommentList===========" + result);
        	
            StoryCommentDTO storyCommentDTO = new StoryCommentDTO(); // StoryCommentDTO 객체 생성
                        
            storyCommentDTO.setUserId(userEntity.getId());
            storyCommentDTO.setSeq(storyComment.getSeq());
            storyCommentDTO.setContent(storyComment.getContent());
            storyCommentDTO.setStoryId(storyComment.getTripStoryCmnt().getId());
//            storyCommentDTO.setScheduleId(storyComment.getTripStoryCmnt().getTripSchedule().getId()+ "");
            
            if(userImg != null) {
        		storyCommentDTO.setUserImgPath(userImg.getImgPath());
        	} else {
        		storyCommentDTO.setUserImgPath("noImg");
        	}
        	
        	System.out.println("=======userId===========" + storyCommentDTO.getUserId());
        	resultList.add(storyCommentDTO);
        }
		return resultList;
	}

	@Override
	public void storyLike(StoryLikeCountDTO storyLikeCountDTO) {

		storyLikeCountDTO.setStoryId("");

		storyLikeCountDTO.setUserId("msgs01");
//		tripStoryDAO.save(storyLikeCountDTO);
	}


	@Override
	public void commentInsert(StoryCommentDTO storyCommentDTO) {
		StoryComment storyComment = new StoryComment();
		
		// seq 값은 자동 생성되므로 set 사용 X
		storyComment.setContent(storyCommentDTO.getContent());
		storyComment.setRegDate(storyCommentDTO.getRegDate());
		storyComment.setModDate(storyCommentDTO.getModDate());
		
		// storyId 이용한 TripStory 엔티티 반환
		Optional<TripStory> tripStory = tripStoryDAO.findById(storyCommentDTO.getStoryId());
		if(tripStory.isPresent()) {
			TripStory resultTripStory = tripStory.get();
			storyComment.setTripStoryCmnt(resultTripStory);			
		}
		
		// userId 이용한 UserEntity 엔티티 반환
		Optional<UserEntity> userEntity = userDAO.findById(storyCommentDTO.getUserId());
		if(userEntity.isPresent()) {
			UserEntity resultUserEntity = userEntity.get();
			storyComment.setUserStoryCmnt(resultUserEntity);			
		}

		storyCommentDAO.save(storyComment);
	}


	@Override
	public List<TripStoryMainDTO> getStoryList() {
//        List<Object[]> queryResult = tripStoryDAO.findAllWithStoryImgsAndUserAndImg(); // 반환받은 Entity
//
//
//        List<TripStoryMainDTO> resultList = new ArrayList<>(); // 반환받을 DTO
//
//        for(Object[] result : queryResult) {
//        	TripStory tripStory = (TripStory) result[0];
//        	UserEntity userEntity = (UserEntity) result[1];
//        	UserImg userImg = (UserImg) result[2];
//        //	StoryImg storyImg = (StoryImg) result[3];
//                                	
//        	TripStoryMainDTO tripStoryMainDTO = new TripStoryMainDTO(); // TripStoryMainDTO 객체 생성
//        	
//        	tripStoryMainDTO.setTripId(tripStory.getId()+"");
//        	tripStoryMainDTO.setScheduleId((long)tripStory.getTripSchedule().getId());
//        	tripStoryMainDTO.setTitle(tripStory.getTitle());
//        	tripStoryMainDTO.setComment(tripStory.getComment());
//        	tripStoryMainDTO.setUserId(userEntity.getId());
//        	tripStoryMainDTO.setUserName(userEntity.getName());
////        	
////            if (userImg != null && storyImg != null) {
////                tripStoryMainDTO.setUserImgPath(userImg.getImgPath());
////                tripStoryMainDTO.setStoryImg(storyImg.getImgPath());
////            } else if (userImg != null) {
////                tripStoryMainDTO.setUserImgPath(userImg.getImgPath());
////            } else if (storyImg != null) {
////                tripStoryMainDTO.setStoryImg(storyImg.getImgPath());
////            } else {
////                System.out.println("하이!");
////            }
////            
//        	System.out.println("=======getStoryImgs===========" + tripStoryMainDTO.getStoryImg());
//        	resultList.add(tripStoryMainDTO);
//        	
//        }
//        
//		return resultList;
		
		return null;
	}
	
	// 삭제 예정
//	@Override
//	public List<StoryComment> storyCommentsList() {
//		return null;
//	}

}
