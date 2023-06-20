package com.msgs.msgs.dto.placereview;


import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Getter
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class PlaceReviewImgId implements Serializable {

    private int seq;
    private String placeReview;

}
