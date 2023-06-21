package com.msgs.tripstory.controller;


<<<<<<< HEAD
import com.msgs.msgs.dto.tripstory.StoryComment;
import com.msgs.msgs.dto.tripstory.TripStory;
import com.msgs.tripstory.service.TripStoryService;
import lombok.RequiredArgsConstructor;
=======
import com.msgs.msgs.entity.tripstory.StoryComment;
import com.msgs.msgs.entity.tripstory.TripStory;
import com.msgs.tripstory.service.TripStoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

<<<<<<< HEAD
=======
import java.util.ArrayList;
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b
import java.util.List;

@RestController // JSON 또는 XML 형식의 데이터를 반환
@RequestMapping("/tripstory")
<<<<<<< HEAD
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

=======
public class TripStoryController {

    /*
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
    */
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b
}
