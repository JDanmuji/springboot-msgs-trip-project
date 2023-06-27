package com.msgs.tripschedule.repository;

import com.msgs.msgs.entity.tripschedule.TripDailySchedule;
import com.msgs.msgs.entity.tripschedule.TripDetailSchedule;
import com.msgs.msgs.entity.tripschedule.TripSchedule;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import org.springframework.transaction.annotation.Transactional;
/*
@Repository
//@RequiredArgsConstructor
@Transactional(readOnly = false)
public class TripscheduleRepository {
    @PersistenceContext
    private EntityManager em;

    public void saveTripSchedule(TripSchedule tripSchedule){
        em.persist(tripSchedule);
    }

    public void saveTripDaily(TripDailySchedule tripDaily){
        em.persist(tripDaily);
    }

    public void saveTripDetail(TripDetailSchedule tripDetail){
        em.persist(tripDetail);
    }

}
*/