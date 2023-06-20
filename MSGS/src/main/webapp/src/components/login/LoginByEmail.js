import React from "react";

const LoginByEmail = () => {
    return (
        <div>
            <div className="email-login-button">
                <button className="email-button">
                    <img className="email-icon" src={process.env.PUBLIC_URL + "images/email-icon.png"} /> 이메일로 로그인하기
                </button>
            </div>
        </div>
    );
};

export default LoginByEmail;
