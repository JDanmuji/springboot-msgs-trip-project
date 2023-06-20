import React, { useEffect, useState } from "react";
import styles from "./ProfileUpdate.module.css";

const ProfileUpdate = () => {
    const [profileInfo, setProfileInfo] = useState({
        name: "",
        nickname: "",
        email: "",
    });
    // const { name, nickname, email } = userProfile;

    const profileInfoHandler = (e) => {
        setProfileInfo({
            [e.target.name]: e.target.value,
            [e.target.nickname]: e.target.value,
            [e.target.email]: e.target.value,
        });
        console.log(profileInfo);
    };
    // useEffect(() => {});
    return (
        // <form
        //     action=""
        //     method="post"
        //     onSubmit={function (e) {
        //         e.preventDefault();
        //         this.props.onSubmit(
        //             e.target.name.value,
        //             e.target.nickname,
        //             e.target.email
        //         );
        //     }.bind(this)}
        // >
        <div className={styles["profile-total-wrap"]}>
            <div className={styles["profile-update-wrap"]}>
                <div
                    className={styles["profile-update-image"]}
                    onChange={profileInfoHandler}
                >
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/images/camera-4990900.png"
                        }
                    />
                </div>
                <div className={styles["profile-input"]}>
                    <div className={styles["profile-input-001"]}>
                        <p className={styles["profile-input-subject"]}>이름</p>
                        <input
                            type="text"
                            name="name"
                            onChange={profileInfoHandler}
                        ></input>
                    </div>
                    <div className={styles["profile-input-002"]}>
                        <p className={styles["profile-input-subject"]}>
                            닉네임
                        </p>
                        <input
                            type="text"
                            name="nickname"
                            onChange={profileInfoHandler}
                        ></input>
                    </div>
                    <div className={styles["profile-input-003"]}>
                        <p className={styles["profile-input-subject"]}>
                            이메일
                        </p>
                        <input
                            type="text"
                            name="email"
                            onChange={profileInfoHandler}
                        ></input>
                    </div>
                </div>
                <div>
                    <p className={styles["member-withdraw"]}>회원탈퇴</p>
                </div>
                <div className={styles["profile-list-button"]}>
                    <button
                        type="reset"
                        className={styles["profile-list-button-cancle"]}
                    >
                        취소하기
                    </button>
                    <button
                        type="submit"
                        className={styles["profile-list-button-save"]}
                    >
                        저장하기
                    </button>
                </div>
            </div>
        </div>
        // </form>
    );
};

export default ProfileUpdate;
