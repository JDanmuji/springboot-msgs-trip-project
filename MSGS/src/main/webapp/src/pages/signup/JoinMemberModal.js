import React, { useState } from "react";
import styles from "./JoinMemberModal.module.css";
import { useNavigate } from "react-router-dom";

const JoinMemberModal = () => {
    const navigate = useNavigate();

    const onClose = () => {
        navigate("/");
    };

    const joinMemberHandler = () => {
        navigate("/SignupAgreement");
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
                        회원이 아닙니다. 회원가입 하시겠습니까?
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
                        onClick={joinMemberHandler}
                        className={styles["confirm-modal-btn"]}
                        style={{ color: "white" }}
                    >
                        <span>확인</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JoinMemberModal;
