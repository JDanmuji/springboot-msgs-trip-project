package com.msgs.user.dao;

import com.msgs.msgs.dto.user.UserDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDAO extends JpaRepository<UserDTO, String> {

}

