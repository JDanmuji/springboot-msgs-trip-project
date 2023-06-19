package com.msgs.user.controller;

import com.msgs.msgs.dto.user.UserDTO;
import com.msgs.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/temp/signup")
    public void tempSignUp(@RequestBody UserDTO userDTO) {
        userService.tempSignUp(userDTO);
    }

}
