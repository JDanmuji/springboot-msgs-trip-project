package com.msgs.tripstory.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.msgs.msgs.entity.tripstory.StoryComment;

@Repository
public interface TripStoryUserDataListDAO extends JpaRepository<StoryComment, Integer> {

}
