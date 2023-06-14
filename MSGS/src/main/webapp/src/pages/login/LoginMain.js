import React from "react";
import "./LoginMain.css";
import LoginSocial from "../../components/login/LoginSocial";
import LoginByEmail from "../../components/login/LoginByEmail";
import JoinMember from "../../components/login/JoinMember";

const LoginMain = () => {
    return (
        <div className="login-main-wrap">
            <div className="login-main-image">
                <a href="../main/Main">
                    <img src={process.env.PUBLIC_URL + "/images/Login-main-image.jfif"}></img>
                </a>
            </div>
            <h2 className="login-main-title-content">지금 마실가실과 여행을 시작하세요!</h2>
            <LoginSocial />
            <LoginByEmail />
            <JoinMember />
            <div className="login-find-info">
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
