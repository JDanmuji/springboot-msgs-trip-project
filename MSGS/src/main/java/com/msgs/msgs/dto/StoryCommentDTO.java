package com.msgs.msgs.dto;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class StoryCommentDTO {
	private String userId; // UserEntity의 userId
	private String userName;
	private String userImgPath; // UserImg

	private int storyId; // TripStory의 storyId(복합키)
	private int scheduleId; // TripStory scheduleId(복합키)

	private int seq; // comment seq
	private String content;
	
    private LocalDateTime regDate;
    private LocalDateTime modDate;
}
