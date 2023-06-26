package com.msgs.user.dao;

import com.msgs.msgs.entity.user.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional
public interface UserRepository extends JpaRepository<UserEntity, Long>{

//    Optional<UserEntity> findById(String username);
//    jwt email 유효성 검증
    Optional<UserEntity> findByEmail(String userEmail);

}
