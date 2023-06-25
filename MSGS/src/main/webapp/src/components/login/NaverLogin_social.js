import React, { useState } from "react";
import styles from "../../pages/login/LoginMain.module.css";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const NaverLogin_social = () => {
    const [naverEmail, setNaverEmail] = useState();
    const navigate = useNavigate();
    let type = "N";
    // const navigate = useNavigate();
    // const location = useLocation();
    // // const _clickSnsLoginNaver = (e) => {
    // //     let naverid = e.asVak1am3wGx2kr2bgwM; // 네이버에서 제공한 ID
    // // };
    // const NAVER_CLIENT_ID = `${process.env.REACT_APP_NAVER_CLIENT_ID}`;
    // const REDIRECT_URI = `${process.env.REACT_APP_REDIRECT_NAVER_URL}`;
    // const STATE = "false";
    // const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;

    // const naver = () => {
    //     window.location.href = NAVER_AUTH_URL;
    // };

    //callback
    useEffect(() => {
        let naverLogin = new window.naver.LoginWithNaverId({
            clientId: `${process.env.REACT_APP_NAVER_CLIENT_ID}`,
            callbackUrl: `${process.env.REACT_APP_REDIRECT_NAVER_URL}`,
            loginButton: { color: "green", type: 3, height: "50" },
        });
        naverLogin.init();
        naverLogin.logout();
        try {
            naverLogin.getLoginStatus((status) => {
                if (status) {
                    console.log(naverLogin.user);
                    console.log(naverLogin.user.email);
                    setNaverEmail(naverLogin.user.email);

                    fetch("/user/getUserInfo", {
                        method: "post",
                        body: JSON.stringify({
                            email: naverLogin.user.email,
                        }),
                    })
                        .then((response) => response.json())
                        .then((res) => {
                            if (res === "") {
                                console.log("회원가입 ");
                            } else {
                                console.log("사용 불가 😊: ");
                            }
                        });
                }
            });
        } catch (err) {
            console.log(err);
        }
    }, []);
    navigate("/signup1", {
        state: {
            snsEmail: naverEmail,
            snstype: type,
        },
    });

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
