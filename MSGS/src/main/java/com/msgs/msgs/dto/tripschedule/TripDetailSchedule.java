package com.msgs.msgs.dto.tripschedule;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "trip_detail_schedule")
@IdClass(TripDetailScheduleId.class)
@Data
public class TripDetailSchedule {

    @Id
    @Column(name = "schedule_d_id", length = 15)
    private String id;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "schedule_id", nullable = false)
    private TripSchedule tripDetailSchedule;

    @Column(length = 50)
    private String title;

    @Column(length = 15)
    private String type;

    @Column(length = 200)
    private String loc;

    @Column(name = "map_lon", columnDefinition = "number")
    private int mapLon;

    @Column(name = "schedule_order", columnDefinition = "number")
    private String scheduleOrder;

    @Column(name = "map_lat", columnDefinition = "number")
    private String mapLat;

    @Column(name = "map_level", columnDefinition = "number")
    private String mapLevel;

    @Column(length = 300)
    private String memo;

    //
    @OneToMany(mappedBy = "tripScheduleImage")
    private List<TripScheduleImage> tripScheduleImages = new ArrayList<>();

}
