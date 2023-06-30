import React, { useState } from "react";
import styles from "../../pages/login/LoginMain.module.css";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const NaverLogin_social = ({ loginHandler }) => {
    const [naverEmail, setNaverEmail] = useState();
    const navigate = useNavigate();
    let password = "123";

    //callback
    useEffect(() => {
        let naverLogin = new window.naver.LoginWithNaverId({
            clientId: `${process.env.REACT_APP_NAVER_CLIENT_ID}`,
            callbackUrl: `${process.env.REACT_APP_REDIRECT_NAVER_URL}`,
            loginButton: { color: "green", type: 1, height: "47" },
        });
        naverLogin.init();
        naverLogin.logout();

        naverLogin.getLoginStatus(async (status) => {
            if (status) {
                //
                setNaverEmail(naverLogin.user.email);
                console.log("이것은 무엇일까????", status);

                const response = await fetch(`/users/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: naverEmail,
                        password: password,
                    }),
                });

                const data = await response.json();
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
                    loginHandler(tokenValue);
                    navigate("/");
                } else {
                    navigate("/signup1", {
                        state: {
                            dataSnsEmail: naverEmail,
                            dataSnsType: "N",
                        },
                    });
                }
            }
        });
    }, [naverEmail]);

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
