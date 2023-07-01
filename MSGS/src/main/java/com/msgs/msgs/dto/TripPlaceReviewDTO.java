package com.msgs.msgs.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class TripPlaceReviewDTO {
	
	// PLACE_REVIEW
	private String reviewId;
	private String userId;
	private String contentId;
	private String title;
	private String contentTypeId;
	private String contentTypeName;
	private String cityName;
	private int rate;
	private String comment;
	private String regDate;
	private String modDate;
	
	// PLACE_REVIEW_IMAGE
	private int imgSeq;
	private String imgOriginName;
	private String imgServerName;
	private String imgPath;
}
