package com.msgs.tripstory.dao;

import com.msgs.msgs.entity.tripstory.TripStory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StoryDAO extends JpaRepository<TripStory, Integer> {
}
