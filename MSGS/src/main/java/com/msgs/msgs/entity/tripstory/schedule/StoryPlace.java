package com.msgs.msgs.entity.tripstory.schedule;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name="story_place")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class StoryPlace {

    @Id
    @Column(name = "schedule_d_id", length = 15)
    private String id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="day_id", nullable = false)
    private StoryDailySchedule storyDailySchedule;

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

    @Column(columnDefinition = "text")
    private String memo;

    @Column(columnDefinition = "int(1)")
    private int rating;

    @Column(columnDefinition = "text")
    private String content;

    @Column(name = "reg_date", nullable = false)
    private LocalDate regDate;
    @Column(name = "mod_date")
    private LocalDate modDate;


}

