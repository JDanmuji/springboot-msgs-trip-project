import axios from "axios";
import React, { useEffect } from "react";
import Loading from "../common/Loading";
import { useNavigate } from "react-router-dom";

const KaKaoCallback = () => {
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
                        console.log("데이터 성공");

                        fetch("/user/kakaologin", {
                            method: "post",
                            body: JSON.stringify({
                                email: res.data.kakao_account.email,
                                type: "k",
                            }),
                        })
                            .then((response) => response.json())
                            .then((res) => console.log(res));
                    });
            })
            .catch(function (Error) {
                console.log("ERR", Error);
            });

        navigate("/snsSignup", {
            state: {
                data1: "데이터",
                data2: "전달되나요",
            },
        });
    }, []);

    return <Loading />;
};

export default KaKaoCallback;
