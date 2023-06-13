import React from "react";

const LoginSocial = () => {
    return (
        <div>
            <div className="social-icon">
                <ul className="social-icon-wrap">
                    <li className="naver-icon">
                        <a href="">
                            <img src="public\images\auth_social_naver_round_btn.png"></img>
                        </a>
                    </li>
                    <li className="kakao-icon">
                        <a href="">
                            <img src="public\images\auth_social_kakao_round_btn.png"></img>
                        </a>
                    </li>
                    <li className="facebook-icon">
                        <a href="">
                            <img src="public\images\auth_social_facebook_round_btn.png"></img>
                        </a>
                    </li>
                    <li className="apple-icon">
                        <a href="">
                            <img src="public\images\auth_social_apple_round_btn.png"></img>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default LoginSocial;
