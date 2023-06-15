package com.msgs.msgs.dto.tripstory;

import com.msgs.msgs.dto.tripschedule.TripSchedule;
import com.msgs.msgs.dto.tripstory.schedule.StorySchedule;
import com.msgs.msgs.dto.user.UserDTO;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="trip_story")
@IdClass(TripStoryId.class)
@Data
public class TripStory {

    @Id
    @Column(name = "trip_id", length = 15)
    private String id;

    // join with trip schedule
    @Id
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "schedule_id", columnDefinition = "varchar(15)",nullable = false)
    private TripSchedule tripSchedule;

    // join with user
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumns({
            @JoinColumn(name="user_email", nullable = false),
            @JoinColumn(name="user_id", nullable = false),
            @JoinColumn(name="user_phone", nullable = false)
    })
    private UserDTO userTripStory;

    @Column(length = 100)
    private String title;

    @Column(columnDefinition = "text")
    private String comment;

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

    @OneToMany(mappedBy = "tripSchedule")
    private List<StorySchedule> storySchedules = new ArrayList<>();
}
