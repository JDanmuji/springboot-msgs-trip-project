import React, { useEffect } from "react";
import styles from "./LoginMain.module.css";
import LoginSocial from "../../components/login/LoginSocial";

import JoinMember from "../../components/login/JoinMember";
import { Link, useNavigate } from "react-router-dom";
import LoginByEmailButton from "../../components/login/LoginByEmailButton";

const LoginMain = (props) => {
    const navigate = useNavigate();

    // useEffect(() => {
    //     let code = new URL(window.location.href).searchParams.get("code");
    //     console.log(code);
    // }, []);

    console.log(props);
    return (
        <div className={styles["login-main-wrap"]}>
            <div className={styles["login-main-image"]}>
                <Link to="/">
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/images/Login-main-image.jfif"
                        }
                    ></img>
                </Link>
            </div>
            <h2 className={styles["login-main-title-content"]}>
                지금 마실가실과 여행을 시작하세요!
            </h2>
            <LoginSocial loginHandler={props.loginHandler} />
            <LoginByEmailButton />
            <JoinMember />
        </div>
    );
};

export default LoginMain;
