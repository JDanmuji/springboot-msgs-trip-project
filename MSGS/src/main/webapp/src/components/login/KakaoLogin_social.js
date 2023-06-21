import axios from "axios";
import React from "react";
import KaKaoCallback from "./KaKaoCallback";

const KakaoLogin_social = () => {
    const CLIENT_ID = `${process.env.REACT_APP_PUBLIC_REST_API_KEY}`;
    const REDIRECT_URI = `${process.env.REACT_APP_REDIRECT_KAKAO_URL}`;
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    console.log(kakaoURL);
    return (
        <div>
            <li className="kakao-icon">
                <img
                    src={
                        process.env.PUBLIC_URL +
                        "/images/auth_social_kakao_round_btn.png"
                    }
                    onClick={() => (window.location.href = kakaoURL)}
                ></img>
            </li>
        </div>
    );
};

export default KakaoLogin_social;
