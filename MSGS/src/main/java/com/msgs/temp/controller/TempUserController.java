//package com.msgs.temp.controller;
//
//import com.msgs.msgs.temp.TempUserAndLikeDTO;
//import com.msgs.msgs.entity.user.UserEntity;
//import com.msgs.temp.service.TempUserService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("temp")
//public class TempUserController {
//
//    @Autowired
//    private TempUserService tempUserService;
//
//
//    // 회원 가입
//    @PostMapping("/signup")
//    public void tempSignUp(@RequestBody UserEntity userEntity) {
//        tempUserService.tempSignUp(userEntity);
//    }
//
//
//    // 회원 목록 조회(UserEntity LEFT JOIN UserLike)
//    @GetMapping("/userList")
//    public List<TempUserAndLikeDTO> tempUserList(){
//        return tempUserService.tempUserList();
//    }
//
//    // 회원 목록 조회(UserEntity JOIN (UserLike AND UserImg))
//    @GetMapping("/userListAll")
//    public List<TempUserAndLikeDTO> tempUserListAll(){
//        return tempUserService.tempUserListAll();
//    }
//
//    // 회원 정보 검색
//    @GetMapping("/getUserInfo")
//    public TempUserAndLikeDTO tempGetUserInfo(@RequestParam("id") String id) {
//        return tempUserService.tempGetUserInfo(id);
//    }
//
//
//    // 회원 탈퇴
//    @PostMapping("/userDelete")
//    public void tempUserDelete(@RequestParam("id") String id){
//        tempUserService.tempUserDelete(id);
//    }
//
//
//}
