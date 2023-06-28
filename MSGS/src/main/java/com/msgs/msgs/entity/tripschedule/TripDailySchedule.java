package com.msgs.msgs.entity.tripschedule;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
//@IdClass(DailyScheduleID.class)
@Table(name="trip_daily_schedule", indexes = @Index(name = "trip_daily_schedule_index", columnList = "daily_id"))
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class TripDailySchedule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "daily_id")
    private int dailyId;

//    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "schedule_id", nullable = false)
    private TripSchedule tripSchedule;


}
