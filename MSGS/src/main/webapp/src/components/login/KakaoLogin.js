import React from "react";

const KakaoLogin = () => {
    let kakao_api_url = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${encodeURI(
        process.env.REACT_APP_KAKAO_CALLBACK_URI
    )}&response_type=code`;
    return (
        <div>
            <li className="kakao-icon">
                <a href={kakao_api_url}>
                    <img src={process.env.PUBLIC_URL + "/images/auth_social_kakao_round_btn.png"}></img>
                </a>
            </li>
        </div>
    );
};

export default KakaoLogin;
