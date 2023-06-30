import axios from "axios";
import React from "react";
import styles from "../../pages/login/LoginMain.module.css";

import { useState } from "react";

const KakaoLogin_social = () => {
    const [kakaoLoginInfo, setKakaoLoginInfo] = useState("");

    const kakaoInfo = () => {
        setKakaoLoginInfo();
    };
    //kakao login 호출
    const CLIENT_ID = `${process.env.REACT_APP_PUBLIC_REST_API_KEY}`;
    const REDIRECT_URI = `${process.env.REACT_APP_REDIRECT_KAKAO_URL}`;
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    console.log(kakaoURL);

    return (
        <div>
            <li className={styles["kakao-icon"]}>
                <img
                    src={
                        process.env.PUBLIC_URL + "/images/kakao_button_new.png"
                    }
                    onClick={() => (window.location.href = kakaoURL)}
                ></img>
            </li>
        </div>
    );
};

export default KakaoLogin_social;
