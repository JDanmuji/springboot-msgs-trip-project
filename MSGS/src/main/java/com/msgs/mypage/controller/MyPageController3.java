package com.msgs.mypage.controller;

import com.msgs.msgs.dto.MyPageScheduleDTO;
import com.msgs.mypage.service.MyPageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("mypage")
public class MyPageController3 {

    @Autowired
    private MyPageService myPageService;

    @PostMapping("/scheduleList")
    public List<MyPageScheduleDTO> getScheduleList(@RequestParam String id) {
        return myPageService.getScheduleList(id);
    }

}
