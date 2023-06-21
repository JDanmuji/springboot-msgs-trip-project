package com.msgs.msgs.entity.tripstory.schedule;


import com.msgs.msgs.entity.tripstory.TripStory;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name="story_daily_schedule", indexes = @Index(name = "story_daily_schedule_index", columnList = "day_id"))
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
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

}
