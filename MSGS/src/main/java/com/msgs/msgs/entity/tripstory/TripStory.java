package com.msgs.msgs.entity.tripstory;

import com.msgs.msgs.entity.tripschedule.TripSchedule;
import com.msgs.msgs.entity.user.UserEntity;
import com.vladmihalcea.hibernate.type.json.JsonType;
import jakarta.persistence.*;
import java.time.LocalDateTime;
import lombok.*;
import org.hibernate.annotations.Type;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Entity
@Table(name="trip_story")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class TripStory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "story_id")
    private int id;

    // join with trip schedule
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "schedule_id", nullable = false)
    private TripSchedule tripSchedule;

    // join with user
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id", nullable = false)
    private UserEntity userTripStory;

    @Column(length = 100)
    private String title;

    @Column(columnDefinition = "text")
    private String comment;

    @Column(name="date_list", length = 500, nullable = false)
    private String dateList;

    @Column(name="city_name", length = 30)
    private String cityName;

    @Column(name = "reg_date", nullable = false)
    private LocalDateTime regDate;
    @Column(name = "mod_date")
    private LocalDateTime modDate;


    //mapping
    @OneToMany(mappedBy = "tripStoryCmnt")
    private List<StoryComment> storyComments = new ArrayList<>();

    @OneToMany(mappedBy = "tripLikeCnt")
    private List<StoryLikeCount> storyLikeCounts = new ArrayList<>();

    @PrePersist
    public void setRegDate() {
        this.regDate = LocalDateTime.now();
    }

}
