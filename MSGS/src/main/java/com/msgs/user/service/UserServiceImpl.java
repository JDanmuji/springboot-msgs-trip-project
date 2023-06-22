package com.msgs.user.service;

import com.msgs.msgs.entity.user.UserEntity;
import com.msgs.user.dao.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;


@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDAO userDAO;

    // 회원가입
    @Override
    public void signUp(UserEntity userEntity) {
        userDAO.save(userEntity);
    }
}

