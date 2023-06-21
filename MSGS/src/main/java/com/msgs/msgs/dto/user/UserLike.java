package com.msgs.msgs.dto.user;

import com.msgs.msgs.dto.placereview.PlaceReview;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="user_like")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserLike {

    @Id
    @Column(name = "like_id", length = 20)
    private String id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumns({
            @JoinColumn(name="user_email", nullable = false),
            @JoinColumn(name="user_id", nullable = false),
            @JoinColumn(name="user_phone", nullable = false)
    })
    private UserDTO userLike;


    @Column(name = "trip_region_id")
    private String tripRegionId;

    @Column(name = "like_date")
    private Date date;

    //mapping
    @OneToMany(mappedBy = "userLike")
    private List<PlaceReview>  placeReviews = new ArrayList<>();

}
