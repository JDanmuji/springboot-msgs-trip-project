package com.msgs.tripplace.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.msgs.msgs.dto.StoryCommentDTO;
import com.msgs.msgs.dto.TripPlaceReviewDTO;
import com.msgs.msgs.entity.placereview.PlaceReview;
import com.msgs.msgs.entity.placereview.PlaceReviewImg;
import com.msgs.msgs.entity.tripstory.StoryComment;
import com.msgs.msgs.entity.tripstory.TripStory;
import com.msgs.msgs.entity.user.UserEntity;
import com.msgs.msgs.entity.user.UserImg;
import com.msgs.tripplace.dao.PlaceReviewImageDAO;
import com.msgs.tripplace.dao.TripPlaceDAO;
import com.msgs.user.dao.UserDAO;

import jakarta.persistence.PrePersist;

@Service
public class TripPlaceServiceImpl implements TripPlaceService {

	@Autowired
	private UserDAO userDAO;

	@Autowired
	private TripPlaceDAO tripPlaceDAO;
	
	@Autowired
	private PlaceReviewImageDAO placeReviewImageDAO;
	
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
		placeReview.setRegDate(LocalDate.now());
		
		PlaceReview newPlaceReview = tripPlaceDAO.saveAndFlush(placeReview);
	
		
		// 이미지 있을 경우 저장
		if (!tripPlaceReviewDTO.getReviewImgList().isEmpty()) {
		    List<HashMap<String, String>> reviewImgList = tripPlaceReviewDTO.getReviewImgList();
		    
		    int index = 1;
		    
		    for (HashMap<String, String> reviewImg : reviewImgList) {
		    	PlaceReviewImg placeReviewImg = new PlaceReviewImg();
		    	placeReviewImg.setPlaceReview(newPlaceReview);

	            System.out.println("서비스임플 이미지 저장: " + reviewImg.get("key" + index));
	            placeReviewImg.setImgPath(reviewImg.get("key" + index));
	            placeReviewImageDAO.saveAndFlush(placeReviewImg);
	            
	            index++;
		    }
		}
	}

	@Override
	public List<TripPlaceReviewDTO> getReviewList(Boolean isSortedByLike, String contentId) {
	    List<TripPlaceReviewDTO> reviewList;
	    
	    if (isSortedByLike) {
	        reviewList = tripPlaceDAO.findAllWithUserOrderLike(contentId);
	    } else {
	        reviewList = tripPlaceDAO.findAllWithUserOrderDate(contentId);
	    }
	    
	    for (TripPlaceReviewDTO review : reviewList) {
	    	// 유저가 지금까지 작성한 리뷰 수 추가
	        int userReviewCount = tripPlaceDAO.getUserReviewCount(review.getUserId());
	        review.setUserReviewCnt(userReviewCount);

	        // 리뷰별 이미지 리스트 추가
	        List<PlaceReviewImg> reviewImgList = tripPlaceDAO.findImgListById(review.getReviewId());
	        List<HashMap<String, String>> imgList = new ArrayList<>();
	        
	        for (PlaceReviewImg img : reviewImgList) {
	        	HashMap<String, String> imgDetails = new HashMap<>();
	            imgDetails.put("imgOriginName", img.getImgOriginName());
	            imgDetails.put("imgServerName", img.getImgServerName());
	            imgDetails.put("imgPath", img.getImgPath());
	            imgList.add(imgDetails);
	        }
	        review.setReviewImgList(imgList);
	    }
	    return reviewList;
	}
}
