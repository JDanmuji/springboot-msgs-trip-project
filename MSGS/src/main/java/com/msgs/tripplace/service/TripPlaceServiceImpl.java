package com.msgs.tripplace.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.msgs.msgs.dto.TripPlaceReviewDTO;
import com.msgs.msgs.entity.placereview.PlaceReview;
import com.msgs.msgs.entity.tripstory.StoryComment;
import com.msgs.msgs.entity.tripstory.TripStory;
import com.msgs.msgs.entity.user.UserEntity;
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
		placeReview.setRegDate(tripPlaceReviewDTO.getRegDate());
		
		tripPlaceDAO.save(placeReview);
	}
}
