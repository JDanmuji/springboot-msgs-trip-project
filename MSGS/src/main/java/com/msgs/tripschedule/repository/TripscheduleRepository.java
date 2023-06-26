package com.msgs.tripschedule.repository;

import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import com.msgs.msgs.entity.tripstory.StoryComment;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class TripscheduleRepository {
    private final EntityManager em;

    public Boolean findAllStoryCommentsList() {


        //em.createQuery("select storyComment from StoryComment storyComment", StoryComment.class).getResultList();

        return true;


    }
}
