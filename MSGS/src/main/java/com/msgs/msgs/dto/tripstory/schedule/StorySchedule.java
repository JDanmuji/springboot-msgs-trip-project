package com.msgs.msgs.dto.tripstory.schedule;

import com.msgs.msgs.dto.tripstory.TripStory;
import com.msgs.msgs.dto.tripstory.TripStoryId;
import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;

@Entity
@Table(name="story_schedule")
@Data
public class StorySchedule {

    @Id
    @Column(name = "schedule_d_id", length = 15)
    private String id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumns({
            @JoinColumn(name = "trip_id", nullable = false),
            @JoinColumn(name = "schedule_id", nullable = false)
    })
    private TripStory tripSchedule;

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
    @OneToOne(mappedBy = "storySchedule", fetch = FetchType.LAZY)
    private StoryDetail storyDetail;



}

