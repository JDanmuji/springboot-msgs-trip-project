import axios from "axios";
import React, { useState, useEffect } from "react";
import NickName from "../../pages/signup/NickName";

import { useNavigate } from "react-router-dom";


const KaKaoCallback = () => {
    
    const navigate = useNavigate();
    let kakaoRes;



    useEffect(() => {
        const params = new URL(document.location.toString()).searchParams;
        const code = params.get("code");
        const grantType = "authorization_code";
        const REST_API_KEY = `${process.env.REACT_APP_PUBLIC_REST_API_KEY}`;
        const REDIRECT_URI = `${process.env.REACT_APP_REDIRECT_KAKAO_URL}`;

        axios
            .post(
                `https://kauth.kakao.com/oauth/token?grant_type=${grantType}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
                {},
                {
                    headers: {
                        "Content-type":
                            "application/x-www-form-urlencoded;charset=utf-8",
                    },
                }
            )
            .then(function (res) {
                console.log(res);
                const { data } = res;
                const { access_token } = data;
                axios
                    .post(
                        "https://kapi.kakao.com/v2/user/me",
                        {},
                        {
                            headers: {
                                Authorization: `Bearer ${access_token}`,
                                "Content-type":
                                    "application/x-www-form-urlencoded",
                            },
                        }
                    )
                    .then(async function (res) {
                        console.log("데이터 성공", res);
                        setKakaoEmail(res.data.kakao_account.email);

                        try {
                            const response = await fetch(
                                `/user/getUserInfo?email=${res.data.kakao_account.email}`,
                                {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify({
                                        email: res.data.kakao_account.email,
                                    }),
                                }
                            );

                            if (response.ok) {
                                const text = await response.text();

                                if (text) {
                                    try {
                                        const data = JSON.parse(text);
                                        console.log("사용 불가 😊: " + data);
                                        kakaoRes = 2;

                                    } catch (error) {
                                        console.log(
                                            "JSON.parse error: ",
                                            error
                                        );
                                    } // JSON.parse try-catch
                                } else {
                                    console.log("회원가입 ");

                                    kakaoRes = 1;

                                } // text
                            } else {
                                console.log("response!=200");
                            } // response isn't ok
                        } catch (err) {
                            console.log("서버 통신 에러 발생: " + err);
                        }
                    })
                    .catch(function (Error) {
                        console.log("ERR", Error);
                    });

            }, []);
        navigate("/snsSignup", {
            state: {
                kakaoEmail: kakaoEmail,
                kakaoRes: kakaoRes,
            },
        });
    }, []);
    return <></>;

};

export default KaKaoCallback;