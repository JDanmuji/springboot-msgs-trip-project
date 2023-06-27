package com.msgs.tripschedule.repository;

import com.msgs.msgs.entity.tripschedule.TripDailySchedule;
import com.msgs.msgs.entity.tripschedule.TripDetailSchedule;
import com.msgs.msgs.entity.tripschedule.TripSchedule;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import org.springframework.transaction.annotation.Transactional;

@Repository
@RequiredArgsConstructor
public class TripscheduleRepository {
    @PersistenceContext
    private EntityManager em;

    @Transactional
    public Boolean saveTripSchedule(TripSchedule tripSchedule, TripDailySchedule tripDailySchedule,
        TripDetailSchedule tripDetailSchedule) {

        try{
            em.persist(tripSchedule);


            em.persist(tripDailySchedule);
            em.persist(tripDetailSchedule);

        }catch (Exception e) {

            return false;
        }

        return true;

    }
}
