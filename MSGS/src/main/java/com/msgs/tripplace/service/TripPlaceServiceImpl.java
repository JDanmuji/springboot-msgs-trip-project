package com.msgs.tripplace.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.msgs.msgs.dto.StoryCommentDTO;
import com.msgs.msgs.dto.TripPlaceReviewDTO;
import com.msgs.msgs.entity.placereview.PlaceReview;
import com.msgs.msgs.entity.tripstory.StoryComment;
import com.msgs.msgs.entity.tripstory.TripStory;
import com.msgs.msgs.entity.user.UserEntity;
import com.msgs.msgs.entity.user.UserImg;
import com.msgs.tripplace.dao.TripPlaceDAO;
import com.msgs.user.dao.UserDAO;

@Service
public class TripPlaceServiceImpl implements TripPlaceService {

	@Autowired
	private UserDAO userDAO;
	
	@Autowired
	private TripPlaceDAO tripPlaceDAO;
	
	@Override
	public void reviewSubmit(TripPlaceReviewDTO tripPlaceReviewDTO) {
		System.out.println(tripPlaceReviewDTO);
		PlaceReview placeReview = new PlaceReview();
		
		// userId 이용한 UserEntity 엔티티 반환
		Optional<UserEntity> userEntity = userDAO.findById(tripPlaceReviewDTO.getUserId());
		if(userEntity.isPresent()) {
			UserEntity resultUserEntity = userEntity.get();
			placeReview.setUserPlaceReview(resultUserEntity);
		}
		
		// seq 값은 자동 생성되므로 set 사용 X
		placeReview.setContentId(tripPlaceReviewDTO.getContentId());
		placeReview.setTitle(tripPlaceReviewDTO.getTitle());
		placeReview.setContentTypeId(tripPlaceReviewDTO.getContentTypeId());
		placeReview.setContentTypeName(tripPlaceReviewDTO.getContentTypeName());
		placeReview.setCityName(tripPlaceReviewDTO.getCityName());
		placeReview.setRate(tripPlaceReviewDTO.getRate());
		placeReview.setComment(tripPlaceReviewDTO.getComment());
		placeReview.setRegDate(tripPlaceReviewDTO.getRegDate());
		
		tripPlaceDAO.save(placeReview);
	}

	@Override
	public List<TripPlaceReviewDTO> getReviewList(Boolean isSortedByLike, String contentId) {
        
        if(isSortedByLike) {
//        	return tripPlaceDAO.findAllWithImgOrderLike(contentId);
        	return null;
        } else {
        	return tripPlaceDAO.findAllWithImgOrderDate(contentId);
        }

//        List<StoryCommentDTO> resultList = new ArrayList<>(); // 반환받을 DTO
//        
//        for(Object[] result : queryResult) {
//        	StoryComment storyComment = (StoryComment) result[0];
//        	UserEntity userEntity = (UserEntity) result[1];
//        	UserImg userImg = (UserImg) result[2];
//        	System.out.println("=======getCommentList===========" + result);
//        	
//            StoryCommentDTO storyCommentDTO = new StoryCommentDTO(); // StoryCommentDTO 객체 생성
//
//            storyCommentDTO.setUserId(userEntity.getId());
//            storyCommentDTO.setUserName(userEntity.getName());
//            storyCommentDTO.setSeq(storyComment.getSeq());
//            storyCommentDTO.setContent(storyComment.getContent());
//            storyCommentDTO.setStoryId(storyComment.getTripStoryCmnt().getId());
//            
//            if(userImg != null) {
//        		storyCommentDTO.setUserImgPath(userImg.getImgPath());
//        	}
//            // 리스트에 댓글 하나 더함
//        	resultList.add(storyCommentDTO);
//        }
//		return resultList;
	}
}
