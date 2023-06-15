package com.msgs.msgs.dto.tripstory;


import com.msgs.msgs.dto.user.UserDTO;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Table(name="story_comment", indexes = @Index(name = "story_comment_index", columnList = "seq"))
@Data
public class StoryComment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto increment 설정(id 값이 null일 경우 자동 생성)
    private int seq;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumns({
            @JoinColumn(name="user_email", nullable = false),
            @JoinColumn(name="user_id", nullable = false),
            @JoinColumn(name="user_phone", nullable = false)
    })
    private UserDTO userStoryCmnt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumns({
            @JoinColumn(name = "trip_id", nullable = false),
            @JoinColumn(name = "schedule_id", nullable = false)
    })
    private TripStory tripStoryCmnt;

    @Column(length = 500)
    private String content;

    @Column(name = "like_cnt")
    private int likeCnt;

    @Column(name = "reg_date", nullable = false)
    private LocalDate regDate;
    @Column(name = "mod_date")
    private LocalDate modDate;
}
