<<<<<<< HEAD
import React from "react";
=======
import React, { useEffect } from "react";
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b
import "./LoginMain.css";
import LoginSocial from "../../components/login/LoginSocial";
import LoginByEmail from "../../components/login/LoginByEmail";
import JoinMember from "../../components/login/JoinMember";
<<<<<<< HEAD

const LoginMain = () => {
=======
import { useNavigate } from "react-router-dom";

const LoginMain = (props) => {
    const naviagte = useNavigate();

    useEffect(() => {
        let code = new URL(window.location.href).searchParams.get("code");
        console.log(code);
    });
    console.log(props);
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b
    return (
        <div className="login-main-wrap">
            <div className="login-main-image">
                <a href="../main/Main">
<<<<<<< HEAD
                    <img src={process.env.PUBLIC_URL + "/images/Login-main-image.jfif"}></img>
                </a>
            </div>
            <h2 className="login-main-title-content">지금 마실가실과 여행을 시작하세요!</h2>
=======
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/images/Login-main-image.jfif"
                        }
                    ></img>
                </a>
            </div>
            <h2 className="login-main-title-content">
                지금 마실가실과 여행을 시작하세요!
            </h2>
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b
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
