package com.msgs.tripstory.service;


import com.msgs.msgs.dto.StoryBlockDTO;
import java.util.List;

import com.msgs.msgs.dto.StoryCommentDTO;
import com.msgs.msgs.entity.tripstory.StoryComment;
import com.msgs.tripstory.dto.StoryLikeCountDTO;
import java.util.Map;

public interface TripStoryService {

    Boolean saveStory(Map<String, String> storyData, List<String> dateList, Map<Integer, List<StoryBlockDTO>> storyList, Map<Integer, String> dailyComment);

    public List<StoryCommentDTO> getCommentList(String tripId);


 //   List<StoryComment> storyCommentsList();
    
    public void storyLike(StoryLikeCountDTO storyLikeCountDTO);

	public void commentInsert(StoryCommentDTO storyCommentDTO);


//	public List<StoryComment> storyCommentsList();
}

