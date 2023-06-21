package com.msgs.user.service;

import com.msgs.msgs.dto.user.UserDTO;

import java.util.List;

public interface UserService {


    void tempSignUp(UserDTO userDTO);

    List<UserAndLikeDTO> tempUserList();
}
