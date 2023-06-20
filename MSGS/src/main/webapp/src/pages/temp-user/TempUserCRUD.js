import React from "react";
import TempUserList from "./TempUserList";
import TempSignUp from "./TempSignUp";
import TempUserUpdate from "./TempUserUpdate";
import TempUserDelete from "./TempUserDelete";

const TempUserCRUD = () => {
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
