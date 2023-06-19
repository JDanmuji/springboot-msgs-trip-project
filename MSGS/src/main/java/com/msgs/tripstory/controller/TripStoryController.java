package com.msgs.tripstory.controller;


import com.msgs.msgs.dto.tripstory.StoryComment;
import com.msgs.msgs.dto.tripstory.TripStory;
import com.msgs.msgs.dto.tripstory.TripStoryCmtDTO;
import com.msgs.tripstory.service.TripStoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController // JSON 또는 XML 형식의 데이터를 반환
@RequestMapping("/tripstory")
public class TripStoryController {

    @Autowired
    private TripStoryService tripStoryService;

    @GetMapping("/detail")
    public List<TripStoryCmtDTO> detail() {
        // comment 조회
        List<StoryComment> storyComments = tripStoryService.storyCommentsList();
        System.out.println("for entity checking: " + storyComments.get(0).getContent());

        List<TripStoryCmtDTO> tripStoryCmtDTOS = mapToTripStoryCmtDTO(storyComments);
        return tripStoryCmtDTOS;
    }

    private List<TripStoryCmtDTO> mapToTripStoryCmtDTO(List<StoryComment> storyComments) {
        List<TripStoryCmtDTO> tripStoryCmtDTOS = new ArrayList<>();
        for (StoryComment comment : storyComments) {
            TripStoryCmtDTO tripStoryCmtDTO = new TripStoryCmtDTO();
            tripStoryCmtDTO.setContent(comment.getContent());
            tripStoryCmtDTO.setUserId(comment.getUserStoryCmnt().getId());
            tripStoryCmtDTO.setUserImgPath(comment.getUserStoryCmnt().getUserImg().getImgPath());
            tripStoryCmtDTOS.add(tripStoryCmtDTO);
        }
        return tripStoryCmtDTOS;
    }

}
