package com.msgs.tripstory.controller;

import com.amazonaws.SdkClientException;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.client.builder.AwsClientBuilder;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.AmazonS3Exception;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.util.Base64;
import com.msgs.msgs.dto.StoryBlockDTO;
import com.msgs.msgs.dto.StoryRequestDTO;
import java.util.Map;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.msgs.msgs.dto.TripStoryMainDTO;
import com.msgs.msgs.entity.tripstory.StoryComment;
import com.msgs.msgs.imageupload.ImageUploadController;
import com.msgs.tripstory.service.TripStoryService;

import jakarta.servlet.http.HttpSession;


import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.ArrayList;

import java.util.List;

@RestController // JSON 또는 XML 형식의 데이터를 반환
@RequestMapping("/tripstory")
@RequiredArgsConstructor // final variable에 대한 생성자 생성
public class TripStoryController {

	private final TripStoryService tripStoryService;



	@GetMapping("/detail")
	public List<StoryComment> detail() {
		// comment 조회
		List<StoryComment> storyComments = null;
		try {
//			storyComments = tripStoryService.storyCommentsList();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println("for checking" + storyComments.get(0).getContent());
		return storyComments;
	}
	
	@GetMapping("/tripScheduleData")
	public List<StoryComment> tripScheduleData() {
		// comment 조회
		List<StoryComment> storyComments = null;
		try {
//			storyComments = tripStoryService.tripScheduleData();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println("for checking" + storyComments.get(0).getContent());
		return storyComments;
	}

	//프론트에서 받은 여행기 데이터를 DB에 저장함
	@PostMapping("/info")
	public ResponseEntity<Void> saveStory(@RequestBody StoryRequestDTO storyRequest, HttpSession httpSess) throws Exception{
		
		
		List<Object> imgList = (List<Object>) storyRequest.getStoryData().get("img");
	//	List<Object> reviewImgList = (List<Object>) storyRequest.getStoryData();
		
		System.out.println(imgList);
		
		ImageUploadController imageUpload = new ImageUploadController();
		
	
		storyRequest.getStoryData().put("img", imageUpload.uploadFilesSample(imgList, "/user-tripstory", httpSess));
		
		Map<Integer, List<StoryBlockDTO>> storyList1 = storyRequest.getStoryList();
//		
//	
//		for (List<StoryBlockDTO> storyBlockDTOList : storyList1.values()) {
////		  // StoryBlockDTO 반복문 처리
//		  for (StoryBlockDTO storyBlockDTO : storyBlockDTOList) {
////		    // reviewImg 가져오기
//			  
//			  System.out.println(storyBlockDTO.getReviewImg());
//			List<String> data =  imageUpload.uploadFilesSample(storyBlockDTO.getReviewImg(), "/user-tripstory", httpSess);
//			
//			List<Object> listObject = new ArrayList<>();
//			for (String str : data) {
//			  listObject.add((Object) str);
//			}
//			storyBlockDTO.setReviewImg(listObject);
////		    // reviewImg에 데이터 추가
////		    reviewImageList.add("추가할 데이터");
//		  }
//		}
//		storyRequest.getStoryData().get("reviewImg")put("reviewImgList", imageUpload.uploadFilesSample(reviewImgList, "/user-tripstory", httpSess));
//		
//		System.out.println(storyRequest.getStoryData().get("img"));
		
		
		Map<String, Object> storyData = storyRequest.getStoryData();
		List<String> dateList = storyRequest.getDateList();
		
		
		Map<Integer, List<StoryBlockDTO>> storyList = storyRequest.getStoryList();
		Map<Integer, String> dailyComment = storyRequest.getDailyComment();
//
//		System.out.println("storyData, dateList, storyList, dailyComment 받았다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//		System.out.println(storyData);
//		System.out.println(dateList);
//		System.out.println(storyList);
//		System.out.println(dailyComment);
//
		Boolean isSuccess = tripStoryService.saveStory(storyData, dateList, dailyComment, storyList);

    

		if(isSuccess){
			return ResponseEntity.status(HttpStatus.OK).build();
		} else {
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
