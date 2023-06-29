package com.msgs.msgs.dto;

import com.msgs.msgs.entity.tripschedule.TripDailySchedule;
import com.msgs.msgs.entity.tripschedule.TripDetailSchedule;
import com.msgs.msgs.entity.tripschedule.TripSchedule;
import com.msgs.msgs.entity.user.UserEntity;
import java.time.LocalDate;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ScheduleEntityDTO {

    //TripSchedule Entity
    private int id;
    private UserEntity userEntity; //String userId
    private String cityName;
    private String dateList;
    private LocalDateTime regDate;
    private LocalDateTime modDate;

    //TripDailySchedule Entity
    private int dailyId;
    private TripSchedule tripSchedule; //int id

    //TripDetailSchedule Entity
    private int orderDay;
    private TripDailySchedule tripDailySchedule; //int daily_
    private int order;
    private int placeOrder;
    private String title;
    private String type;
    private String location;
    private Double mapx;
    private Double mapy;
    private String contentid;

    public ScheduleEntityDTO(TripSchedule tripSchedule) {
        this.id = tripSchedule.getId();
        this.userEntity = tripSchedule.getUserEntity();
        this.cityName = tripSchedule.getCityName();
        this.dateList = tripSchedule.getDateList();
        this.regDate = tripSchedule.getRegDate();
        this.modDate = tripSchedule.getModDate();
    }

    public ScheduleEntityDTO(TripDailySchedule tripDailySchedule) {
        this.dailyId = tripDailySchedule.getDailyId();
        this.tripSchedule = tripDailySchedule.getTripSchedule();
    }

    public ScheduleEntityDTO(TripDetailSchedule tripDetailSchedule) {
        this.orderDay = tripDetailSchedule.getOrderDay();
        this.tripDailySchedule = tripDetailSchedule.getTripDailySchedule();
        this.order = tripDetailSchedule.getOrder();
        this.placeOrder = tripDetailSchedule.getPlaceOrder();
        this.title = tripDetailSchedule.getTitle();
        this.type = tripDetailSchedule.getType();
        this.location = tripDetailSchedule.getLocation();
        this.mapx = tripDetailSchedule.getMapx();
        this.mapy = tripDetailSchedule.getMapy();
        this.contentid = tripDetailSchedule.getContentid();
    }
}
