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
@RequestMapping("/tripstory/detail")
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

	    // day1
	    JSONObject tripDetail1 = new JSONObject();
	    tripDetail1.put("day", "1_detail_day1");
	    tripDetail1.put("dayDate", "2023-05-23");
	    tripDetail1.put("dayCount", "1");
	    tripDetail1.put("content", "day1 콘텐트이묘! 여기서는 강릉여행 첫날에 뭘 했는지 알아보겠습니다.");

	    JSONArray tripDayDetail1 = new JSONArray();
	    JSONArray tripDayDetail2 = new JSONArray();

	    // day1 장소1
	    JSONObject tripDayDetail1_1 = new JSONObject();
	    tripDayDetail1_1.put("tripDetailId", "1_Day1");
	    tripDayDetail1_1.put("title", "안목해변");
	    tripDayDetail1_1.put("subtitle", "관광명소");
	    tripDayDetail1_1.put("type", "dorm");
	    tripDayDetail1_1.put("mapLon", 128.8784972);
	    tripDayDetail1_1.put("mapLat", 37.74913611);
	    tripDayDetail1_1.put("scheduleOrder", 1);
	    tripDayDetail1_1.put("rating", 4);
	    tripDayDetail1_1.put("content", "안목해변에서 신나는 하루를 보냈어요!! 짱!");

	    JSONArray img1_1 = new JSONArray();
	    img1_1.put("https://images.pexels.com/photos/4945061/pexels-photo-4945061.jpeg");
	    img1_1.put("https://images.pexels.com/photos/6181092/pexels-photo-6181092.jpeg");
	    img1_1.put("https://pbs.twimg.com/media/EA9UJBjU4AAdkCm.jpg");
	    tripDayDetail1_1.put("img", img1_1);

	    // day1 장소2
	    JSONObject tripDayDetail1_2 = new JSONObject();
	    tripDayDetail1_2.put("tripDetailId", "1_Day2");
	    tripDayDetail1_2.put("title", "속초 중앙 시장");
	    tripDayDetail1_2.put("subtitle", "관광명소");
	    tripDayDetail1_2.put("type", "place");
	    tripDayDetail1_2.put("mapLon", 128.5727574);
	    tripDayDetail1_2.put("mapLat", 38.2075461);
	    tripDayDetail1_2.put("scheduleOrder", 2);
	    tripDayDetail1_2.put("rating", 3);
	    String content = "속초 중앙 시장은 정말 활기 넘치고 매력적인 장소입니다. 다양한 상점과 가게들이 모여있어서 쇼핑하기에도 좋아요. 특히 신선한 해산물과 지역 특산품을 구매할 수 있는 곳이라서 속초를 방문한 여행객들에게 추천합니다. 시장 안에서 느껴지는 분위기도 아주 좋고, 현지 음식도 맛있어서 여행 중에 한 번쯤 꼭 들러보세요. 속초 중앙 시장에서 재미있는 시간을 보낼 수 있어서 너무 기뻤고, 다시 방문하고 싶은 곳 중 하나입니다. 추억에 남는 여행을 원하신다면 속초 중앙 시장을 놓치지 마세요! - gpt가 써준 페이크 리뷰";
	    tripDayDetail1_2.put("content", content);

	    JSONArray img1_2 = new JSONArray();
	    img1_2.put("https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg");
	    img1_2.put("https://images.pexels.com/photos/14894654/pexels-photo-14894654.jpeg");
	    tripDayDetail1_2.put("img", img1_2);

	    tripDayDetail1.put(tripDayDetail1_1);
	    tripDayDetail1.put(tripDayDetail1_2);

	    tripDetail1.put("tripDayDetail", tripDayDetail1);

	    // day2 장소1
	    JSONObject tripDetail2 = new JSONObject();
	    tripDetail2.put("day", "1_detail_day2");
	    tripDetail2.put("dayDate", "2023-05-24");
	    tripDetail2.put("dayCount", "2");
	    tripDetail2.put("content", "day2 콘텐트");

	    // day2
	    JSONObject tripDayDetail2_1 = new JSONObject();
	    tripDayDetail2_1.put("tripDetailId", "2_Day1");
	    tripDayDetail2_1.put("title", "설악산");
	    tripDayDetail2_1.put("subtitle", "자연명소");
	    tripDayDetail2_1.put("type", "place");
	    tripDayDetail2_1.put("mapLon", 128.4850524);
	    tripDayDetail2_1.put("mapLat", 38.0917697);
	    tripDayDetail2_1.put("scheduleOrder", 1);
	    tripDayDetail2_1.put("rating", 5);
	    tripDayDetail2_1.put("content", "설악산은 아름다운 자연 경관으로 유명한 산으로, 등반객뿐만 아니라 관광객들에게도 인기가 많습니다. 해발 1,708m의 대표적인 봉우리인 동대천봉과 남대천봉은 특히 유명하며, 등반을 통해 멋진 전망을 즐길 수 있습니다. 또한, 설악산에는 다양한 산책로와 자연 탐방로도 마련되어 있어 자연과 함께 산책을 즐기기에도 좋습니다. 설악산은 아름다운 풍경과 신선한 공기를 마시며 자연과 깊은 소통을 할 수 있는 멋진 장소입니다.");

	    JSONArray img2_1 = new JSONArray();
	    img2_1.put("https://images.pexels.com/photos/1571192/pexels-photo-1571192.jpeg");
	    img2_1.put("https://images.pexels.com/photos/987654/pexels-photo-987654.jpeg");
	    tripDayDetail2_1.put("img", img2_1);

	    // day2 장소2
	    JSONObject tripDayDetail2_2 = new JSONObject();
	    tripDayDetail2_2.put("tripDetailId", "2_Day2");
	    tripDayDetail2_2.put("title", "영금정");
	    tripDayDetail2_2.put("subtitle", "자연명소");
	    tripDayDetail2_2.put("type", "place");
	    tripDayDetail2_2.put("mapLon", 128.4766053);
	    tripDayDetail2_2.put("mapLat", 38.1622684);
	    tripDayDetail2_2.put("scheduleOrder", 2);
	    tripDayDetail2_2.put("rating", 4);
	    tripDayDetail2_2.put("content", "영금정은 설악산 내에 위치한 아름다운 계곡입니다. 푸른 물과 아름다운 바위들이 어우러져 자연 그대로의 아름다움을 선사합니다. 여름철에는 시원한 물놀이를 즐길 수 있으며, 가을에는 단풍 구경이 아름다운 명소입니다. 영금정은 자연 속에서 힐링과 즐거움을 동시에 느낄 수 있는 특별한 장소입니다.");

	    JSONArray img2_2 = new JSONArray();
	    img2_2.put("https://images.pexels.com/photos/1571193/pexels-photo-1571193.jpeg");
	    tripDayDetail2_2.put("img", img2_2);

	    tripDayDetail2.put(tripDayDetail2_1);
	    tripDayDetail2.put(tripDayDetail2_2);

	    tripDetail2.put("tripDayDetail", tripDayDetail2);

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
	public ResponseEntity<String> getStoryLike(@RequestBody String data) {
		
		// userId, storyId 데이터 받아오기
		JSONObject requestData = new JSONObject(data);
	    String userId = requestData.getString("userId");
	    String storyId = requestData.getString("storyId");
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
	JSONObject responseObj3 = new JSONObject();
	JSONArray responseArr = new JSONArray();
	
	responseObj1.put("userId", "user01");
	responseObj1.put("seq", "comment01");
	responseObj1.put("comment", "댓글 1번. 강릉 여행 저도 가고 싶어요!! 강릉 여행 저도 가고 싶어요!! 강릉 여행 저도 가고 싶어요!! 강릉 여행 저도 가고 싶어요!! 강릉 여행 저도 가고 싶어요!! 강릉 여행 저도 가고 싶어요!!");
	responseObj1.put("regDate", "2023.01.25");
	responseArr.put(responseObj1);
	
	responseObj2.put("userId", "user02");
	responseObj2.put("seq", "comment02");
	responseObj2.put("comment", "두번째 댓글. 완벽한 후기예요!");
	responseObj2.put("regDate", "2020.05.26");
	responseArr.put(responseObj2);
	
	responseObj3.put("userId", "user03");
	responseObj3.put("seq", "comment03");
	responseObj3.put("comment", "댓글3. 정말 재밌어 보여요~!");
	responseObj3.put("regDate", "2020.07.26");
	responseArr.put(responseObj3);
	
	String responseStr = responseArr.toString();
	return ResponseEntity.status(HttpStatus.OK).body(responseStr);
	}
	
	@PostMapping("/storyCommentInsert")
	public void storyCommentInsert(@RequestBody String data) {
	
	// storyId 데이터 받아오기
	JSONObject requestData = new JSONObject(data);
	String userId = requestData.getString("userId");
	String storyId = requestData.getString("storyId");
	String content = requestData.getString("content");
	
	System.out.println("코멘트 인서트");
	System.out.println(userId);
	System.out.println(storyId);
	System.out.println(content);
	
	// 데이터 DB로 보내기
	}
}
