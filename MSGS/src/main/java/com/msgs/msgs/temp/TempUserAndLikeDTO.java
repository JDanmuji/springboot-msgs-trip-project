//package com.msgs.msgs.temp;
//
//import com.msgs.msgs.entity.placereview.PlaceReview;
//import com.msgs.msgs.entity.user.UserEntity;
//import com.msgs.msgs.entity.user.UserImg;
//import com.msgs.msgs.entity.user.UserLike;
//import lombok.AllArgsConstructor;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//
//import java.time.LocalDate;
//import java.util.ArrayList;
//import java.util.List;
//
//@Getter
//@Setter
//@NoArgsConstructor
//@AllArgsConstructor
//public class TempUserAndLikeDTO {
//
//    // 반환 객체 DTO: 필요한 값만 필드로 선언
//
//    // UserDTO
//    private String userEmail;
//    private String userId;
//    private String userPhone;
//    private String userPwd;
//    private String userName;
//    private String userGender;
//    private String regDate;
//    private String modDate;
//    private String locationConsent;
//    private String regUser;
//
//
//    // UserLike
//    private String userLikeId;
//    private String tripRegionId;
//    private String userLikeDate;
//    private List<PlaceReview> placeReview;
//
//
//    // UserImg
//    private String imgOriginName;
//    private String imgPath;
//    private LocalDate imgRegDate;
//
//
//    // entity 값 DTO 생성자 주입 - UserEntity
//    public TempUserAndLikeDTO(UserEntity userEntity) {
//        this.userEmail = userEntity.getEmail();
//        this.userId = userEntity.getId();
//        this.userPhone = userEntity.getPhone();
//        this.userPwd = userEntity.getPassword();
//        this.userName = userEntity.getName();
//        this.regDate = userEntity.getRegDate().toString();
//        this.modDate = userEntity.getModDate().toString();
//        this.locationConsent = userEntity.getLocationConsent();
//        this.regUser = userEntity.getRegUser();
//    }
//
//    // entity 값 DTO 생성자 주입 - UserLike
//    public TempUserAndLikeDTO(UserLike userLike) {
//        this.userLikeId = userLike.getId();
//        this.tripRegionId = userLike.getTripRegionId();
//        this.userLikeDate = userLike.getDate().toString();
//        this.placeReview = new ArrayList<>();
//
//        for (PlaceReview review : userLike.getPlaceReviews()) {
//            this.placeReview.add(review);
//        }
//    }
//
//    // entity 값 DTO 생성자 주입 - UserImg
//    public TempUserAndLikeDTO(UserImg userImg) {
//        this.imgOriginName = userImg.getImgOriginName();
//        this.imgPath = userImg.getImgPath();
//        this.imgRegDate = userImg.getRegDate();
//
//    }
//
//    // entity 값 DTO 생성자 주입 - UserEntity and UserLike
//    public TempUserAndLikeDTO(UserEntity userEntity, UserLike userLike) {
//        // UserDTO fields
//        this.userEmail = userEntity.getEmail();
//        this.userId = userEntity.getId();
//        this.userPhone = userEntity.getPhone();
//        this.userPwd = userEntity.getPassword();
//        this.userName = userEntity.getName();
//        this.regDate = userEntity.getRegDate().toString();
//        this.modDate = userEntity.getModDate().toString();
//        this.locationConsent = userEntity.getLocationConsent();
//        this.regUser = userEntity.getRegUser();
//
//        // UserLike fields
//        this.userLikeId = userLike.getId();
//        this.tripRegionId = userLike.getTripRegionId();
//        this.userLikeDate = userLike.getDate().toString();
//        this.placeReview = new ArrayList<>();
//
//        for (PlaceReview review : userLike.getPlaceReviews()) {
//            this.placeReview.add(review);
//        }
//    }
//
//    // entity 값 DTO 생성자 주입 - UserEntity and UserImg
//    public TempUserAndLikeDTO(UserEntity userEntity, UserImg userImg) {
//        // UserDTO fields
//        this.userEmail = userEntity.getEmail();
//        this.userId = userEntity.getId();
//        this.userPhone = userEntity.getPhone();
//        this.userPwd = userEntity.getPassword();
//        this.userName = userEntity.getName();
//        this.regDate = userEntity.getRegDate().toString();
//        this.modDate = userEntity.getModDate().toString();
//        this.locationConsent = userEntity.getLocationConsent();
//        this.regUser = userEntity.getRegUser();
//
//        // UserImg fields
//        this.imgOriginName = userImg.getImgOriginName();
//        this.imgPath = userImg.getImgPath();
//        this.imgRegDate = userImg.getRegDate();
//    }
//
//    // entity 값 DTO 생성자 주입 - UserEntity and UserLike and UserImg
//    public TempUserAndLikeDTO(UserEntity userEntity, UserLike userLike, UserImg userImg) {
//        // UserDTO fields
//        this.userEmail = userEntity.getEmail();
//        this.userId = userEntity.getId();
//        this.userPhone = userEntity.getPhone();
//        this.userPwd = userEntity.getPassword();
//        this.userName = userEntity.getName();
//        this.regDate = userEntity.getRegDate().toString();
//        this.modDate = userEntity.getModDate().toString();
//        this.locationConsent = userEntity.getLocationConsent();
//        this.regUser = userEntity.getRegUser();
//
//        // UserLike fields
//        this.userLikeId = userLike.getId();
//        this.tripRegionId = userLike.getTripRegionId();
//        this.userLikeDate = userLike.getDate().toString();
//        this.placeReview = new ArrayList<>();
//
//        for (PlaceReview review : userLike.getPlaceReviews()) {
//            this.placeReview.add(review);
//        }
//
//        // UserImg fields
//        this.imgOriginName = userImg.getImgOriginName();
//        this.imgPath = userImg.getImgPath();
//        this.imgRegDate = userImg.getRegDate();
//
//    }
//
//
//
//}