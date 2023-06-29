package com.msgs.msgs.dto;

import java.time.LocalDate;
import java.util.List;

import com.msgs.msgs.entity.placereview.PlaceReview;
import com.msgs.msgs.entity.user.UserEntity;
import com.msgs.msgs.entity.user.UserImg;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TripStoryMainDTO {

	// TripStory
    private int storyId;
    private int scheduleId;
    private String title;
    private String comment;
    private String dateList;	
    
    // private UserEntity userEntity;
    private String userId;
    private String userName;
    
    // private UserImg userImg;
    private String userImgPath;
    
    // find
    private String storyImgOriginName;
    private String storyImgPath;

}
