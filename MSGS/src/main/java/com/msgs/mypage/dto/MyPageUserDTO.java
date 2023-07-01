package com.msgs.mypage.dto;

import com.msgs.msgs.entity.user.UserEntity;
import com.msgs.msgs.entity.user.UserImg;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MyPageUserDTO {

    // 반환 객체 DTO: 필요한 값만 필드로 선언

    // UserDTO
    private String userEmail;
    private String userId;
    private String userPhone;
    private String userPwd;
    private String userName;
    private String userGender;
    private String regDate;
    private String modDate;
    private String locationConsent;
    private String regUser;

    private String profileImage;

    // UserImg
    private String imgOriginName;
    private String imgPath;
    private LocalDate imgRegDate;


    // entity 값 DTO 생성자 주입 - UserEntity
    public MyPageUserDTO(UserEntity userEntity) {
        this.userEmail = userEntity.getEmail();
        this.userId = userEntity.getId();
        this.userPhone = userEntity.getPhone();
        this.userPwd = userEntity.getPassword();
        this.userName = userEntity.getName();
        this.regDate = userEntity.getRegDate().toString();
        this.modDate = userEntity.getModDate().toString();
        this.locationConsent = userEntity.getLocationConsent();
        this.regUser = userEntity.getRegUser();
    }

   

    // entity 값 DTO 생성자 주입 - UserImg
    public MyPageUserDTO(UserImg userImg) {
        this.imgOriginName = userImg.getImgOriginName();
        this.imgPath = userImg.getImgPath();
        this.imgRegDate = userImg.getRegDate();

    }

   

    // entity 값 DTO 생성자 주입 - UserEntity and UserImg
    public MyPageUserDTO(UserEntity userEntity, UserImg userImg) {
        // UserDTO fields
        this.userEmail = userEntity.getEmail();
        this.userId = userEntity.getId();
        this.userPhone = userEntity.getPhone();
        this.userPwd = userEntity.getPassword();
        this.userName = userEntity.getName();
        this.regDate = userEntity.getRegDate().toString();
        this.modDate = userEntity.getModDate().toString();
        this.locationConsent = userEntity.getLocationConsent();
        this.regUser = userEntity.getRegUser();

        // UserImg fields
        this.imgOriginName = userImg.getImgOriginName();
        this.imgPath = userImg.getImgPath();
        this.imgRegDate = userImg.getRegDate();
    }

    



}