package com.msgs.msgs.dto.tripstory;


import com.msgs.msgs.dto.user.UserDTO;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="story_like_count", indexes = @Index(name = "story_like_count_index", columnList = "seq"))
@Data
public class StoryLikeCount {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto increment 설정(id 값이 null일 경우 자동 생성)
    private int seq;

    //join with trip story
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumns({
            @JoinColumn(name = "trip_id", nullable = false),
            @JoinColumn(name = "schedule_id", nullable = false)
    })
    private TripStory tripLikeCnt;

    // join with user
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumns({
            @JoinColumn(name="user_email", nullable = false),
            @JoinColumn(name="user_id", nullable = false),
            @JoinColumn(name="user_phone", nullable = false)
    })
    private UserDTO userStoryLike;

}
