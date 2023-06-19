package com.msgs.msgs.dto.tripstory.schedule;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name="story_detail")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class StoryDetail {

    @Id
    @Column(name = "detail_id", length = 15)
    private String id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "schedule_d_id", nullable = false)
    private StoryPlace storyPlace;

    @Column(columnDefinition = "int(1)")
    private int rating;

    @Column(columnDefinition = "text")
    private String content;

    @Column(name = "reg_date", nullable = false)
    private LocalDate regDate;
    @Column(name = "mod_date")
    private LocalDate modDate;

    //mapping
//    @OneToMany(mappedBy = "storyDetail")
//    private List<StoryDetailImg> storyDetailImgs = new ArrayList<>();

}
