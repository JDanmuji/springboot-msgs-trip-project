import axios from "axios";
import React, { useState, useEffect } from "react";
import Loading from "../common/Loading";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const KaKaoCallback = (props) => {
    const [kakaoEmail, setKakaoEmail] = useState("");
    let password = "123";
    const [test, setTest] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (test) => {
        setKakaoEmail(test.data.kakao_account.email);

        console.log("kakao-email:", test.data.kakao_account.email);

        try {
            const response = await fetch(`/users/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: test.data.kakao_account.email,
                    password: password,
                }),
            });

            const data = await response.json();

            console.log("데이터가 뭐다냐???????", data);
            const token = data.accessToken;
            console.log("data 확인: ", data);
            console.log("토큰 확인: ", token);
            Cookies.set("token", token, { expires: 1 });

            const tokenValue = Cookies.get("token");

            // Check if the 'token' cookie exists and log its value
            if (tokenValue) {
                console.log("Token cookie value:", tokenValue);
            } else {
                console.log("Token cookie does not exist or has no value");
            }

            console.log(response);

            if (!response.data) {
                props.loginHandler(tokenValue);
                navigate("/");
            } else {
                alert("회원가입이 필요합니다.");
                navigate("/signup1", {
                    state: {
                        dataSnsEmail: test.data.kakao_account.email,
                        dataSnsType: "K",
                    },
                });
            }
        } catch (err) {
            console.log("서버 통신 에러 발생: " + err);
        }
    };

    useEffect(() => {
        const params = new URL(document.location.toString()).searchParams;
        const code = params.get("code");
        const grant_type = "authorization_code";
        const REST_API_KEY = `${process.env.REACT_APP_PUBLIC_REST_API_KEY}`;
        const REDIRECT_URI = `${process.env.REACT_APP_REDIRECT_KAKAO_URL}`;

        axios
            .post(
                `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,

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
                                    "application/x-www-form-urlencoded;charset=utf-8",
                            },
                        }
                    )
                    .then(async function (res) {
                        setTest(res);
                        console.log("set데이터 이다!!!!::::::", res);
                    })
                    .catch(function (error) {
                        console.log(
                            "카카오 액세스 토큰 요청 중에 에러 발생:",
                            error
                        );
                    });
            })
            .catch(function (error) {
                // 에러인 경우 실행
                console.log(error);
            });

        if (test) {
            console.log("데이터 안넘어 갈거야~!!!!!!!!!!!!!!!", test);
            handleSubmit(test);
        }
        //  console.log("데이터 성공", res);
    }, [test]);

    return <Loading />;
};

export default KaKaoCallback;
