package com.msgs.msgs.dto;

import com.msgs.msgs.entity.tripschedule.TripDailySchedule;
import com.msgs.msgs.entity.tripschedule.TripDetailSchedule;
import com.msgs.msgs.entity.tripschedule.TripSchedule;
import com.msgs.msgs.entity.user.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MyPageScheduleDTO {
    // Entity
    // User
    private String userId;

    // trip schedule
    private int scheduleId;
    private String cityName; // 도시이름
    private String dateList; // 여행 일자 리스트
    private LocalDateTime regDate;
    private LocalDateTime modDate;

    //
    private int placeCnt;

    public MyPageScheduleDTO(UserEntity userEntity) {
        this.userId = userEntity.getId();
    }
    public MyPageScheduleDTO(TripSchedule tripSchedule) {
        this.scheduleId = tripSchedule.getId();
        this.cityName = tripSchedule.getCityName();
        this.dateList = tripSchedule.getDateList();
        this.regDate = tripSchedule.getRegDate();
        this.modDate = tripSchedule.getModDate();
    }

    public MyPageScheduleDTO(UserEntity userEntity, TripSchedule tripSchedule){
        this.userId = userEntity.getId();
        this.scheduleId = tripSchedule.getId();
        this.cityName = tripSchedule.getCityName();
        this.dateList = tripSchedule.getDateList();
        this.regDate = tripSchedule.getRegDate();
        this.modDate = tripSchedule.getModDate();
    }

    public MyPageScheduleDTO(UserEntity userEntity, TripSchedule tripSchedule, TripDetailSchedule tripDetailSchedule){
        this.userId = userEntity.getId();
        this.scheduleId = tripSchedule.getId();
        this.cityName = tripSchedule.getCityName();
        this.dateList = tripSchedule.getDateList();
        this.regDate = tripSchedule.getRegDate();
        this.modDate = tripSchedule.getModDate();
    }


}
