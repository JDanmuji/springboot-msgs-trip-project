package com.msgs.tripstory.service;


import java.util.List;

import com.msgs.msgs.dto.StoryCommentDTO;
import com.msgs.msgs.entity.tripstory.StoryComment;

public interface TripStoryService {

    public List<StoryCommentDTO> getCommentList(String tripId);

	public void commentInsert(StoryCommentDTO storyCommentDTO);


//	public List<StoryComment> storyCommentsList();
}

