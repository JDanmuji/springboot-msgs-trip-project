package com.msgs.msgs.entity.tripstory;


import com.msgs.msgs.entity.user.UserEntity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="story_like_count", indexes = @Index(name = "story_like_count_index", columnList = "seq"))
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
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
    @JoinColumn(name="user_id", nullable = false)
    private UserEntity userStoryLike;

}
