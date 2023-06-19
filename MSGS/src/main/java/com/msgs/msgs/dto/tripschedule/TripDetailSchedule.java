package com.msgs.msgs.dto.tripschedule;

import com.msgs.msgs.dto.placereview.PlaceReview;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "trip_detail_schedule")
@IdClass(TripDetailScheduleId.class)
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class TripDetailSchedule {

    @Id
    @Column(name = "schedule_d_id", length = 15)
    private String id;

    //join with trip schedule
    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "day_id", nullable = false)
    private TripDailySchedule tripDailySchedule;

    @Column(length = 50)
    private String title;

    @Column(length = 15)
    private String type;

    @Column(length = 200)
    private String loc;

    @Column(name = "map_lon", columnDefinition = "decimal(10, 6)")
    private BigDecimal mapLon;

    @Column(name = "schedule_order")
    private int scheduleOrder;

    @Column(name = "map_lat", columnDefinition = "decimal(10, 6)")
    private BigDecimal mapLat;

    @Column(name = "map_level")
    private int mapLevel;

    @Column(length = 300)
    private String memo;

    //mapping
    @OneToOne(mappedBy = "tripPlaceReview", fetch = FetchType.LAZY)
    private PlaceReview placeReviews;

}
