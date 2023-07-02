import React from "react";
import styles from "../../pages/login/LoginMain.module.css";
import GoogleButton from "./GoogleButton";
import NaverLogin_social from "./NaverLogin_social";
import KakaoLogin_social from "./KakaoLogin_social";

const LoginSocial = ({ loginHandler }) => {
    return (
        <div>
            <div className={styles["social-icon"]}>
                <ul className={styles["social-icon-wrap"]}>
                    <KakaoLogin_social />
                    <NaverLogin_social loginHandler={loginHandler} />
                    <GoogleButton loginHandler={loginHandler} />
                </ul>
                <div></div>
            </div>
        </div>
    );
};

export default LoginSocial;
