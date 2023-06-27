import axios from "axios";
import React, { useState, useEffect } from "react";
import Loading from "../common/Loading";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const KaKaoCallback = () => {
    const [kakaoEmail, setKakaoEmail] = useState("");
    const [cookies, setCookie] = useCookies(["id"]); // 쿠키 훅

    const navigate = useNavigate();

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
                setCookie(res.data.access_token);
                console.log("니가만든 쿠키: ", cookies);
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
                    .then(function (res) {
                        console.log("데이터 성공", res);
                        setKakaoEmail(res.data.kakao_account.email);

                        try {
                            const enteredEmail = res.data.kakao_account.email;
                            console.log(enteredEmail);

                            navigate("/signup1", {
                                state: {
                                    dataSnsEmail: res.data.kakao_account.email,
                                    dataSnsType: "K",
                                },
                            });
                        } catch (error) {
                            console.log("에러 발생:", error);
                        }
                    })
                    .catch(function (error) {
                        console.log(
                            "카카오에서 사용자 데이터를 가져오는 중에 에러 발생:",
                            error
                        );
                    });
            })
            .catch(function (error) {
                console.log("카카오 액세스 토큰 요청 중에 에러 발생:", error);
            });
    }, []);

    return <Loading />;
};

export default KaKaoCallback;