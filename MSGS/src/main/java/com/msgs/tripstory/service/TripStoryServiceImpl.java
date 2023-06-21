package com.msgs.tripstory.service;

<<<<<<< HEAD
import com.msgs.msgs.dto.tripstory.StoryComment;
import com.msgs.tripstory.repository.TripStoryRepository;
import lombok.RequiredArgsConstructor;
=======
import com.msgs.msgs.entity.tripstory.StoryComment;
import com.msgs.tripstory.dao.TripStoryDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
<<<<<<< HEAD
@Transactional // auto-commit
@RequiredArgsConstructor
public class TripStoryServiceImpl implements TripStoryService {

    private final TripStoryRepository tripStoryRepository;

    @Override
    @Transactional(readOnly = true)
    public List<StoryComment> storyCommentsList() {
        return tripStoryRepository.findAllStoryCommentsList();
    }
=======
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
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b
}
