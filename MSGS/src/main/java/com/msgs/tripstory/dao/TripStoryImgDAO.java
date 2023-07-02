package com.msgs.tripstory.dao;

import com.msgs.msgs.entity.tripschedule.TripSchedule;
import com.msgs.msgs.entity.tripstory.StoryImg;
import com.msgs.msgs.entity.tripstory.schedule.StoryDetailImg;
import com.msgs.msgs.entity.tripstory.schedule.StoryDetailImgID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TripStoryImgDAO extends JpaRepository<StoryImg, Integer> {
}
