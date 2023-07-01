package com.msgs.msgs.dto;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import com.msgs.msgs.entity.placereview.PlaceReview;
import com.msgs.msgs.entity.placereview.PlaceReviewImg;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class TripPlaceReviewDTO {
	
	// PLACE_REVIEW
	private int reviewId;
	private String userId;
	private String contentId;
	private String title;
	private String contentTypeId;
	private String contentTypeName;
	private String cityName;
	private BigDecimal rate;
	private String comment;
	private LocalDate regDate;
	private LocalDate modDate;
	
	// PLACE_REVIEW_IMAGE
	private int imgSeq;
	private String imgOriginName;
	private String imgServerName;
	private String imgPath;
    
    // DTO 생성자로 entity 값 주입 - 이미지 없는 리뷰 가져올 때
	public TripPlaceReviewDTO(PlaceReview placeReview) {
	    this.reviewId = placeReview.getId();
	    this.userId = placeReview.getUserPlaceReview().getId();
	    this.contentId = placeReview.getContentId();
	    this.title = placeReview.getTitle();
	    this.contentTypeId = placeReview.getContentTypeId();
	    this.contentTypeName = placeReview.getContentTypeName();
	    this.cityName = placeReview.getCityName();
	    this.rate = placeReview.getRate();
	    this.comment = placeReview.getComment();
	    this.regDate = placeReview.getRegDate();
	    this.modDate = placeReview.getModDate();
	}
    
    // DTO 생성자로 entity 값 주입 - 이미지 있는 리뷰 가져올 때 (미완)
	public TripPlaceReviewDTO(PlaceReview placeReview, List<PlaceReviewImg> placeReviewImgList) {
	    this.reviewId = placeReview.getId();
	    this.userId = placeReview.getUserPlaceReview().getId();
	    this.contentId = placeReview.getContentId();
	    this.title = placeReview.getTitle();
	    this.contentTypeId = placeReview.getContentTypeId();
	    this.contentTypeName = placeReview.getContentTypeName();
	    this.cityName = placeReview.getCityName();
	    this.rate = placeReview.getRate();
	    this.comment = placeReview.getComment();
	    this.regDate = placeReview.getRegDate();
	    this.modDate = placeReview.getModDate();
	    
	    this.imgSeq = 0;
	    this.imgOriginName = null;
	    this.imgServerName = null;
	    this.imgPath = null;
	}
}
