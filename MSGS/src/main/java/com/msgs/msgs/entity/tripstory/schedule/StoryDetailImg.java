package com.msgs.msgs.entity.tripstory.schedule;


import jakarta.persistence.*;
import java.time.LocalDateTime;
import lombok.*;


@Entity
@IdClass(StoryDetailImgID.class)
@Table(name="story_detail_img", indexes = @Index(name = "story_detail_img_index", columnList = "seq"))
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class StoryDetailImg {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int seq;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumns({
        @JoinColumn(name = "order_id", nullable = false),
        @JoinColumn(name = "daily_id", nullable = false)
    })
    private StoryPlace storyPlace;

    @Column(name = "img_origin_name", length = 50)
    private String imgOriginName;

    @Column(name = "img_path", length = 100, nullable = false)
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
