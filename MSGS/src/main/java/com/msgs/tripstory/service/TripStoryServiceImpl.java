package com.msgs.tripstory.service;


import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.msgs.msgs.entity.tripstory.StoryComment;

import java.util.List;

@Service
public class TripStoryServiceImpl implements TripStoryService {

	@Override
	public List<StoryComment> storyCommentsList() {
		// TODO Auto-generated method stub
		return null;
	}
/*
    @Autowired
    private TripStoryDAO tripStoryDAO;

    @Override
    public List<StoryComment> storyCommentsList() {
        System.out.println("serviceImpl 호출");
        return tripStoryDAO.findAllWithUserImg();
    }

 */
}