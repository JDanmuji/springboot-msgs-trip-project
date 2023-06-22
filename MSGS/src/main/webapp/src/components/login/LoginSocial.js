import React from "react";

import GoogleButton from "./GoogleButton";
import NaverLogin_social from "./NaverLogin_social";
import KakaoLogin_social from "./KakaoLogin_social";

const LoginSocial = () => {
    return (
        <div>
            <div className="social-icon">
                <ul className="social-icon-wrap">
                    <NaverLogin_social />
                    <KakaoLogin_social />
                    {/* <GoogleButton /> */}
                </ul>
            </div>
        </div>
    );
};

export default LoginSocial;
