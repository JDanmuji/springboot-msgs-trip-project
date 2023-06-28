package com.msgs.tripstory.service;


import java.util.List;

import com.msgs.msgs.entity.tripstory.StoryComment;
import com.msgs.tripstory.dto.StoryLikeCountDTO;

public interface TripStoryService {


    List<StoryComment> storyCommentsList();
    
    public void storyLike(StoryLikeCountDTO storyLikeCountDTO);

/*
    List<StoryComment> storyCommentsList();

 */

}
