package com.msgs.user.service;

import com.msgs.msgs.dto.UserEntityDTO;
import com.msgs.msgs.entity.user.UserEntity;
import com.msgs.user.dao.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDAO userDAO;

    // 회원가입
    @Override
    public void signUp(UserEntity userEntity) {
        userDAO.save(userEntity);
    }

    // 회원 정보 검색(이메일)
	@Override
	public UserEntityDTO getUserInfo(String email) {
		
		System.out.println("!!!!!!!!!!!!!!!!!"+email);
        Optional<UserEntity> userEntity = userDAO.findByEmail(email);
        // id 제외 findBy 메서드 생성

        if (userEntity.isPresent()) {
            UserEntity resultUserEntity = userEntity.get();
            UserEntityDTO userEntityDTO = new UserEntityDTO(resultUserEntity);

            return userEntityDTO;
        }
        
        return null;
	}

	@Override
	public UserEntityDTO getUser(String id) {
        Optional<UserEntity> userEntity = userDAO.findById(id);
        // id 제외 findBy 메서드 생성

        if (userEntity.isPresent()) {
            UserEntity resultUserEntity = userEntity.get();
            UserEntityDTO userEntityDTO = new UserEntityDTO(resultUserEntity);

            return userEntityDTO;
        }
        
        return null;
	}
}

