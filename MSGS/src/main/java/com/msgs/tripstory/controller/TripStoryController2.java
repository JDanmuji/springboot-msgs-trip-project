package com.msgs.tripstory.controller;

import com.msgs.msgs.dto.StoryResponseDTO;
import lombok.RequiredArgsConstructor;

import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.msgs.msgs.dto.StoryCommentDTO;
import com.msgs.msgs.entity.tripstory.StoryComment;
import com.msgs.msgs.entity.user.UserEntity;
import com.msgs.tripstory.service.TripStoryService;

@RestController // JSON 또는 XML 형식의 데이터를 반환
@RequestMapping("/tripstory/detail")
@RequiredArgsConstructor // final variable에 대한 생성자 생성
public class TripStoryController2 {

	private final TripStoryService tripStoryService;
	
	// 이야기 day1~2 임시데이터
	private JSONObject getDummyData() {
	    JSONObject dummyData = new JSONObject();

	    dummyData.put("storyId", 1);
	    dummyData.put("title", "우리나라 문화유적 경주 여행기");
	    dummyData.put("comment", "오래만에 문화의 운치를 즐기러 경주 여행 후기를 적어본다.");
	    dummyData.put("rating", 4);

	    JSONArray dateList = new JSONArray();
	    dateList.put("2023-07-27");
	    dateList.put("2023-07-28");
	    dateList.put("2023-07-29");// day btn 테스트용 데이터
	    dummyData.put("date_list", dateList);

	    dummyData.put("city", "경주");

	    JSONArray tripDetailList = new JSONArray();

	    // day1
	    JSONObject tripDetail1 = new JSONObject();
	    tripDetail1.put("day", "1_detail_day1");
	    tripDetail1.put("dayDate", "2023-07-27");
	    tripDetail1.put("dayCount", "1");
	    tripDetail1.put("content", "day1 ");

	    JSONArray tripDayDetail1 = new JSONArray();
	    JSONArray tripDayDetail2 = new JSONArray();
	    JSONArray tripDayDetail3 = new JSONArray();

	    // day1 장소1
	    JSONObject tripDayDetail1_1 = new JSONObject();
	    tripDayDetail1_1.put("tripDetailId", "1_Day1");
	    tripDayDetail1_1.put("title", "수석정");
	    tripDayDetail1_1.put("subtitle", "음식점");
	    tripDayDetail1_1.put("type", "dorm");
	    tripDayDetail1_1.put("mapLon", 128.8784972);
	    tripDayDetail1_1.put("mapLat", 35.825712);
	    tripDayDetail1_1.put("scheduleOrder", 1);
	    tripDayDetail1_1.put("rating", 4);
	    tripDayDetail1_1.put("content", "수석정 운치있고 아름다웠다.");

	    JSONArray img1_1 = new JSONArray();
	    img1_1.put("https://images.pexels.com/photos/4945061/pexels-photo-4945061.jpeg");
//	    img1_1.put("https://images.pexels.com/photos/6181092/pexels-photo-6181092.jpeg");
//	    img1_1.put("https://pbs.twimg.com/media/EA9UJBjU4AAdkCm.jpg");
	    tripDayDetail1_1.put("img", img1_1);

	    // day1 장소2
	    JSONObject tripDayDetail1_2 = new JSONObject();
	    tripDayDetail1_2.put("tripDetailId", "1_Day2");
	    tripDayDetail1_2.put("title", "전통손칼국수");
	    tripDayDetail1_2.put("subtitle", "관광명소");
	    tripDayDetail1_2.put("type", "dorm");
	    tripDayDetail1_2.put("mapLon", 129.284800);
	    tripDayDetail1_2.put("mapLat", 35.835334);
	    tripDayDetail1_2.put("scheduleOrder", 2);
	    tripDayDetail1_2.put("rating", 3);
	    String content1_2 = "전통손칼국수 맛있었따";
	    tripDayDetail1_2.put("content", content1_2);

	    JSONArray img1_2 = new JSONArray();
	  //  img1_2.put("https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg");
	  //  img1_2.put("https://images.pexels.com/photos/14894654/pexels-photo-14894654.jpeg");
	    tripDayDetail1_2.put("img", img1_2);

	    
	    // day1 장소2
	    JSONObject tripDayDetail1_3 = new JSONObject();
	    tripDayDetail1_3.put("tripDetailId", "1_Day3");
	    tripDayDetail1_3.put("title", "낙지마실");
	    tripDayDetail1_3.put("subtitle", "음식점");
	    tripDayDetail1_3.put("type", "dorm");
	    tripDayDetail1_3.put("mapLon", 129.263007);
	    tripDayDetail1_3.put("mapLat", 35.851623);
	    tripDayDetail1_3.put("scheduleOrder", 2);
	    tripDayDetail1_3.put("rating", 3);
	    String content1_3 = "낙지에서 비린내 나네";
	    tripDayDetail1_3.put("content", content1_3);

	    JSONArray img1_3 = new JSONArray();
	    //img1_2.put("https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg");
	    //img1_2.put("https://images.pexels.com/photos/14894654/pexels-photo-14894654.jpeg");
	    tripDayDetail1_3.put("img", img1_3);
	    
	    // day1 장소2
	    JSONObject tripDayDetail1_4 = new JSONObject();
	    tripDayDetail1_4.put("tripDetailId", "1_Day4");
	    tripDayDetail1_4.put("title", "벨루스로즈펜션");
	    tripDayDetail1_4.put("subtitle", "숙박");
	    tripDayDetail1_4.put("type", "dorm");
	    tripDayDetail1_4.put("mapLon", 129.260246);
	    tripDayDetail1_4.put("mapLat", 35.859056);
	    tripDayDetail1_4.put("scheduleOrder", 2);
	    tripDayDetail1_4.put("rating", 4);
	    String content1_4 = "넓고 쾌적하다";
	    tripDayDetail1_4.put("content", content1_4);

	    JSONArray img1_4 = new JSONArray();
	    //img1_2.put("https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg");
	    //img1_2.put("https://images.pexels.com/photos/14894654/pexels-photo-14894654.jpeg");
	    tripDayDetail1_3.put("img", img1_4);

	    
	    
	    tripDayDetail1.put(tripDayDetail1_1);
	    tripDayDetail1.put(tripDayDetail1_2);
	    tripDayDetail1.put(tripDayDetail1_3);
	    tripDayDetail1.put(tripDayDetail1_4);

	    tripDetail1.put("tripDayDetail", tripDayDetail1);

	    // day2 장소1
	    JSONObject tripDetail2 = new JSONObject();
	    tripDetail2.put("day", "1_detail_day2");
	    tripDetail2.put("dayDate", "2023-07-28");
	    tripDetail2.put("dayCount", "2");
	    tripDetail2.put("content", "day2 콘텐트");

	    // day2
	    JSONObject tripDayDetail2_1 = new JSONObject();
	    tripDayDetail2_1.put("tripDetailId", "2_Day1");
	    tripDayDetail2_1.put("title", "별채반교동쌈밥");
	    tripDayDetail2_1.put("subtitle", "음식점");
	    tripDayDetail2_1.put("type", "dorm");
	    tripDayDetail2_1.put("mapLon", 129.210587);
	    tripDayDetail2_1.put("mapLat", 35.833286);
	    tripDayDetail2_1.put("scheduleOrder", 1);
	    tripDayDetail2_1.put("rating", 5);
	    tripDayDetail2_1.put("content", "교동쌈밥이 너무 맛있었요!");
	    JSONArray img2_1 = new JSONArray();
	  //  img2_1.put("https://images.pexels.com/photos/1571192/pexels-photo-1571192.jpeg");
	 //   img2_1.put("https://images.pexels.com/photos/987654/pexels-photo-987654.jpeg");
	    tripDayDetail2_1.put("img", img2_1);

	    // day2 장소2
	    JSONObject tripDayDetail2_2 = new JSONObject();
	    tripDayDetail2_2.put("tripDetailId", "2_Day2");
	    tripDayDetail2_2.put("title", "경주 대릉원 일원");
	    tripDayDetail2_2.put("subtitle", "관광지");
	    tripDayDetail2_2.put("type", "place");
	    tripDayDetail2_2.put("mapLon", 129.210721);
	    tripDayDetail2_2.put("mapLat", 35.839185);
	    tripDayDetail2_2.put("scheduleOrder", 2);
	    tripDayDetail2_2.put("rating", 4);
	    tripDayDetail2_2.put("content", "경주 대릉원 한국의 역사를 찾아볼 수 있다.");
	    JSONArray img2_2 = new JSONArray();
	   // img2_2.put("https://images.pexels.com/photos/1571193/pexels-photo-1571193.jpeg");
	    tripDayDetail2_2.put("img", img2_2);

	    // day2 장소2
	    JSONObject tripDayDetail2_3 = new JSONObject();
	    tripDayDetail2_3.put("tripDetailId", "2_Day2");
	    tripDayDetail2_3.put("title", "노벰버 스파리조트(노벰버리조트)");
	    tripDayDetail2_3.put("subtitle", "숙박");
	    tripDayDetail2_3.put("type", "dorm");
	    tripDayDetail2_3.put("mapLon", 129.509068);
	    tripDayDetail2_3.put("mapLat", 35.808091);
	    tripDayDetail2_3.put("scheduleOrder", 3);
	    tripDayDetail2_3.put("rating", 4);
	    tripDayDetail2_3.put("content", "");
	    JSONArray img2_3 = new JSONArray();
	//    img2_3.put("https://images.pexels.com/photos/1571193/pexels-photo-1571193.jpeg");
	    tripDayDetail2_3.put("img", img2_2);

	    tripDayDetail2.put(tripDayDetail2_1);
	    tripDayDetail2.put(tripDayDetail2_2);
	    tripDayDetail2.put(tripDayDetail2_3);

	    tripDetail2.put("tripDayDetail", tripDayDetail2);
	    // day3 장소1
	    JSONObject tripDetail3 = new JSONObject();
	    tripDetail3.put("day", "1_detail_day3");
	    tripDetail3.put("dayDate", "2023-07-29");
	    tripDetail3.put("dayCount", "3");
	    tripDetail3.put("content", "day3 콘텐트");

	    // day3
	    JSONObject tripDayDetail3_1 = new JSONObject();
	    tripDayDetail3_1.put("tripDetailId", "3_Day1");
	    tripDayDetail3_1.put("title", "경주 문무대왕릉");
	    tripDayDetail3_1.put("subtitle", "자연명소");
	    tripDayDetail3_1.put("type", "place");
	    tripDayDetail3_1.put("mapLon", 129.482766);
	    tripDayDetail3_1.put("mapLat", 35.740729);
	    tripDayDetail3_1.put("scheduleOrder", 1);
	    tripDayDetail3_1.put("rating", 5);
	    tripDayDetail3_1.put("content", "");
	    
	    JSONArray img3_1 = new JSONArray();
	    //img3_1.put("https://images.pexels.com/photos/1571192/pexels-photo-1571192.jpeg");
	    //img3_1.put("https://images.pexels.com/photos/987654/pexels-photo-987654.jpeg");
	    tripDayDetail3_1.put("img", img3_1);

	    // day3 장소2
	    JSONObject tripDayDetail3_2 = new JSONObject();
	    tripDayDetail3_2.put("tripDetailId", "2_Day2");
	    tripDayDetail3_2.put("title", "두부마을");
	    tripDayDetail3_2.put("subtitle", "자연명소");
	    tripDayDetail3_2.put("type", "place");
	    tripDayDetail3_2.put("mapLon", 129.312091);
	    tripDayDetail3_2.put("mapLat", 35.783949);
	    tripDayDetail3_2.put("scheduleOrder", 2);
	    tripDayDetail3_2.put("rating", 4);
	    tripDayDetail3_2.put("content", "두부가 보들보들하고 맛있었따.");
	   
	    JSONArray img3_2 = new JSONArray();
	   // img3_2.put("https://images.pexels.com/photos/1571193/pexels-photo-1571193.jpeg");
	    tripDayDetail3_2.put("img", img3_2);

	    
	    tripDayDetail3.put(tripDayDetail3_1);
	    tripDayDetail3.put(tripDayDetail3_2);
	  

	    tripDetail3.put("tripDayDetail", tripDayDetail3);

	    tripDetailList.put(tripDetail1);
	    tripDetailList.put(tripDetail2);
	    tripDetailList.put(tripDetail3);
	    dummyData.put("tripDetailList", tripDetailList);

	    return dummyData;
	}
	



	/////////////
	// 이야기 상세 정보를 response함//
	/////////////
	@GetMapping("/info")
//	public StoryResponseDTO getStoryDetail(@RequestParam int storyId) {
	public ResponseEntity<String> getStoryDetail(@RequestParam int storyId) {

		//나중에 DB에서 가져온 데이터로 대체해야 함.
		JSONObject responseObj = getDummyData();
		String responseStr = responseObj.toString();
		return ResponseEntity.status(HttpStatus.OK).body(responseStr);
	
		// storyId 데이터 받아오기
//		System.out.println("storyId ============================================"+ storyId);

		// DB에서 데이터 가져옴
//		return tripStoryService.getStoryDetail(storyId);


	}


























	//////////////
	// 이야기 좋아요 //
	//////////////
	@PostMapping("/getStoryLike")
	public ResponseEntity<String> getStoryLike(@RequestBody String data) {
		
		// userId, storyId 데이터 받아오기
		JSONObject requestData = new JSONObject(data);
	    String userId = requestData.getString("userId");
	    int storyId = requestData.getInt("storyId");
	    System.out.println(userId);
	    System.out.println(storyId);
		
	    // DB에서 가져올 데이터
		// 해당 userId가 좋아요 눌렀는지 여부
	    // 해당 storyId의 누적 좋아요 수

	    // 임시데이터
		JSONObject responseObj = new JSONObject();
		responseObj.put("isLiked", true);
		responseObj.put("likeCnt", 32);
		
		String responseStr = responseObj.toString();
		return ResponseEntity.status(HttpStatus.OK).body(responseStr);
	}

	@PostMapping("/storyLikeUpdate")
	public void storyLikeUpdate(@RequestBody String data) {
	    System.out.println("storyLikeUpdate 메소드");
		
		// userId, storyId 데이터 받아오기
		JSONObject requestData = new JSONObject(data);
	    String userId = requestData.getString("userId");
	    int storyId = requestData.getInt("storyId");
	    System.out.println(userId);
	    System.out.println(storyId);
		
		// db 업데이트 하기
	}
	
	/////////////
	// 이야기 댓글 //
	/////////////
	@PostMapping("/getCommentList")
	public List<StoryCommentDTO> getCommentList(@RequestBody String data) {
		// storyId 데이터 받아오기
		JSONObject requestData = new JSONObject(data);
	    int storyId = requestData.getInt("storyId");
	    return tripStoryService.getCommentList(storyId);
	}
		
	@PostMapping("/commentInsert")
	public void commentInsert(@RequestBody StoryCommentDTO storyCommentDTO) {
		System.out.println("코멘트 인서트" + storyCommentDTO.getStoryId());
		System.out.println("코멘트 인서트" + storyCommentDTO.getContent());
		
	// 데이터 DB로 보내기
	tripStoryService.commentInsert(storyCommentDTO);
	}
}

