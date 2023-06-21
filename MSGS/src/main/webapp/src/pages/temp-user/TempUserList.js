import React, { useState, useEffect } from "react";

const TempUserList = () => {
  // onload 시, 회원정보 조회
  const [testUserInfo, setTestUserInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // fetch 함수: 데이터 호출
      // await를 사용하여 응답 대기 → 응답 데이터를 JSON 형식으로 변환 후에 storyComment 업데이트
      try {
        const response = await fetch("/temp/userListAll");
        const data = await response.json();
        setTestUserInfo(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  
  return (
    <div>
       {testUserInfo.map((data, index) => (
        <div key={index} style={{ border: "1px solid black", margin: "1px" }}>
          <div>회원명: {data.userName}</div>
          <div>생년월일: {data.memberDate}</div>
          <div>좋아요 ID: {data.userLikeId}</div>
          <div>관광지 코드: {data.tripRegionId}</div>
          <div>관광지 코드: {data.tripRegionId}</div>
          <div>사용자 이미지: <img src={data.imgPath} alt="userImgPath"/></div>
        </div>
      ))} 
    </div>
  );
};

export default TempUserList;
