package com.msgs.msgs.entity.placereview;

import com.msgs.msgs.entity.user.UserEntity;
import com.msgs.msgs.entity.user.UserLike;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "place_review")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class PlaceReview {


	@Id
	@Column(name = "review_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

    //join with userDTO
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id", nullable = false)
    private UserEntity userPlaceReview;

    @Column(length = 20, name = "content_id")
    private String contentId;

    @Column(length = 50)
    private String title;

    @Column(length = 10, name = "content_type_id")
    private String contentTypeId;

    @Column(length = 30, name = "content_type_name")
    private String contentTypeName;

    @Column(length = 50, name = "city_name")
    private String cityName;

    @Column(columnDefinition = "decimal(3, 2)")
    private BigDecimal rate;

    @Column(length = 1000)
    private String comment;

    @Column(name = "reg_date", nullable = false)
    private LocalDate regDate;

    @Column(name = "mod_date")
    private LocalDate modDate;

    //mapping
    @OneToMany( mappedBy = "placeReview")
    private List<PlaceReviewImg> placeReviewImgs = new ArrayList<>();

    @OneToMany(mappedBy = "placeReview")
    private List<UserLike>  userLikes = new ArrayList<>();
}