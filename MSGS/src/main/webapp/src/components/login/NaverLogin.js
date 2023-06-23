import React from "react";
import styles from "../../pages/login/LoginMain.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NaverLogin = () => {
    const navigate = useNavigate();
    useEffect(() => {
        let naverLogin = new window.naver.LoginWithNaverId({
            clientId: `${process.env.REACT_APP_NAVER_CLIENT_ID}`,
            callbackUrl: `http://localhost:3000`,
            loginButton: { color: "white", type: 4, height: "45" },
        });
        naverLogin.init();
        // naverLogin.logout();
        try {
            naverLogin.getLoginStatus((status) => {
                if (status) {
                    console.log(naverLogin.user);
                }
            });
        } catch (err) {
            console.log(err);
        }
    }, []);
    //callback
    useEffect(() => {
        let code = new URL(window.location.href).searchParams.get("code");
        console.log(code);
    });
    return (
        <div>
            <li className={styles["naver-icon"]} id="naverIdLogin">
                <img
                    src={
                        process.env.PUBLIC_URL +
                        "/images/auth_social_naver_round_btn.png"
                    }
                ></img>
            </li>
        </div>
    );
};

export default NaverLogin;
