package com.msgs.msgs.entity.tripstory.schedule;


import com.msgs.msgs.entity.tripstory.TripStory;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name="story_daily_schedule", indexes = @Index(name = "story_daily_schedule_index", columnList = "daily_id"))
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class StoryDailySchedule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "daily_id")
    private int id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "story_id", nullable = false)
    private TripStory tripStory;

    @Column(columnDefinition = "text")
    private String comment;

}
