import React from "react";

const NaverLogin = () => {
    const NAVER_CLIENT_ID = "asVak1am3wGx2kr2bgwM";
    const REDIRECT_URI = "http://localhost:3000/login";
    const STATE = "false";
    const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;

    const naver = () => {
        window.location.href = NAVER_AUTH_URL;
    };
    return (
        <div>
            <li className="naver-icon" onClick={naver}>
                <img src={process.env.PUBLIC_URL + "/images/auth_social_naver_round_btn.png"}></img>
            </li>
        </div>
    );
};

export default NaverLogin;
