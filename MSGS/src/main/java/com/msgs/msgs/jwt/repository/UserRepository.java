package com.msgs.msgs.jwt.repository;

import com.msgs.msgs.entity.user.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Long>{
    Optional<UserEntity> findByMemberId(String username);

}
