package com.msgs.msgs.entity.tripstory.schedule;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@IdClass(StoryPlaceID.class)
@Table(name="story_place")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class StoryPlace {

    @Id
    @Column(name = "order_id")
    private int orderId;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="daily_id")
    private StoryDailySchedule storyDailySchedule;

    @Column(name = "order_day", nullable = false)
    private int orderDay;

    @Column(name = "place_order", nullable = false)
    private int placeOrder;

    @Column(length = 50)
    private String title;

    @Column(length = 15)
    private String type;


    @Column(length = 200)
    private String location;

    @Column(name = "map_x", columnDefinition = "decimal(10, 6)")
    private Double mapx;

    @Column(name = "map_y", columnDefinition = "decimal(10, 6)")
    private Double mapy;


    @Column(length = 10, name = "content_id")
    private String contentid;

    @Column(columnDefinition = "int(1)")
    private int rating;

    @Column(columnDefinition = "text")
    private String comment;

    @Column(name = "reg_date", nullable = false)
    private LocalDateTime regDate;

    @Column(name = "mod_date")
    private LocalDateTime modDate;

    @PrePersist
    public void setRegDate() {
        this.regDate = LocalDateTime.now();
    }


}

