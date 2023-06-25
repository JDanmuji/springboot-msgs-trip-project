import axios from "axios";
import React, { useState, useEffect } from "react";
import Loading from "../common/Loading";
import { useNavigate } from "react-router-dom";

const KaKaoCallback = () => {
    const [kakaoEmail, setKakaoEmail] = useState("");

    const navigate = useNavigate();
    let type = "K";
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
                    .then(function (res) {
                        console.log("데이터 성공", res);
                        setKakaoEmail(res.data.kakao_account.email);
                        // console.log(typeof res.data.kakao_account.email);
                        // console.log(res.data.kakao_account.email);

                        fetch("/user/getUserInfo", {
                            method: "post",
                            body: JSON.stringify({
                                email: res.data.kakao_account.email,
                            }),
                        })
                            .then((response) => response.json())
                            .then((res) => {
                                if (res === "") {
                                    console.log("회원가입 ");
                                } else {
                                    navigate("/login");
                                }
                            });
                    });
            })
            .catch(function (Error) {
                console.log("ERR", Error);
            });
    }, []);
    navigate("/signup1", {
        state: {
            snsEmail: kakaoEmail,
            snstype: type,
        },
    });
    return <Loading />;
};

export default KaKaoCallback;
