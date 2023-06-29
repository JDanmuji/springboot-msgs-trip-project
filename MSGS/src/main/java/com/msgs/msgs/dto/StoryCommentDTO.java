package com.msgs.msgs.dto;

import java.time.LocalDate;

import com.msgs.msgs.entity.tripstory.StoryComment;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class StoryCommentDTO {
	private String userId; // UserEntity의 userId
	private String userImgPath; // UserImg

	private String storyId; // TripStory의 storyId(복합키)
	private String scheduleId; // TripStory scheduleId(복합키)

	private String content;
	
    private LocalDate regDate;
    private LocalDate modDate;
    	
}
