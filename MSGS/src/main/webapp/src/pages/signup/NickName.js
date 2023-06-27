import React, { useState } from "react";
import styles from "./nickname.module.css";
import { IoMdCloseCircle } from "react-icons/io";
import NickNameButton from "./NickNameButton";

const NickName = (props) => {
    const [nickname, setNickname] = useState("");

    const handleClearInput = () => {
        setNickname("");
    };
    const getNickName = (e) => {
        setNickname(e.target.value);
        props.setnickNameValue(e.target.value);
    };

    return (
        <div className={styles["width-wrapper"]}>
            <div className={styles["profile-img-area"]}>
                <img
                    className={styles["profile-img"]}
                    src="https://media.istockphoto.com/id/1264062226/ko/%EB%B2%A1%ED%84%B0/%ED%81%B4%EB%9E%98%EC%8B%9D-%EB%B9%88%ED%8B%B0%EC%A7%80-%EB%A7%A4%EB%81%84%EB%9F%AC%EC%9A%B4-%ED%8C%A8%ED%84%B4-%EB%AC%BC%EB%B0%A9%EC%9A%B8-%EB%AC%B4%EB%8A%AC-%EA%B7%B8%EB%A0%81%EC%A7%80-%ED%81%AC%EB%A0%88%EC%9A%A9-%EC%9E%89%ED%81%AC-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%EB%85%B8%EB%9E%80%EC%83%89-%EA%B0%88%EC%83%89-%EC%A3%BC%ED%99%A9%EC%83%89-%EC%9D%B8%EC%82%AC%EB%A7%90-%EC%B9%B4%EB%93%9C-%EB%94%94%EC%9E%90%EC%9D%B8-%EA%B8%B0%ED%94%84%ED%8A%B8-%EB%9E%A9-%EC%A7%81%EB%AC%BC-%EB%B0%B0%EA%B2%BD-%ED%99%94%EB%A9%B4%EC%9C%BC%EB%A1%9C-%EC%82%AC%EC%9A%A9%ED%95%A0-%EC%88%98-%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4.jpg?s=2048x2048&w=is&k=20&c=Gl0fgsbp3x-aaZ9HzD7F_hCuzWgiaEDSTIp8JhW-YY0="
                    alt="profileImg"
                />
            </div>
            <div className={styles["nickname-area"]}>
                <input
                    type="text"
                    className={styles["nickname-input"]}
                    placeholder="설정할 닉네임 입력"
                    value={nickname}
                    onChange={getNickName}
                    maxLength={8}
                />
                <button
                    className={styles["clear-btn"]}
                    onClick={handleClearInput}
                >
                    <IoMdCloseCircle className={styles["clear-icon"]} />
                </button>
            </div>
            <NickNameButton onNext={props.onNext} nickname={nickname} />
            <div className={styles["information-area"]}>
                <div className={styles["information"]}>
                    한글/영어/숫자/밑줄/띄어쓰기를 사용할 수 있습니다.
                </div>
            </div>
        </div>
    );
};

export default NickName;
