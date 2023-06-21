package com.msgs.msgs.dto.placereview;

import com.msgs.msgs.dto.tripschedule.TripDetailSchedule;
import com.msgs.msgs.dto.user.UserDTO;
import com.msgs.msgs.dto.user.UserLike;
import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "place_review")
@Data
public class PlaceReview {

    @Id
    @Column(name = "review_id", length = 15)
    private String id;

    //join with userDTO
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumns({
            @JoinColumn(name="user_email", nullable = false),
            @JoinColumn(name="user_id", nullable = false),
            @JoinColumn(name="user_phone", nullable = false)
    })
    private UserDTO userPlaceReview;

    //join with trip detail schedule
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumns({
            @JoinColumn(name = "schedule_d_id", nullable = false),
            @JoinColumn(name = "schedule_id", nullable = false)
    })
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
