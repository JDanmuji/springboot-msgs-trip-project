package com.msgs.msgs.entity.tripstory;


import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

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
            @JoinColumn(name = "trip_id", nullable = false),
            @JoinColumn(name = "schedule_id", nullable = false)
    })
    private TripStory tripStoryImg;

    @Column(name = "img_origin_name", length = 50)
    private String imgOriginName;

    @Column(name = "img_path", length = 30)
    private String imgPath;

    @Column(name = "reg_date", nullable = false)
    private LocalDate regDate;
    @Column(name = "mod_date")
    private LocalDate modDate;

}
