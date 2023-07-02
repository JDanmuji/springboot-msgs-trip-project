package com.msgs.msgs.entity.placereview;

import jakarta.persistence.*;
import lombok.*;

@Entity
//@Table(name="place_review_img" , indexes = @Index(name = "place_review_img_index", columnList = "seq"))
@Table(name="place_review_img")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class PlaceReviewImg {

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int seq;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "review_id", columnDefinition = "INT", nullable = false)
    private PlaceReview placeReview;


    @Column(name = "img_origin_name", length = 50)
    private String imgOriginName;

    @Column(name = "img_server_name", length = 50)
    private String imgServerName;

    @Column(name = "img_path", length = 2000)
    private String imgPath;


}
