import React from "react";
import styles from "../../pages/login/LoginMain.module.css";
import { Link } from "react-router-dom";
const LoginByEmailButton = () => {
    return (
        <div>
            <div className={styles["email-login-button"]}>
                <Link to="/login/byEmail">
                    <button className={styles["email-button"]}>
                        <img
                            className={styles["email-icon"]}
                            src={
                                process.env.PUBLIC_URL + "images/email-icon.png"
                            }
                        />
                        이메일로 로그인하기
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default LoginByEmailButton;
