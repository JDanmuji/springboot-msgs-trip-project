import React, { useEffect } from "react";
import styles from "./LoginMain.module.css";
import LoginSocial from "../../components/login/LoginSocial";

import JoinMember from "../../components/login/JoinMember";
import { Link, useNavigate } from "react-router-dom";
import LoginByEmailButton from "../../components/login/LoginByEmailButton";

const LoginMain = (props) => {
    const naviagte = useNavigate();

    useEffect(() => {
        let code = new URL(window.location.href).searchParams.get("code");
        console.log(code);
    });
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
            <LoginSocial />
            <LoginByEmailButton />
            <JoinMember />
            <div className={styles["login-find-info"]}>
                <a href="">아이디 찾기</a>
                <a href="">문의하기</a>
                <span>
                    <a href="">비회원 예약 조회</a>
                </span>
            </div>
        </div>
    );
};

export default LoginMain;
