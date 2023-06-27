package com.msgs.user.dao;

import com.msgs.msgs.entity.user.UserEntity;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDAO extends JpaRepository<UserEntity, String> {

	
    @Query("SELECT ue FROM UserEntity ue WHERE ue.email LIKE %:email%")
    // @Param: 쿼리 메서드의 매개변수와 쿼리에서 사용하는 매개변수 이름을 연결시켜주는 역할
    Optional<UserEntity> findByEmail(@Param("email") String email);

}

