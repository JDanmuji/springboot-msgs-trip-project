package com.msgs.msgs.entity.tripstory;


import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name="story_img", indexes = @Index(name = "story_img_index", columnList = "seq"))
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class StoryImg {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto increment 설정(id 값이 null일 경우 자동 생성)
    private int seq;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumns({
            @JoinColumn(name = "story_id", nullable = false),
    })
    private TripStory tripStoryImg;

    @Column(name = "img_origin_name", length = 50)
    private String imgOriginName;

    @Column(name = "img_path", length = 100)
    private String imgPath;

    @Column(name = "reg_date", nullable = false)
    private LocalDateTime regDate;
    @Column(name = "mod_date")
    private LocalDateTime modDate;
    
    @PrePersist
    public void setRegDate() {
        this.regDate = LocalDateTime.now();
    }

}
