import React from "react";

<<<<<<< HEAD
import NaverLogin from "./NaverLogin";
import KakaoLogin from "./KakaoLogin";
import GoogleButton from "./GoogleButton";
=======
import GoogleButton from "./GoogleButton";
import NaverLogin_social from "./NaverLogin_social";
import KakaoLogin_social from "./KakaoLogin_social";
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b

const LoginSocial = () => {
    return (
        <div>
            <div className="social-icon">
                <ul className="social-icon-wrap">
<<<<<<< HEAD
                    <NaverLogin />
                    <KakaoLogin />
=======
                    <NaverLogin_social />
                    <KakaoLogin_social />
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b
                    {/* <GoogleButton /> */}
                </ul>
            </div>
        </div>
    );
};

export default LoginSocial;
