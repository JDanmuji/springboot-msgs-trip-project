package com.msgs.tripstory.dao;

import com.msgs.msgs.entity.tripschedule.TripSchedule;
import com.msgs.msgs.entity.tripstory.schedule.StoryDailySchedule;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StoryDailyDAO  extends JpaRepository<StoryDailySchedule, Integer> {
    List<StoryDailySchedule> findAllByTripStory_Id(int id);
}
