import React, { useReducer } from "react";
import styles from "./nickname.module.css";

const NickNameButton = (props) => {
    //const nickname = props.getNickName;
    console.log(props);

    const isNicknameValid = props.nickname.trim().length !== 0; //닉네임이 공백이 아닌지 확인

    return (
        <div className={styles["ok-btn-area"]}>
            <div className={styles["nickname-ok-btn"]}>
                <button disabled={!isNicknameValid} onClick={props.onNext}>
                    확인
                </button>
            </div>
        </div>
    );
};

export default NickNameButton;
