package com.msgs.user.controller;

import com.msgs.msgs.dto.user.UserDTO;
import com.msgs.user.service.UserAndLikeDTO;
import com.msgs.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/temp/signup")
    public void tempSignUp(@RequestBody UserDTO userDTO) {
        userService.tempSignUp(userDTO);
    }

    @GetMapping("/temp/list")
    public List<UserAndLikeDTO> tempUserList(){
        return userService.tempUserList();
    }

}