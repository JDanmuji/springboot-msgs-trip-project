package com.msgs.msgs.entity.placereview;

import com.msgs.msgs.entity.tripschedule.TripDetailSchedule;
import com.msgs.msgs.entity.user.UserEntity;
import com.msgs.msgs.entity.user.UserLike;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "place_review")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class PlaceReview {

    @Id
    @Column(name = "review_id", length = 15)
    private String id;

    //join with userDTO
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id", nullable = false)
    private UserEntity userPlaceReview;

    //join with trip detail schedule
    @OneToOne(fetch = FetchType.LAZY)
//    @JoinColumns({
            @JoinColumn(name = "schedule_d_id", nullable = false)
//            @JoinColumn(name = "schedule_id", nullable = false)
//    })
    private TripDetailSchedule tripPlaceReview;

    //join with user like
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "like_id", nullable = false)
    private UserLike userLike;

    @Column(length = 100)
    private String title;

    @Column(columnDefinition = "decimal(3, 2)")
    private BigDecimal rate;

    @Column(name = "like_count")
    private int likeCount;

    @Column(length = 1000)
    private String comment;

    @Column(length = 200)
    private String location;

    @Column(name = "map_lon", columnDefinition = "decimal(10, 6)")
    private BigDecimal mapLon;

    @Column(name = "map_lat", columnDefinition = "decimal(10, 6)")
    private BigDecimal mapLat;

    @Column(name = "map_level")
    private int mapLevel;

    @Column(name = "reg_date", nullable = false)
    private LocalDate regDate;

    @Column(name = "mod_date")
    private LocalDate modDate;

    @Column(length = 1000)
    private String overView;

    private LocalDate playTime;

    //mapping
    @OneToMany( mappedBy = "placeReview")
    private List<PlaceReviewImg> placeReviewImgs = new ArrayList<>();
}
