package com.msgs.msgs.jwt.controller;

import com.msgs.msgs.dto.TokenInfo;
import com.msgs.msgs.dto.UserLoginRequestDto;
import com.msgs.msgs.jwt.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserController2 {

    private final UserService userService;


    @PostMapping("/login")
    public TokenInfo login(@RequestBody UserLoginRequestDto userLoginRequestDto) {

//        String userId = userLoginRequestDto.getId();
        String userEmail = userLoginRequestDto.getEmail();
        String password = userLoginRequestDto.getPassword();
        TokenInfo tokenInfo = userService.login(userEmail, password);
        System.out.println(tokenInfo);

        return tokenInfo;
    }
    @PostMapping("/mypage")
    public String myPage(){
        return "hello world";
    }

}


