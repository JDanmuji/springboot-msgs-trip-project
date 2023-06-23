package com.msgs.mypage.controller;


import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
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

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("mypage")
public class MyPageController {


	@PostMapping("/upload")
	public String uploadFilesSample(@RequestPart(value = "multipartFiles") List<MultipartFile> list, HttpSession session) throws Exception{

		String bucketName = "msgs-file-server";
		String path = "/cities-image";
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

			for (MultipartFile multipartFile: list) {
				originalName = multipartFile.getOriginalFilename();
				size = multipartFile.getSize();

				ObjectMetadata objectMetaData = new ObjectMetadata();
				objectMetaData.setContentType(multipartFile.getContentType());
				objectMetaData.setContentLength(size);

				// 업로드
				s3.putObject(
						new PutObjectRequest(bucketName + path, originalName, multipartFile.getInputStream(), objectMetaData)
								.withCannedAcl(CannedAccessControlList.PublicRead)
				);

				String imagePath = s3.getUrl(bucketName + path, originalName).toString(); // 접근가능한 URL 가져오기
				imagePathList.add(imagePath);
			}

			System.out.println(imagePathList);

		} catch (AmazonS3Exception e) {
			e.printStackTrace();
		} catch(SdkClientException e) {
			e.printStackTrace();
		}


		return  "success";

	}
}