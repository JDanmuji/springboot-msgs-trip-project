import React from "react";
import styles from "../../pages/login/LoginMain.module.css";
import GoogleButton from "./GoogleButton";
import NaverLogin_social from "./NaverLogin_social";
import KakaoLogin_social from "./KakaoLogin_social";
import NaverLogin from "./NaverLogin";
import GoogleLogin_social from "./GoogleLogin_social";

const LoginSocial = () => {
    return (
        <div>
            <div className={styles["social-icon"]}>
                <ul className={styles["social-icon-wrap"]}>
                    <KakaoLogin_social />
                    <NaverLogin_social />
                    {/* <GoogleLogin_social /> */}
                </ul>
                <GoogleButton />
            </div>
        </div>
    );
};

export default LoginSocial;
