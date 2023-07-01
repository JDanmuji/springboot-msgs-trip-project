package com.msgs.msgs.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

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
    private String reviewId;
    private String contentId;
    private String title;
    private String contentTypeId;
    private String contentTypeName;
    private String cityName;
    private String comment;
    private LocalDate regDate;
    private LocalDate modDate;

}
