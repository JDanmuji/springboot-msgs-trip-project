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
	    List<TripPlaceReviewDTO> reviewList;
	    
	    if (isSortedByLike) {
	        reviewList = tripPlaceDAO.findAllWithImgOrderLike(contentId);
//	        reviewList = tripPlaceDAO.findAllWithImgOrderDate(contentId);
	    } else {
	        reviewList = tripPlaceDAO.findAllWithImgOrderDate(contentId);
	    }
	    
	    // 유저가 지금까지 작성한 리뷰 수 추가
	    for (TripPlaceReviewDTO review : reviewList) {
	        int userReviewCount = tripPlaceDAO.getUserReviewCount(review.getUserId());
	        review.setUserReviewCnt(userReviewCount);
	    }
	    
	    return reviewList;
	}

}
