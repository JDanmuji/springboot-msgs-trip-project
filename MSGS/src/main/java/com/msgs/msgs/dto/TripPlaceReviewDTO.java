package com.msgs.msgs.dto;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;

import com.msgs.msgs.entity.placereview.PlaceReview;
import com.msgs.msgs.entity.user.UserEntity;
import com.msgs.msgs.entity.user.UserImg;

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
	// 이미지 넣을 때
	private List<Object> base64List;
	private int imgSeq;
	private String imgOriginName;
	private String imgServerName;
	private String imgPath;
	// 이미지 꺼내올 때
	private List<HashMap<String, String>> reviewImgList; 
	
	// USER
    private String userName;
    private int userReviewCnt;
    
    // USER_IMAGE
    private String userImgPath;
    
    // DTO 생성자로 entity 값 주입 - 리뷰 이미지 제외
//	public TripPlaceReviewDTO(PlaceReview placeReview, UserEntity userEntity, UserImg userImg, Long userReviewCnt) {
	public TripPlaceReviewDTO(PlaceReview placeReview, UserEntity userEntity, UserImg userImg) {
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

	    this.userName = userEntity.getName();
	    this.userImgPath = userImg != null ? userImg.getImgPath() : null;
	}
	
	// DTO 생성자로 entity 값 주입 - 리뷰 이미지
	public TripPlaceReviewDTO(int reviewId, HashMap<String, String> reviewImg) {
		this.reviewId = reviewId;
//		this.imgOriginName;
//		this.imgServerName;
		this.imgPath = reviewImg.get("imgPath");
	}
}
