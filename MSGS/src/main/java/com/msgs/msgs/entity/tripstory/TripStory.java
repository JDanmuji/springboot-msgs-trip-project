package com.msgs.msgs.entity.tripstory;

import com.amazonaws.services.s3.model.JSONType;
import com.msgs.msgs.entity.tripschedule.TripSchedule;
import com.msgs.msgs.entity.user.UserEntity;
import com.vladmihalcea.hibernate.type.json.JsonType;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Type;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Entity
@Table(name="trip_story")
@IdClass(TripStoryId.class)
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class TripStory {

    @Id
    @Column(name = "trip_id", length = 15)
    private String id;

    // join with trip schedule
    @Id
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "schedule_id", columnDefinition = "BIGINT",nullable = false)
    private TripSchedule tripSchedule;

    // join with user
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id", nullable = false)
    private UserEntity userTripStory;

    @Column(length = 100)
    private String title;

    @Column(columnDefinition = "text")
    private String comment;

    @Type(JsonType.class)
    @Column(name = "start_date", columnDefinition = "json")
    private Map<String, Object> startDate;

    private String city;

    @Column(name = "reg_date", nullable = false)
    private LocalDate regDate;
    @Column(name = "mod_date")
    private LocalDate modDate;


    //mapping
    @OneToMany(mappedBy = "tripStoryImg")
    private List<StoryImg> storyImgs = new ArrayList<>();

    @OneToMany(mappedBy = "tripStoryCmnt")
    private List<StoryComment> storyComments = new ArrayList<>();

    @OneToMany(mappedBy = "tripLikeCnt")
    private List<StoryLikeCount> storyLikeCounts = new ArrayList<>();

}
