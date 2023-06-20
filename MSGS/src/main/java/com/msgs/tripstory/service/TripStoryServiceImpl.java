package com.msgs.tripstory.service;

import com.msgs.msgs.dto.tripstory.StoryComment;
import com.msgs.tripstory.repository.TripStoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional // auto-commit
@RequiredArgsConstructor
public class TripStoryServiceImpl implements TripStoryService {

    private final TripStoryRepository tripStoryRepository;

    @Override
    @Transactional(readOnly = true)
    public List<StoryComment> storyCommentsList() {
        return tripStoryRepository.findAllStoryCommentsList();
    }
}
