package com.msgs.tripstory.service;


import java.util.List;

import com.msgs.msgs.dto.StoryCommentDTO;
import com.msgs.msgs.entity.tripstory.StoryComment;
import com.msgs.tripstory.dto.StoryLikeCountDTO;

public interface TripStoryService {

    public List<StoryCommentDTO> getCommentList(String tripId);

    public void storyLike(StoryLikeCountDTO storyLikeCountDTO);

	public void commentInsert(StoryCommentDTO storyCommentDTO);
}

