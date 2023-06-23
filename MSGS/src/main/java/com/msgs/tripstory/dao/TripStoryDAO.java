package com.msgs.tripstory.dao;

import com.msgs.msgs.entity.tripstory.StoryComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TripStoryDAO extends JpaRepository<StoryComment, Integer> {
/*
    @Query("SELECT sc FROM StoryComment sc JOIN sc.userStoryCmnt usc JOIN usc.userImg")
    List<StoryComment> findAllWithUserImg();
*/
}

