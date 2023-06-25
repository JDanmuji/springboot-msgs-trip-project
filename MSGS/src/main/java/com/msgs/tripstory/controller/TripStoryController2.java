package com.msgs.tripstory.controller;

import lombok.RequiredArgsConstructor;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.msgs.tripstory.service.TripStoryService;

@RestController // JSON 또는 XML 형식의 데이터를 반환
@RequestMapping("/tripstory")
@RequiredArgsConstructor // final variable에 대한 생성자 생성
public class TripStoryController2 {

	private final TripStoryService tripStoryService;
	
	// 이야기 day1~2 임시데이터
	private JSONObject getDummyData() {
		JSONObject dummyData = new JSONObject();

		dummyData.put("tripId", 1);
		dummyData.put("title", "즐거운 강릉 여행 다녀오기");
		dummyData.put("comment", "나는 즐거운 강릉 여행을 다녀왔다. 리뷰 시작 고고");
		dummyData.put("rating", 4);

		JSONArray dateList = new JSONArray();
		dateList.put("2023-05-23");
		dateList.put("2023-05-24");
		dateList.put("2023-05-24");
		dateList.put("2023-05-24");
		dateList.put("2023-05-24");
		dateList.put("2023-05-24");
		dateList.put("2023-05-24");
		dateList.put("2023-05-24");
		dateList.put("2023-05-24"); // day btn 테스트용 데이터
		dummyData.put("date_list", dateList);

		dummyData.put("city", "강원북도 강릉시");

		JSONArray tripDetailList = new JSONArray();

		JSONObject tripDetail1 = new JSONObject();
		tripDetail1.put("day", "1_detail_day1");
		tripDetail1.put("dayDate", "2023-05-23");
		tripDetail1.put("dayCount", "1");
		tripDetail1.put("content", "day1 콘텐트이묘! 여기서는 강릉여행 첫날에 뭘 했는지 알아보겠습니당");

		JSONArray tripDayDetail1 = new JSONArray();

		// day1 장소1
		JSONObject tripDayDetail1_1 = new JSONObject();
		tripDayDetail1_1.put("tripDetailId", "1_Day1");
		tripDayDetail1_1.put("title", "안목해변");
		tripDayDetail1_1.put("subtitle", "관광명소");
		tripDayDetail1_1.put("mapLon", "128.8784972");
		tripDayDetail1_1.put("mapLat", "37.74913611");
		tripDayDetail1_1.put("scheduleOrder", 1);
		tripDayDetail1_1.put("rating", 4);
		tripDayDetail1_1.put("content", "안목해변에서 신나는 하루 보냈음 !! 짱");

		JSONArray img1_1 = new JSONArray();
		img1_1.put("https://images.pexels.com/photos/4945061/pexels-photo-4945061.jpeg");
		img1_1.put("https://images.pexels.com/photos/6181092/pexels-photo-6181092.jpeg");
		img1_1.put("https://pbs.twimg.com/media/EA9UJBjU4AAdkCm.jpg");
		tripDayDetail1_1.put("img", img1_1);
		
		// day1 장소2
		JSONObject tripDayDetail2_1 = new JSONObject();
		tripDayDetail2_1.put("tripDetailId", "2_Day1");
		tripDayDetail2_1.put("title", "속초 중앙 시장");
		tripDayDetail2_1.put("subtitle", "관광명소");
		tripDayDetail2_1.put("mapLon", 128.5727574);
		tripDayDetail2_1.put("mapLat", 38.2075461);
		tripDayDetail2_1.put("scheduleOrder", 2);
		tripDayDetail2_1.put("rating", 3);
		String content = "속초중앙시장은 정말 활기 넘치고 매력적인 장소입니다. 다양한 상점과 가게들이 모여있어서 쇼핑하기에도 좋아요. 특히 신선한 해산물과 지역 특산품을 구매할 수 있는 곳이라서 속초를 방문한 여행객들에게 추천합니다. 시장 안에서 느껴지는 분위기도 아주 좋고, 현지 음식도 맛있어서 여행 중에 한 번쯤 꼭 들러보세요. 속초중앙시장에서 재미있는 시간을 보낼 수 있어서 너무 기뻤고, 다시 방문하고 싶은 곳 중 하나입니다. 추억에 남는 여행을 원하신다면 속초중앙시장을 놓치지 마세요! - gpt가 써준 페이크리뷰";
		tripDayDetail2_1.put("content", content);

		JSONArray img2_1 = new JSONArray();
		img2_1.put("https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg");
		img2_1.put("https://images.pexels.com/photos/14894654/pexels-photo-14894654.jpeg");
		tripDayDetail2_1.put("img", img2_1);

		tripDayDetail1.put(tripDayDetail1_1);
		tripDayDetail1.put(tripDayDetail2_1);

		tripDetail1.put("tripDayDetail", tripDayDetail1);

		// day2, 장소 데이터 없음
		JSONObject tripDetail2 = new JSONObject();
		tripDetail2.put("day", "1_detail_day2");
		tripDetail2.put("dayDate", "2023-05-24");
		tripDetail2.put("dayCount", "2");
		tripDetail2.put("content", "day2 콘텐트");

//		JSONArray tripDayDetail2 = new JSONArray();
//		tripDetail1.put("tripDayDetail", tripDayDetail2);

		tripDetailList.put(tripDetail1);
		tripDetailList.put(tripDetail2);
		dummyData.put("tripDetailList", tripDetailList);

		return dummyData;
	}
	
	
	 
	@PostMapping("/getStoryDetail")
	public ResponseEntity<String> getStoryDetail(@RequestBody String data) {
	
	// storyId 데이터 받아오기
	JSONObject requestData = new JSONObject(data);
	String storyId = requestData.getString("storyId");
	System.out.println(storyId);
	
	// 나중에 db에서 가져온 진짜 데이터로 대체
	JSONObject responseObj = getDummyData();
	
	String responseStr = responseObj.toString();
	return ResponseEntity.status(HttpStatus.OK).body(responseStr);
	}

	@PostMapping("/getStoryLike")
	public boolean getStoryLike(@RequestBody String data) {
		
		// userId, storyId 데이터 받아오기
		JSONObject requestData = new JSONObject(data);
	    String userId = requestData.getString("userId");
	    String storyId = requestData.getString("storyId");
	    System.out.println(userId);
	    System.out.println(storyId);
		
		// db 조인 데이터 받아오기
		
		return true;
	}

	@PostMapping("/storyLikeUpdate")
	public void storyLikeUpdate(@RequestBody String data) {
	    System.out.println("storyLikeUpdate 메소드");
		
		// userId, storyId 데이터 받아오기
		JSONObject requestData = new JSONObject(data);
	    String userId = requestData.getString("userId");
	    String storyId = requestData.getString("storyId");
	    System.out.println(userId);
	    System.out.println(storyId);
		
		// db 업데이트 하기
	}
	
	@PostMapping("/getStoryComment")
	public ResponseEntity<String> getStoryComment(@RequestBody String data) {
	
	// storyId 데이터 받아오기
	JSONObject requestData = new JSONObject(data);
	String storyId = requestData.getString("storyId");
	System.out.println("겟 코멘트");
	System.out.println(storyId);
	
	// 나중에 db에서 가져온 진짜 데이터로 대체
	JSONObject responseObj1 = new JSONObject();
	JSONObject responseObj2 = new JSONObject();
	JSONArray responseArr = new JSONArray();
	
	responseObj1.put("userId", "user01");
	responseObj1.put("userNick", "지혜");
	responseObj1.put("commentId", "comment01");
	responseObj1.put("comment", "댓글 1번. 강릉 여행 저도 가고 싶어요!!");
	responseArr.put(responseObj1);
	
	responseObj2.put("userId", "user02");
	responseObj2.put("userNick", "미라");
	responseObj2.put("commentId", "comment02");
	responseObj2.put("comment", "두번째 댓글. 완벽한 후기예요!");
	responseArr.put(responseObj2);
	
	String responseStr = responseArr.toString();
	return ResponseEntity.status(HttpStatus.OK).body(responseStr);
	}
}
