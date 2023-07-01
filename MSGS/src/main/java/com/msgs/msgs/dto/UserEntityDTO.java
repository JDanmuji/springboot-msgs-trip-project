package com.msgs.msgs.dto;

import com.msgs.msgs.entity.user.UserEntity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserEntityDTO {
	
    // UserEntity
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
    
    // UserImg
    private String imgPath;
    
    // entity 값 DTO 생성자 주입 - UserEntity
    public UserEntityDTO(UserEntity userEntity) {
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

}
