package com.msgs.user.controller;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.msgs.user.service.SmsService;
import com.msgs.user.service.UserService;

import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Random;


@RestController
@RequestMapping("user")
public class UserController {


    @Autowired
    private UserService userService;
    @Autowired
    private SmsService smsService;


    
    @PostMapping("/signup/smscheck")
	public String smsCheck(@RequestBody String phone) throws ParseException{

//    	String verify = memberService.getMember(phone); // duplicate check
        
//        if (verify.equalsIgnoreCase("exist")) {
//            return "exist";
//        } else {
            Random random = new Random();
            String numStr = "";
            for (int i = 0; i < 6; i++) {
                String ran = Integer.toString(random.nextInt(10));
                numStr += ran;
            }
            smsService.sendSms(phone, numStr); //send authentication number

            return numStr;
//        }
    }
}

