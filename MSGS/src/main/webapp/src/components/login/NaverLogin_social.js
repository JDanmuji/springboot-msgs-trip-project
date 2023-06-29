import React, { useState } from "react";
import styles from "../../pages/login/LoginMain.module.css";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const NaverLogin_social = () => {
    const [naverEmail, setNaverEmail] = useState();
    const navigate = useNavigate();
    let password = "123";

    //요청 구간
    useEffect(() => {
        let naverLogin = new window.naver.LoginWithNaverId({
            clientId: `${process.env.REACT_APP_NAVER_CLIENT_ID}`,
            callbackUrl: `${process.env.REACT_APP_REDIRECT_NAVER_URL}`,
            loginButton: { color: "green", type: 1, height: "47" },
        });
        naverLogin.init();
        naverLogin.logout();

        //response 구간
        try {
            naverLogin.getLoginStatus(async (status) => {
                if (status) {
                    console.log("~~~!~!~!~!~!~!~!:", status); //true값 리턴
                    setNaverEmail(naverLogin.user.email);
                    console.log(naverLogin.user.email);
                    try {
                        const response = await axios.post(
                            `/user/getUserInfo?email=${naverEmail}`,
                            {
                                email: naverEmail,
                            }
                        );

                        if (response.ok) {
                            const data = await response.data;
                            const userType = data.userId.charAt(0);

                            console.log("타입 확인:", userType);
                            console.log(
                                "이미 가입된 회원이 있습니다.: " + data
                            );

                            if (userType === "N") {
                                try {
                                    const loginResponse = await axios.post(
                                        `/users/login`,
                                        {
                                            email: naverEmail,
                                            password: "123",
                                        }
                                    );

                                    const token =
                                        loginResponse.data.accessToken;
                                    console.log(
                                        "data 확인: ",
                                        loginResponse.data
                                    );
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
                            } else if (userType === "K") {
                                alert(
                                    "카카오로 가입된 이메일입니다. 카카오로 로그인하시기 바랍니다."
                                );
                                navigate("/login");
                            } else if (userType === "G") {
                                alert(
                                    "구글로 가입된 이메일입니다. 구글로 로그인하시기 바랍니다."
                                );
                                navigate("/login");
                            } else if (userType === "M") {
                                alert(
                                    "일반 회원으로 가입된 이메일입니다. 이메일로 로그인하시기 바랍니다."
                                );
                                navigate("/login");
                            }
                        } else {
                            alert("회원가입이 필요합니다.");
                            navigate("/signup1", {
                                state: {
                                    dataSnsEmail: naverEmail,
                                    dataSnsType: "N",
                                    dataPassword: "123",
                                },
                            });
                        }
                    } catch (err) {
                        console.log("서버 통신 에러 발생: " + err);
                    }
                }
            });
        } catch (err) {
            console.log(err);
        }
    }, []);
    //             //jwt 토큰 생성 구간
    //             const response = await fetch(`/users/login`, {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //                 body: JSON.stringify({
    //                     email: naverLogin.user.email,
    //                     password: password,
    //                 }),
    //             });

    //             const data = await response.json();
    //             const token = data.accessToken;
    //             console.log("data 확인: ", data);
    //             console.log("토큰 확인: ", token);
    //             Cookies.set("token", token, { expires: 1 });

    //             const tokenValue = Cookies.get("token");

    //             // Check if the 'token' cookie exists and log its value
    //             if (tokenValue) {
    //                 console.log("Token cookie value:", tokenValue);
    //             } else {
    //                 console.log(
    //                     "Token cookie does not exist or has no value"
    //                 );
    //             }

    //             console.log(response);
    //             if (response.ok) {
    //                 navigate("/");
    //             } else {
    //                 alert("회원가입이 필요합니다.");
    //                 navigate("/signup1", {
    //                     state: {
    //                         dataSnsEmail: naverLogin.user.email,
    //                         dataSnsType: "N",
    //                         dataPassword: "123",
    //                     },
    //                 });
    //             }
    //         }
    //     });
    // } catch (err) {
    //     console.log(err);
    // }

    return (
        <div>
            <li className={styles["naver-icon"]} id="naverIdLogin">
                <img
                    src={
                        process.env.PUBLIC_URL +
                        "/images/auth_social_naver_round_btn.png"
                    }
                ></img>
            </li>
        </div>
    );
};

export default NaverLogin_social;
