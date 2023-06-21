import axios from "axios";
import React, { useEffect } from "react";

const KakaoLogout_social = () => {
    // useEffect(() => {
    //     app.get("/auth/kakao/unlink", authMiddleware, async (req, res) => {
    //         const { session } = req;
    //         const { access_token } = session.authData.kakao;

    //         // 요청 - axios 비동기로 요청하기 (async 필요)
    //         // 카카오에게 접속을 종료하겠다는 것을 요청하겠다 - 그걸 unlink에 담는다
    //         // 요청 실패시를 대비해서 try catch 문을 사용했다.
    //         let unlink;
    //         try {
    //             unlink = await axios({
    //                 //Promise 객체를 unlink에 넘겨주고
    //                 method: "POST",
    //                 url: "https://kapi.kakao.com/v1/user/unlink",
    //                 headers: {
    //                     Authorization: `Bearer ${access_token}`,
    //                 },
    //             });
    //         } catch (error) {
    //             res.json("에러 error.data = ", error.data);
    //         }
    //         console.log("언링크 unlink.data = ", unlink.data);
    //         // 이 값이 떨어진 이유는 이미 카카오 측에서는 우리 아이디를 로그아웃 or 회원탈퇴 완료
    //         // 나도 처리해줘야할게 있다  - session을 지워줘야 함

    //         const { id } = unlink.data;

    //         // id가 일치하면 세션 지워주기
    //         if (session.authData["kakao"].id == id) {
    //             delete session.authData;
    //         }

    //         res.redirect("/?msg=로그아웃 되셨습니다.");
    //     });
    // }, []);

    return <div></div>;
};

export default KakaoLogout_social;
