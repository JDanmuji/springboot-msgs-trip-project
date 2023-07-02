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
		
		System.out.println("test+===============================================");
		System.out.println(storyRequest.getStoryData());
		
		
		System.out.println("test+===============================================");
		System.out.println(imgList.get(0));
		
		
		String imgData = imgList.get(0).toString();
		byte[] byteArr = Base64.decode(imgData.substring(imgData.indexOf(",") + 1));
		
		
		


			    		
		System.out.println("+++++++++++++++++++++DECODE");
		System.out.println(byteArr);
		
		uploadFilesSample(byteArr, httpSess);
		
//		File file = new File("path/to/save/image.jpg");
//		FileOutputStream os = new FileOutputStream(file);
//		os.write(data);
//		os.close();
	   // byte[] decodedBytes = Base64.decode(storyRequest.getStoryData().get("img"));
		
//		System.out.println(storyRequest.getStoryData());
//		System.out.println();
//		System.out.println(decodedBytes);
		

//		Map<String, Object> storyData = storyRequest.getStoryData();
//		List<String> dateList = storyRequest.getDateList();
//		Map<Integer, List<StoryBlockDTO>> storyList = storyRequest.getStoryList();
//		Map<Integer, String> dailyComment = storyRequest.getDailyComment();
//
//		System.out.println("storyData, dateList, storyList, dailyComment 받았다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//		System.out.println(storyData);
//		System.out.println(dateList);
//		System.out.println(storyList);
//		System.out.println(dailyComment);
//
//		Boolean isSuccess = tripStoryService.saveStory(storyData, dateList, dailyComment, storyList);
//
////        Boolean isSuccess = true;
//
//		if(isSuccess){
//			return ResponseEntity.status(HttpStatus.OK).build();
//		}else{
//			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
//		}
		return null;
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
	
	
	public String uploadFilesSample(byte[] file, HttpSession session) throws Exception{

		String bucketName = "msgs-file-server";
		String path = "/user-image";
		String originalName;
		long size;

	

		String endPoint = "https://kr.object.ncloudstorage.com";
		String regionName = "kr-standard";
		String accessKey = "6fCMolib7QBe1JKwSafq";
		String secretKey = "miJ3BdZsKPsE3WLliwHPJbJS7qaxby6F6rDiVTJa";

		// S3 client
		AmazonS3 s3 = AmazonS3ClientBuilder.standard()
				.withEndpointConfiguration(new AwsClientBuilder.EndpointConfiguration(endPoint, regionName))
				.withCredentials(new AWSStaticCredentialsProvider(new BasicAWSCredentials(accessKey, secretKey)))
				.build();

		try {

			List<String> imagePathList = new ArrayList<>();
//
//			for (MultipartFile multipartFile: list) {
//			
//				String imagePath = s3.getUrl(bucketName + path, originalName).toString(); // 접근가능한 URL 가져오기
//				imagePathList.add(imagePath);
//				
//				
//			
//				
//			}
			
			ByteArrayInputStream fileData = new ByteArrayInputStream(file);
//			originalName = ((MultipartFile) fileData).getOriginalFilename();
//			size = ((MultipartFile) fileData).getSize();

			
			ObjectMetadata metadata = new ObjectMetadata();
			metadata.setContentLength(file.length);
			metadata.setContentType("image/png");
			metadata.setCacheControl("public, max-age=31536000");
			
			
			// 업로드
			s3.putObject(
					new PutObjectRequest(bucketName + path, "test3", fileData, metadata)
							.withCannedAcl(CannedAccessControlList.PublicRead)
			);


			System.out.println(imagePathList);

		} catch (AmazonS3Exception e) {
			e.printStackTrace();
		} catch(SdkClientException e) {
			e.printStackTrace();
		}
		
	


		return  "success";

	}



}
