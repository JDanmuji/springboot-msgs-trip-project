package com.msgs.tripstory.dao;

import com.msgs.msgs.entity.tripstory.TripStory;
import com.msgs.msgs.entity.tripstory.TripStoryId;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TripStoryDAO extends JpaRepository<TripStory, TripStoryId> {
/*
    @Query("SELECT sc FROM StoryComment sc JOIN sc.userStoryCmnt usc JOIN usc.userImg")
    List<StoryComment> findAllWithUserImg();
*/
}

