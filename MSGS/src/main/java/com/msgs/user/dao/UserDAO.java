package com.msgs.user.dao;

import com.msgs.msgs.dto.user.UserDTO;
import com.msgs.user.service.UserAndLikeDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserDAO extends JpaRepository<UserDTO, String> {

    @Query("SELECT u FROM UserDTO u JOIN u.userLikes uls")
    List<UserAndLikeDTO> findAllWithUserLike();

}

