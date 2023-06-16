import React from "react";
import styles from "./ProfileUpdate.module.css";

const ProfileUpdate = () => {
    return (
        <div className={styles["profile-total-wrap"]}>
            <div className={styles["profile-update-wrap"]}>
                <div className={styles["profile-update-image"]}></div>
                <div className={styles["profile-input"]}>
                    <div className={styles["profile-input-001"]}>
                        <p>이름</p>
                        <input type="text" name="name"></input>
                    </div>
                    <div className={styles["profile-input-002"]}>
                        <p>닉네임</p>
                        <input type="text" name="nickname"></input>
                    </div>
                    <div className={styles["profile-input-003"]}>
                        <p>이메일</p>
                        <input type="text"></input>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileUpdate;
