package com.msgs.tripstory.dao;

import com.msgs.msgs.entity.tripstory.schedule.StoryPlace;
import com.msgs.msgs.entity.tripstory.schedule.StoryPlaceID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StoryPlaceDAO extends JpaRepository<StoryPlace, StoryPlaceID> {
}
