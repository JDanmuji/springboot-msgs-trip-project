package com.msgs.tripstory.service;

import java.util.Map;
import java.util.List;
import org.springframework.http.ResponseEntity;

import com.msgs.msgs.dto.StoryBlockDTO;
import com.msgs.msgs.dto.StoryCommentDTO;
import com.msgs.msgs.dto.TripStoryMainDTO;
import com.msgs.tripstory.dto.StoryLikeCountDTO;

public interface TripStoryService {

    Boolean saveStory(Map<String, String> storyData, List<String> dateList, Map<Integer, List<StoryBlockDTO>> storyList, Map<Integer, String> dailyComment);
    
    // 이야기 상세페이지 내용 가져오기
    public ResponseEntity<String> getStoryDetail(String storyId);

    // 이야기 상세 댓글
    public List<StoryCommentDTO> getCommentList(String tripId);
    public void commentInsert(StoryCommentDTO storyCommentDTO);
    
    // 이야기 좋아요
    public void storyLike(StoryLikeCountDTO storyLikeCountDTO);

    // 이야기 목록 가져오기
	public List<TripStoryMainDTO> getStoryList();
}

