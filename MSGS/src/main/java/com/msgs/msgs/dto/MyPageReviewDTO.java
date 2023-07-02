package com.msgs.msgs.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;

import com.msgs.msgs.entity.placereview.PlaceReview;
import com.msgs.msgs.entity.tripschedule.TripSchedule;
import com.msgs.msgs.entity.user.UserEntity;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MyPageReviewDTO {
    // Entity
    // User
    private String userId;

    // Like
    private String likeId;

    // place review
    private int reviewId;
    private String contentId;
    private String title; // 장소 이름
    private String contentTypeId;
    private String contentTypeName; // 장소 타입
    private String cityName; // 위치
    private String comment; // 내용
    private BigDecimal rate;
    private LocalDate regDate;
    private LocalDate modDate;
    
    public MyPageReviewDTO(UserEntity userEntity, PlaceReview placeReview){
        this.userId = userEntity.getId();
        this.reviewId = placeReview.getId();
        this.contentId = placeReview.getContentId();
        this.title = placeReview.getTitle();
        this.contentTypeId = placeReview.getContentTypeId();
        this.contentTypeName = placeReview.getContentTypeName();
        this.cityName = placeReview.getCityName();
        this.comment = placeReview.getComment();
        this.rate = placeReview.getRate();
        this.regDate = placeReview.getRegDate();
        this.modDate = placeReview.getModDate();
    }


}
