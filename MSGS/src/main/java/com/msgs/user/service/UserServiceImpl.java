package com.msgs.user.service;

import com.msgs.msgs.dto.user.UserDTO;
import com.msgs.user.dao.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Date;


@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDAO userDAO;

    @Override
    public void tempSignUp(UserDTO userDTO) {
        userDTO.setId("TestUser");
        userDTO.setRegDate(LocalDate.now());
        userDTO.setModDate(LocalDate.now());
        userDAO.save(userDTO);
    }
}

