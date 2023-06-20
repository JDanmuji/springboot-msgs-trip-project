package com.msgs.temp.service;

import com.msgs.msgs.entity.user.UserEntity;
import com.msgs.msgs.entity.user.UserLike;
import com.msgs.msgs.temp.TempUserAndLikeDTO;
import com.msgs.temp.dao.TempUserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TempUserServiceImpl implements TempUserService {
    @Autowired
    private TempUserDAO tempUserDAO;

    @Override
    public void tempSignUp(UserEntity userEntity) {
        userEntity.setRegDate(LocalDate.now());
        userEntity.setModDate(LocalDate.now());
        tempUserDAO.save(userEntity);
    }

    @Override
    public List<TempUserAndLikeDTO> tempUserList() {
        List<Object[]> queryResult = tempUserDAO.findAllWithUserAndLike();

        List<TempUserAndLikeDTO> resultList = new ArrayList<>(); // 반환받을 DTO

        for (Object[] result : queryResult) {
            UserEntity userEntity = (UserEntity) result[0];
            UserLike userLike = (UserLike) result[1];

            // UserLike 객체가 null인 경우에 대한 처리(null로 둘 경우, getter 호출에 따른 NullPointerException 발생)
            TempUserAndLikeDTO tempUserAndLikeDTO;
            if (userLike == null) {
                // 생성자를 활용한 tempUserAndLikeDTO 데이터 주입
                tempUserAndLikeDTO = new TempUserAndLikeDTO(userEntity);
            } else {
                tempUserAndLikeDTO = new TempUserAndLikeDTO(userEntity, userLike);
            }
            resultList.add(tempUserAndLikeDTO);

        }

        return resultList;
    }


    @Override
    public TempUserAndLikeDTO tempGetUserInfo(String id) {
        Optional<UserEntity> userEntity = tempUserDAO.findById(id);

        if (userEntity.isPresent()) {
            UserEntity resultUserEntity = userEntity.get();
            TempUserAndLikeDTO tempUserAndLikeDTO = new TempUserAndLikeDTO(resultUserEntity);

            return tempUserAndLikeDTO;
        }

        return null;

    }

    @Override
    public void tempUserDelete(String id) {
        tempUserDAO.deleteById(id);
    }

}
