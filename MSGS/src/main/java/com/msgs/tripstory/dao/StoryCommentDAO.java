package com.msgs.tripstory.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.msgs.msgs.entity.tripstory.StoryComment;
import com.msgs.msgs.entity.tripstory.TripStory;

@Repository
public interface StoryCommentDAO extends JpaRepository<StoryComment, Integer> {

}
