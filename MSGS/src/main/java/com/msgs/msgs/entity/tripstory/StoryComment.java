package com.msgs.msgs.entity.tripstory;


import com.msgs.msgs.entity.user.UserEntity;
import jakarta.persistence.*;
import java.time.LocalDateTime;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name="story_comment", indexes = @Index(name = "story_comment_index", columnList = "seq"))
@Getter @Setter // println 사용 시, toString이 재귀 호출되어 StackOverflowError 발생 → @Data를 @Getter, @Setter로 변경
@NoArgsConstructor
@AllArgsConstructor
public class StoryComment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto increment 설정(id 값이 null일 경우 자동 생성)
    private int seq;

    // @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "story_id", nullable = false)
    private TripStory tripStoryCmnt;

//    @JsonIgnore // recursive error로 null 처리x
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id", nullable = false)
    private UserEntity userStoryCmnt;



    @Column(length = 500, nullable = false)
    private String content;

    @Column(name = "like_cnt")
    private int likeCnt;

    @Column(name = "reg_date", nullable = false)
    private LocalDateTime regDate;
    @Column(name = "mod_date")
    private LocalDateTime modDate;

    @PrePersist
    public void setRegDate() {
        this.regDate = LocalDateTime.now();
    }
}
