import React from "react";

import NaverLogin from "./NaverLogin";
import KakaoLogin from "./KakaoLogin";
import GoogleButton from "./GoogleButton";

const LoginSocial = () => {
    return (
        <div>
            <div className="social-icon">
                <ul className="social-icon-wrap">
                    <NaverLogin />
                    <KakaoLogin />
                    <GoogleButton />
                </ul>
            </div>
        </div>
    );
};

export default LoginSocial;
