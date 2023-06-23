import React from "react";
import styles from "../../pages/login/LoginMain.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NaverLogin_social = () => {
    const navigate = useNavigate();
    // const _clickSnsLoginNaver = (e) => {
    //     let naverid = e.asVak1am3wGx2kr2bgwM; // 네이버에서 제공한 ID
    // };
    const NAVER_CLIENT_ID = `${process.env.REACT_APP_NAVER_CLIENT_ID}`;
    const REDIRECT_URI = `${process.env.REACT_APP_REDIRECT_NAVER_URL}`;
    const STATE = "false";
    const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;

    const naver = () => {
        window.location.href = NAVER_AUTH_URL;
    };

    //callback
    useEffect(() => {
        let code = new URL(window.location.href).searchParams.get("code");
        console.log(code);
    });
    return (
        <div>
            <li className={styles["naver-icon"]} onClick={naver}>
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

export default NaverLogin_social;
