package com.msgs.msgs.dto.tripstory.schedule;


import com.msgs.msgs.dto.tripstory.TripStory;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Entity
@Table(name="story_daily_schedule", indexes = @Index(name = "story_daily_schedule_index", columnList = "day_id"))
@Getter @Setter
public class StoryDailySchedule {

    @Id
    @Column(name = "day_id")
    private int id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumns({
            @JoinColumn(name = "trip_id", nullable = false),
            @JoinColumn(name = "schedule_id", nullable = false)
    })
    private TripStory tripSchedule;

    @Column(columnDefinition = "text")
    private String comment;

//    @OneToMany(mappedBy = "storyDailySchedule")
//    private List<StoryPlace> storyPlaces = new ArrayList<>();
}
