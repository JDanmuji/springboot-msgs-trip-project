package com.msgs.msgs.entity.tripschedule;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name="trip_daily_schedule", indexes = @Index(name = "trip_daily_schedule_index", columnList = "day_id"))
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class TripDailySchedule {

    @Id
    @Column(name = "day_id")
    private int id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "schedule_id", nullable = false)
    private TripSchedule tripSchedule;


}
