package com.msgs.msgs.dto.tripstory.schedule;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="story_detail")
@Data
public class StoryDetail {

    @Id
    @Column(name = "detail_id", length = 15)
    private String id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "schedule_d_id", nullable = false)
    private StorySchedule storySchedule;

    @Column(columnDefinition = "int(1)")
    private int rating;

    @Column(columnDefinition = "text")
    private String content;

    @Column(name = "reg_date", nullable = false)
    private LocalDate regDate;
    @Column(name = "mod_date")
    private LocalDate modDate;

    //mapping
    @OneToMany(mappedBy = "storyDetail")
    private List<StoryDetailImg> storyDetailImgList = new ArrayList<>();

}
