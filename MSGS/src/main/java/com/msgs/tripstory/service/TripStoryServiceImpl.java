package com.msgs.tripstory.service;


import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.msgs.msgs.entity.tripstory.StoryComment;
import com.msgs.tripstory.dao.TripStoryDAO;
import com.msgs.tripstory.dto.StoryLikeCountDTO;

import java.time.LocalDate;
import java.util.List;

@Service
public class TripStoryServiceImpl implements TripStoryService {
	
	@Autowired
	    private TripStoryDAO tripStoryDAO;

	@Override
	public List<StoryComment> storyCommentsList() {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public void storyLike(StoryLikeCountDTO storyLikeCountDTO) {
		storyLikeCountDTO.setTripId("");
		storyLikeCountDTO.setUserId("msgs01");
//		tripStoryDAO.save(storyLikeCountDTO);
	}

   
/*
    @Override
    public List<StoryComment> storyCommentsList() {
        System.out.println("serviceImpl 호출");
        return tripStoryDAO.findAllWithUserImg();
    }

 */

	
}
