package com.msgs.tripstory.service;

import java.util.List;
import org.springframework.http.ResponseEntity;

import com.msgs.msgs.dto.StoryCommentDTO;
import com.msgs.tripstory.dto.StoryLikeCountDTO;

public interface TripStoryService {
	
	public ResponseEntity<String> getStoryDetail(String storyId);

    public List<StoryCommentDTO> getCommentList(String tripId);

    public void storyLike(StoryLikeCountDTO storyLikeCountDTO);

	public void commentInsert(StoryCommentDTO storyCommentDTO);
}

