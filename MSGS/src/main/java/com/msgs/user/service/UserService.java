package com.msgs.user.service;

import com.msgs.msgs.dto.UserEntityDTO;
import com.msgs.msgs.entity.user.UserEntity;

public interface UserService {


    public void signUp(UserEntity userEntity);

	public UserEntityDTO getUserInfo(String email);

	public UserEntityDTO getUser(String id);
    
}
