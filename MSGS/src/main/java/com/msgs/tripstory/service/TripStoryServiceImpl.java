package com.msgs.tripstory.service;

import com.msgs.msgs.entity.tripstory.StoryComment;
import com.msgs.tripstory.dao.TripStoryDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class TripStoryServiceImpl implements TripStoryService {
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
