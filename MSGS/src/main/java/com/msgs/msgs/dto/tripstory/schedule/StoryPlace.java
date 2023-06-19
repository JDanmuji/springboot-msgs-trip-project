package com.msgs.msgs.dto.tripstory.schedule;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Entity
@Table(name="story_place")
@Getter @Setter
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

    @Column(length = 300)
    private String memo;

    //mapping
//    @OneToMany(mappedBy = "storyPlace", fetch = FetchType.LAZY)
//    private List<StoryDetail> storyDetails = new ArrayList<>();



}

