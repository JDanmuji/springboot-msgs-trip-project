package com.msgs.tripstory.controller;


import com.msgs.msgs.dto.tripstory.StoryComment;
import com.msgs.msgs.dto.tripstory.TripStory;
import com.msgs.tripstory.service.TripStoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController // JSON 또는 XML 형식의 데이터를 반환
@RequestMapping("/tripstory")
@RequiredArgsConstructor // final variable에 대한 생성자 생성
public class TripStoryController {

    private final TripStoryService tripStoryService;

    @GetMapping("/detail")
    public List<StoryComment> detail() {
        // comment 조회
        List<StoryComment> storyComments = tripStoryService.storyCommentsList();
        System.out.println("for checking" + storyComments.get(0).getContent());
        return storyComments;
    }

}
