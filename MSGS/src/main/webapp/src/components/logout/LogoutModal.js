import React from "react";
import styles from "./LogoutModal.module.css";

const LogoutModal = () => {
    return (
        <div className={styles["modal-background"]}>
            <div className={styles["modal-body"]}>
                <img className={styles["modal-close-btn"]} src="/public/images/modal_close_btn.png" alt="closing icon" />
                <div className={styles["confirm-text"]}>
                    <div className={styles["sub-msg"]}>정말 로그아웃 하시겠습니까?</div>
                </div>

                <div className={styles["modal-footer"]}>
                    <button className={styles["cancel-modal-btn"]} style={{ color: "black" }}>
                        <span>취소</span>
                    </button>
                    <button className={styles["confirm-modal-btn"]} style={{ color: "white" }}>
                        <span>확인</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogoutModal;
