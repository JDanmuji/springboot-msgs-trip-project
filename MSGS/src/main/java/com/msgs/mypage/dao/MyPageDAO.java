package com.msgs.mypage.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.msgs.msgs.entity.user.UserEntity;

@Repository
public interface MyPageDAO extends JpaRepository<UserEntity, String>{


}

