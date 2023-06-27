package com.msgs.msgs.entity.tripschedule;

import com.msgs.msgs.entity.placereview.PlaceReview;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Table(name = "trip_detail_schedule")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class TripDetailSchedule {

    @Id
    @Column(name = "order_day_id")
    private int orderDayId;

    //join with trip schedule
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "daily_id", nullable = false)
    private TripDailySchedule tripDailySchedule;

    @Column(name="`order`")
    private int order;

    @Column(name = "place_order")
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


}
