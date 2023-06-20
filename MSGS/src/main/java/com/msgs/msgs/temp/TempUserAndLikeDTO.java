package com.msgs.msgs.temp;

import com.msgs.msgs.entity.placereview.PlaceReview;
import com.msgs.msgs.entity.user.UserEntity;
import com.msgs.msgs.entity.user.UserLike;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TempUserAndLikeDTO {

    // UserDTO
    private String userEmail;
    private String userId;
    private String userPhone;
    private String userPwd;
    private String userName;
    private String userGender;
    private String memberDate;
    private String regDate;
    private String modDate;
    private String locationConsent;
    private String regUser;

    // UserLike
    private String userLikeId;
    private String tripRegionId;
    private String userLikeDate;
    private List<PlaceReview> placeReview;

    // entity 값 DTO 생성자 주입
    public TempUserAndLikeDTO(UserEntity userEntity) {
        this.userEmail = userEntity.getEmail();
        this.userId = userEntity.getId();
        this.userPhone = userEntity.getPhone();
        this.userPwd = userEntity.getPassword();
        this.userName = userEntity.getName();
        this.memberDate = userEntity.getMemberDate();
        this.regDate = userEntity.getRegDate().toString();
        this.modDate = userEntity.getModDate().toString();
        this.locationConsent = userEntity.getLocationConsent();
        this.regUser = userEntity.getRegUser();
    }

    public TempUserAndLikeDTO(UserLike userLike) {
        this.userLikeId = userLike.getId();
        this.tripRegionId = userLike.getTripRegionId();
        this.userLikeDate = userLike.getDate().toString();
        this.placeReview = new ArrayList<>();

        for (PlaceReview review : userLike.getPlaceReviews()) {
            this.placeReview.add(review);
        }
    }

    public TempUserAndLikeDTO(UserEntity userEntity, UserLike userLike) {
        // UserDTO fields
        this.userEmail = userEntity.getEmail();
        this.userId = userEntity.getId();
        this.userPhone = userEntity.getPhone();
        this.userPwd = userEntity.getPassword();
        this.userName = userEntity.getName();
        this.memberDate = userEntity.getMemberDate();
        this.regDate = userEntity.getRegDate().toString();
        this.modDate = userEntity.getModDate().toString();
        this.locationConsent = userEntity.getLocationConsent();
        this.regUser = userEntity.getRegUser();

        // UserLike fields
        this.userLikeId = userLike.getId();
        this.tripRegionId = userLike.getTripRegionId();
        this.userLikeDate = userLike.getDate().toString();
        this.placeReview = new ArrayList<>();

        for (PlaceReview review : userLike.getPlaceReviews()) {
            this.placeReview.add(review);
        }
    }


}
