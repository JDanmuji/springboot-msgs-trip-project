package com.msgs.mypage.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.msgs.msgs.entity.tripschedule.TripSchedule;

@Repository
public interface MyPageDAO extends JpaRepository<TripSchedule, String> {
	
//    @Query("SELECT ts, tsd FROM TripSchedule ts LEFT JOIN WHERE ts.phone LIKE %:phone%")
    // @Param: 쿼리 메서드의 매개변수와 쿼리에서 사용하는 매개변수 이름을 연결시켜주는 역할
//    Optional<UserEntity> findByPhone(@Param("phone") String phone);


}

