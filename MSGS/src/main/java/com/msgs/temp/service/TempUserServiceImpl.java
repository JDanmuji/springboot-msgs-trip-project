//package com.msgs.temp.service;
//
//import com.msgs.msgs.entity.user.UserEntity;
//import com.msgs.msgs.entity.user.UserImg;
//import com.msgs.msgs.entity.user.UserLike;
//import com.msgs.temp.dao.TempUserDAO;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.time.LocalDate;
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class TempUserServiceImpl implements TempUserService {
//    @Autowired
//    private TempUserDAO tempUserDAO;
//
//
//    // 회원가입
//    @Override
//    public void tempSignUp(UserEntity userEntity) {
//        userEntity.setRegDate(LocalDate.now());
//        userEntity.setModDate(LocalDate.now());
//        tempUserDAO.save(userEntity);
//    }
//
//    // 회원 목록(UserEntity and UserLike)
//    @Override
//    public List<TempUserAndLikeDTO> tempUserList() {
//        List<Object[]> queryResult = tempUserDAO.findAllWithUserAndLike();
//
//        List<TempUserAndLikeDTO> resultList = new ArrayList<>(); // 반환받을 DTO
//
//        for (Object[] result : queryResult) {
//            UserEntity userEntity = (UserEntity) result[0];
//            UserLike userLike = (UserLike) result[1];
//
//            // UserLike 객체가 null인 경우에 대한 처리(null로 둘 경우, getter 호출에 따른 NullPointerException 발생)
//            // 1. 삼항 연산자
//            TempUserAndLikeDTO tempUserAndLikeDTO = (userLike == null) ?
//                    new TempUserAndLikeDTO(userEntity) :
//                    new TempUserAndLikeDTO(userEntity, userLike);
//
//            /* 2. if문
//
//            TempUserAndLikeDTO tempUserAndLikeDTO;
//            if (userLike == null) {
//                // 생성자를 활용한 tempUserAndLikeDTO 데이터 주입
//                tempUserAndLikeDTO = new TempUserAndLikeDTO(userEntity);
//            } else {
//                tempUserAndLikeDTO = new TempUserAndLikeDTO(userEntity, userLike);
//            }
//
//             */
//            resultList.add(tempUserAndLikeDTO);
//
//        }
//
//        return resultList;
//    }
//
//
//    // 회원 목록(UserEntity and UserLike and UserImg)
//    @Override
//    public List<TempUserAndLikeDTO> tempUserListAll() {
//        System.out.println("TempUserServiceImpl tempUserListAll Before");
//        List<Object[]> queryResult = tempUserDAO.findAllWithUserAndLikeAndImg();
//        System.out.println("queryResult: " + queryResult);
//
//        List<TempUserAndLikeDTO> resultList = new ArrayList<>(); // 반환받을 DTO
//
//        for (Object[] result : queryResult) {
//            UserEntity userEntity = (UserEntity) result[0];
//            UserLike userLike = (UserLike) result[1];
//            UserImg userImg = (UserImg) result[2];
//
//            // UserLike와 UserImg 객체가 null인 경우에 대한 처리(Avoid NullPointer Exception)
//            TempUserAndLikeDTO tempUserAndLikeDTO;
//            if (userLike == null && userImg == null) {
//                tempUserAndLikeDTO = new TempUserAndLikeDTO(userEntity);
//            } else if (userLike == null) {
//                tempUserAndLikeDTO = new TempUserAndLikeDTO(userEntity, userImg);
//            } else if (userImg == null) {
//                tempUserAndLikeDTO = new TempUserAndLikeDTO(userEntity, userLike);
//            } else {
//                tempUserAndLikeDTO = new TempUserAndLikeDTO(userEntity, userLike, userImg);
//            }
//
//            resultList.add(tempUserAndLikeDTO);
//
//        }
//
//        System.out.println("TempUserServiceImpl tempUserListAll After");
//        System.out.println("return: " + resultList);
//        return resultList;
//    }
//
//    // 회원정보 검색
//    @Override
//    public TempUserAndLikeDTO tempGetUserInfo(String id) {
//        Optional<UserEntity> userEntity = tempUserDAO.findById(id);
//
//        if (userEntity.isPresent()) {
//            UserEntity resultUserEntity = userEntity.get();
//            TempUserAndLikeDTO tempUserAndLikeDTO = new TempUserAndLikeDTO(resultUserEntity);
//
//            return tempUserAndLikeDTO;
//        }
//
//        return null;
//
//    }
//
//    // 회원 탈퇴
//    @Override
//    public void tempUserDelete(String id) {
//        tempUserDAO.deleteById(id);
//    }
//
//
//}
