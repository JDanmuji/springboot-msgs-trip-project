import React, { useEffect } from "react";
import TempUserList from "./TempUserList";
import TempSignUp from "./TempSignUp";
import TempUserUpdate from "./TempUserUpdate";
import TempUserDelete from "./TempUserDelete";

const TempUserCRUD = () => {


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://apis.data.go.kr/1613000/DmstcFlightNvgInfoService/getArprtList?serviceKey=K191VdXCbr8NWPrKcAnq1uzT01WQHRPglu0oJzfYyzYD2sjner2RWLyEB8peuW2v7E46s28axdc9EAYncGUX7A%3D%3D&_type=json");
        const data = await response.json();
        console.log(data);
        const firstItem = data.response.body.items.item[0];
        console.log(firstItem);


      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);



  return (
    <div>
      {/* 회원 가입 */}
      <TempSignUp />


      {/* 회원 목록 조회 */}
      <TempUserList />


      {/* 회원 정보 수정 */}
      <TempUserUpdate />


      {/* 회원 탈퇴 */}
      <TempUserDelete />



      
    </div>
  );
};

export default TempUserCRUD;
