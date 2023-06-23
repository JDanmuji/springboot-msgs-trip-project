import React from "react";
import styles from "../../pages/login/LoginMain.module.css";

const JoinMember = () => {
    return (
        <div>
            <a href="/signup1">
                <button className={styles["member-join-button"]}>
                    회원가입
                </button>
            </a>
        </div>
    );
};

export default JoinMember;
