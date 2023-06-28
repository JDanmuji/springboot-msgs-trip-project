package com.msgs.tripschedule.dao;

import com.msgs.msgs.entity.tripschedule.DailyScheduleID;
import com.msgs.msgs.entity.tripschedule.TripDailySchedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DailyScheduleDAO extends JpaRepository<TripDailySchedule, Long>  {
}
