import React, { useState } from "react";
import Cookies from "js-cookie";
import styles from "./LogoutModal.module.css";

const LogoutModal = (props) => {
    console.log(props);
    const logoutHandler = () => {
        props.setIsToken(false);
        props.changeLoginHandler(false);
        props.onClose(false);
        Cookies.remove("token");
    };

    const onClose = () => {
        props.onClose(false);
    };

    return (
        <div className={styles["modal-background"]}>
            <div className={styles["modal-body"]}>
                <img
                    className={styles["modal-close-btn"]}
                    src={process.env.PUBLIC_URL + "/images/modal_close_btn.png"}
                    alt="closing icon"
                    onClick={onClose}
                />
                <div className={styles["confirm-text"]}>
                    <div className={styles["sub-msg"]}>
                        정말 로그아웃 하시겠습니까?
                    </div>
                </div>

                <div className={styles["modal-footer"]}>
                    <button
                        onClick={onClose}
                        className={styles["cancel-modal-btn"]}
                        style={{ color: "black" }}
                    >
                        <span>취소</span>
                    </button>
                    <button
                        onClick={logoutHandler}
                        className={styles["confirm-modal-btn"]}
                        style={{ color: "white" }}
                    >
                        <span>확인</span>
                    </button>
                </div>
            </div>
            {/* {kakaoLogout ? null : <KakaoLogout_social />} */}
        </div>
    );
};

export default LogoutModal;
