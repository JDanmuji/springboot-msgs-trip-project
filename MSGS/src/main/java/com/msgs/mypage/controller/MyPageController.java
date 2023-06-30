package com.msgs.mypage.controller;


import java.util.ArrayList;
import java.util.List;


import org.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

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

import com.msgs.msgs.dto.TripScheduleDTO;
import com.msgs.mypage.dto.MyPageUserDTO;
import com.msgs.mypage.service.MyPageService;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("mypage")
public class MyPageController {



	@Autowired
    private MyPageService myPageService;


//	회원정보 수정
//    @PostMapping("/profileUpdate")
//	public void profileUpdate(@RequestParam String userName, @RequestParam String userEmail, @RequestPart MultipartFile profileImage) {
//    	
//	    System.out.println("profileUpdate 메소드");
		
		// userId, storyId 데이터 받아오기
//		JSONObject requestData = new JSONObject(formdata);
//	    String userName = requestData.getString("userName");
//	    String userEmail = requestData.getString("userEmail");
//	    String profileImage = requestData.getString("profileImage");
//	    System.out.println(userName);
//	    System.out.println(userEmail);
//	    System.out.println(profileImage);
	    
	 
//	}
    
    //회원정보 수정
    @PostMapping("/profileUpdate")
	public void userUpdate(@RequestBody MyPageUserDTO profileUpdateDTO) {
	System.out.println("userUpdate method");
	System.out.println("userUpdate method" + profileUpdateDTO.getUserName());
	
	// Get userId, storyId data
	String userName = profileUpdateDTO.getUserName();
	String userEmail = profileUpdateDTO.getUserEmail();
	String profileImage = profileUpdateDTO.getProfileImage();
	
	// update db
	System.out.println(userName);
	System.out.println(userEmail);
	System.out.println(profileImage);
	
	}
	
	
	

//	@PostMapping("/upload")
//	public String uploadFilesSample(@RequestPart(value = "multipartFiles") List<MultipartFile> list, HttpSession session) throws Exception{
//
//		String bucketName = "msgs-file-server";
//		String path = "/user-image";
//		String originalName;
//		long size;
//
//	
//
//		String endPoint = "https://kr.object.ncloudstorage.com";
//		String regionName = "kr-standard";
//		String accessKey = "6fCMolib7QBe1JKwSafq";
//		String secretKey = "miJ3BdZsKPsE3WLliwHPJbJS7qaxby6F6rDiVTJa";
//
//		// S3 client
//		AmazonS3 s3 = AmazonS3ClientBuilder.standard()
//				.withEndpointConfiguration(new AwsClientBuilder.EndpointConfiguration(endPoint, regionName))
//				.withCredentials(new AWSStaticCredentialsProvider(new BasicAWSCredentials(accessKey, secretKey)))
//				.build();
//
//		try {
//
//			List<String> imagePathList = new ArrayList<>();
//
//			for (MultipartFile multipartFile: list) {
//				originalName = multipartFile.getOriginalFilename();
//				size = multipartFile.getSize();
//
//				ObjectMetadata objectMetaData = new ObjectMetadata();
//				objectMetaData.setContentType(multipartFile.getContentType());
//				objectMetaData.setContentLength(size);
//
//				// 업로드
//				s3.putObject(
//						new PutObjectRequest(bucketName + path, originalName, multipartFile.getInputStream(), objectMetaData)
//								.withCannedAcl(CannedAccessControlList.PublicRead)
//				);
//
//				String imagePath = s3.getUrl(bucketName + path, originalName).toString(); // 접근가능한 URL 가져오기
//				imagePathList.add(imagePath);
//				
//				
//			
//				
//			}
//
//			System.out.println(imagePathList);
//
//		} catch (AmazonS3Exception e) {
//			e.printStackTrace();
//		} catch(SdkClientException e) {
//			e.printStackTrace();
//		}
//		
//	
//
//
//		return  "success";
//
//	}

	
	@PostMapping("/tripListAll")
//	public List<TripScheduleDTO> tripListAll(@RequestParam("id") String id){
	public List<TripScheduleDTO> tripListAll(){ // 추후 @Requset Param 사용
		String id = "m000010";
		return myPageService.tripListAll(id);
	}
	
	

}
