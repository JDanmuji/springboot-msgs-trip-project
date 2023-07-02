package com.msgs.msgs.entity.tripschedule;

import jakarta.persistence.*;
import lombok.*;

@Entity
@IdClass(DetailScheduleID.class)
@Table(name = "trip_detail_schedule")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class TripDetailSchedule {

    @Id
    @Column(name="order_id")
    private int order;

    //join with trip schedule
    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "daily_id", nullable = false)
    private TripDailySchedule tripDailySchedule;


    @Column(name = "order_day", nullable = false)
    private int orderDay;

    @Column(name = "place_order", nullable = false)
    private int placeOrder;

    @Column(length = 50)
    private String title;

    @Column(length = 15)
    private String type;

    @Column(length = 200)
    private String location;

    @Column(name = "map_x", columnDefinition = "decimal(10, 6)")
    private Double mapx;

    @Column(name = "map_y", columnDefinition = "decimal(10, 6)")
    private Double mapy;

    @Column(length = 10, name = "content_id")
    private String contentid;

    @Column(length = 300, name = "firstimage2")
    private String firstimage2;


}
