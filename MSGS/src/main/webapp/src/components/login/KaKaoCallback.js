import axios from "axios";
import React, { useState, useEffect } from "react";
import Loading from "../common/Loading";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const KaKaoCallback = () => {
    const [kakaoEmail, setKakaoEmail] = useState("");
    const [test, setTest] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const params = new URL(document.location.toString())
                    .searchParams;
                const code = params.get("code");
                const grant_type = "authorization_code";
                const REST_API_KEY = process.env.REACT_APP_PUBLIC_REST_API_KEY;
                const REDIRECT_URI = process.env.REACT_APP_REDIRECT_KAKAO_URL;

                const tokenRes = await axios.post(
                    `https://kauth.kakao.com/oauth/token`,
                    {
                        grant_type: grant_type,
                        client_id: REST_API_KEY,
                        redirect_uri: REDIRECT_URI,
                        code: code,
                    },
                    {
                        headers: {
                            "Content-type":
                                "application/x-www-form-urlencoded;charset=utf-8",
                        },
                    }
                );

                const { access_token } = tokenRes.data;

                const userRes = await axios.post(
                    "https://kapi.kakao.com/v2/user/me",
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${access_token}`,
                            "Content-type":
                                "application/x-www-form-urlencoded;charset=utf-8",
                        },
                    }
                );

                setTest(userRes.data);
            } catch (error) {
                console.log("카카오 액세스 토큰 요청 중에 에러 발생:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const handleSubmit = async () => {
            if (test) {
                const email = test.kakao_account.email;
                setKakaoEmail(email);

                try {
                    const response = await axios.post(
                        `/user/getUserInfo?email=${email}`,
                        {
                            email: email,
                        }
                    );

                    if (response.ok) {
                        const data = await response.data;
                        const userType = data.userId.charAt(0);

                        console.log("타입 확인:", userType);
                        console.log("이미 가입된 회원이 있습니다.: " + data);

                        if (userType === "K" && email === email) {
                            try {
                                const loginResponse = await axios.post(
                                    `/users/login`,
                                    {
                                        email: email,
                                        password: "123",
                                    }
                                );

                                const token = loginResponse.data.accessToken;
                                console.log("data 확인: ", loginResponse.data);
                                console.log("토큰 확인: ", token);
                                Cookies.set("token", token, { expires: 1 });

                                const tokenValue = Cookies.get("token");

                                if (tokenValue) {
                                    console.log(
                                        "Token cookie value:",
                                        tokenValue
                                    );
                                } else {
                                    console.log(
                                        "Token cookie does not exist or has no value"
                                    );
                                }

                                console.log(loginResponse);

                                if (loginResponse.ok) {
                                    navigate("/");
                                }
                            } catch (err) {
                                console.log("서버 통신 에러 발생: " + err);
                            }
                        } else if (userType === "N" && email === email) {
                            alert(
                                "네이버로 가입된 이메일입니다. 네이버로 로그인하시기 바랍니다."
                            );
                            navigate("/login" && email === email);
                        } else if (userType === "G") {
                            alert(
                                "구글로 가입된 이메일입니다. 구글로 로그인하시기 바랍니다."
                            );
                            navigate("/login");
                        } else if (userType === "M" && email === email) {
                            alert(
                                "일반 회원으로 가입된 이메일입니다. 이메일로 로그인하시기 바랍니다."
                            );
                            navigate("/login");
                        }
                    } else {
                        alert("회원가입이 필요합니다.");
                        navigate("/signup1", {
                            state: {
                                dataSnsEmail: email,
                                dataSnsType: "K",
                                dataPassword: "123",
                            },
                        });
                    }
                } catch (err) {
                    console.log("서버 통신 에러 발생: " + err);
                }
            }
        };

        handleSubmit();
    }, [test, navigate]);

    return <Loading />;
};

export default KaKaoCallback;
