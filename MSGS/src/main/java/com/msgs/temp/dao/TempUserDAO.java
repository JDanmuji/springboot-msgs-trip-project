package com.msgs.temp.dao;

import com.msgs.msgs.entity.user.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TempUserDAO extends JpaRepository<UserEntity, String> {

    @Query("SELECT ue, ul FROM UserEntity ue LEFT JOIN ue.userLikes ul")
    // JOIN: 연관된 엔티티가 반드시 데이터를 가져야만 결과로 반환
    // LEFT JOIN: 왼쪽(기준이 되는) 엔티티를 기준으로 모든 데이터 반환, 연관된 엔티티의 데이터가 없더라도 기준이 되는 엔티티의 데이터는 결과에 포함
    List<Object[]> findAllWithUserAndLike();

    @Query("SELECT ue, ul, ui FROM UserEntity ue LEFT JOIN ue.userLikes ul LEFT JOIN ue.userImg ui")
    List<Object[]> findAllWithUserAndLikeAndImg();



    /*
    id가 아닌 다른 값으로 param을 받아 조회할 때, 사용

    @Query("SELECT u FROM UserDTO u WHERE u.phone LIKE %:phone%")
    // @Param: 쿼리 메서드의 매개변수와 쿼리에서 사용하는 매개변수 이름을 연결시켜주는 역할
    Optional<UserEntity> findByPhone(@Param("phone") String phone);
     */

}
