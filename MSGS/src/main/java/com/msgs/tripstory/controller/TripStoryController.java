package com.msgs.tripstory.controller;

import com.msgs.msgs.dto.PlanBlockDTO;
import com.msgs.msgs.dto.ScheduleRequestDTO;
import com.msgs.msgs.dto.StoryBlockDTO;
import com.msgs.msgs.dto.StoryRequestDTO;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.msgs.msgs.dto.TripStoryMainDTO;
import com.msgs.msgs.entity.tripstory.StoryComment;
import com.msgs.tripstory.service.TripStoryService;

import java.util.ArrayList;

import java.util.List;

@RestController // JSON 또는 XML 형식의 데이터를 반환
@RequestMapping("/tripstory")
@RequiredArgsConstructor // final variable에 대한 생성자 생성
public class TripStoryController {

	private final TripStoryService tripStoryService;

	//프론트에서 받은 여행기 데이터를 DB에 저장함
	@PostMapping("/info")
	public ResponseEntity<Void> saveStory(@RequestBody StoryRequestDTO storyRequest){

		Map<String, String> storyData = storyRequest.getStoryData();
		List<String> dateList = storyRequest.getDateList();
		Map<Integer, List<StoryBlockDTO>> storyList = storyRequest.getStoryList();
		Map<Integer, String> dailyComment = storyRequest.getDailyComment();

		System.out.println("storyData, dateList, storyList, dailyComment 받았다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
		System.out.println(storyData);
		System.out.println(dateList);
		System.out.println(storyList);
		System.out.println(dailyComment);

		Boolean isSuccess = tripStoryService.saveStory(storyData, dateList, storyList, dailyComment);

//        Boolean isSuccess = true;

		if(isSuccess){
			return ResponseEntity.status(HttpStatus.OK).build();
		}else{
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
	}





//	@GetMapping("/detail")
//	public List<StoryComment> detail() {
//		// comment 조회
//		List<StoryComment> storyComments = null;
//		try {
//			storyComments = tripStoryService.storyCommentsList();
//		} catch (Exception e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		System.out.println("for checking" + storyComments.get(0).getContent());
//		return storyComments;
//	}
	
	
	@PostMapping("/getStoryList")
	public List<TripStoryMainDTO> getStoryList(){
		System.out.println("=====Controller=====");
		return tripStoryService.getStoryList();
	}


}
