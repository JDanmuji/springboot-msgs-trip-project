package com.msgs.mypage.service;

import com.msgs.mypage.dto.MyPageUserDTO;

public interface MyPageService {

	MyPageUserDTO getMyInfo(String userId);

	void userDelete(String id);

//	void insertImgPath(String imagePath, String userId);


}
