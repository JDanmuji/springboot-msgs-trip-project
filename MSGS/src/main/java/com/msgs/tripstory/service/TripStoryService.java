package com.msgs.tripstory.service;

import com.msgs.msgs.dto.StoryResponseDTO;
import java.util.Map;
import java.util.List;
import org.springframework.http.ResponseEntity;

import com.msgs.msgs.dto.StoryBlockDTO;
import com.msgs.msgs.dto.StoryCommentDTO;
import com.msgs.msgs.dto.TripStoryMainDTO;
import com.msgs.tripstory.dto.StoryLikeCountDTO;

public interface TripStoryService {


    // 이야기 상세페이지 내용 가져오기
    StoryResponseDTO getStoryDetail(int storyId);

    // 이야기 상세 댓글
    public List<StoryCommentDTO> getCommentList(int storyId);
    public void commentInsert(StoryCommentDTO storyCommentDTO);
   

    Boolean saveStory(Map<String, Object> storyData, List<String> dateList, Map<Integer, String> dailyComment, Map<Integer, List<StoryBlockDTO>> storyList);
  
 
    // 이야기 좋아요
    public void storyLike(StoryLikeCountDTO storyLikeCountDTO);

    // 이야기 목록 가져오기
	public List<TripStoryMainDTO> getStoryList();
}

