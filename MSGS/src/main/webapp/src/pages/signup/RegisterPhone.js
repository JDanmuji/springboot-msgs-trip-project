import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";

import styles from "./RegisterPhone.module.css";

const RegisterPhone = () => {
    const [to, setTo] = useState("");
    const [sentCode, setSentCode] = useState("");
    const [insertedCode, setInsertedCode] = useState("");
    const [seconds, setSeconds] = useState(0);
    const [hasSmsSent, setHasSmsSent] = useState("전송");
    const [isCodeChecked, setIsCodeChecked] = useState(false);
    const [codeCheckText, setCodeCheckText] = useState("");
    const [phoneCheckText, setPhoneCheckText] = useState("");
    const insertedCodeRef = useRef(null);

    const smsSendHandler = async (event) => {
        event.preventDefault();

        if (to && /^\d{11}$/.test(to)) {
            setPhoneCheckText("");

            try {
                console.log("smscheckmethod");

                const response = await axios.post("/user/signup/smscheck", {
                    to,
                });
                setPhoneCheckText("인증번호가 전송되었습니다.");
                setSentCode(response.data.toString()); // 새로 발급된 인증번호 받아옴
                setHasSmsSent("재전송"); // 전송 버튼 재전송으로 변경

                console.log(to);
                console.log(response.data.toString());

                setSeconds(180); // 타이머 초기화
                setTimeout(() => {
                    setSentCode(""); // 3분 후 인증번호 삭제
                }, 180000);
            } catch (error) {
                console.log("Error occurred:", error);
            }
        } else {
            setPhoneCheckText("휴대폰 번호를 정확하게 입력해 주세요.");
        }
    };

    const codeCheckHandler = useCallback(
        (event) => {
            event.preventDefault();

            if (!sentCode) {
                // 인증번호 미발급 & 발급 후 시간 초과 시
                setCodeCheckText("새로운 인증번호를 요청해 주세요.");
            } else if (insertedCode && sentCode === insertedCode) {
                setCodeCheckText("인증번호 확인 완료");
                setIsCodeChecked(true);
                setSeconds(0);
            } else {
                setCodeCheckText("인증번호가 일치하지 않습니다.");
                insertedCodeRef.current.focus();
            }
        },
        [sentCode, insertedCode]
    );

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        // 남은 시간 0이면 멈춤
        if (seconds === 0) {
            clearInterval(timer);
        }

        // Clear the timer when the component is unmounted
        return () => clearInterval(timer);
    }, [seconds]); // seconds 변경 시 타이머 시작

    // "seconds" state 분:초로 포맷 변경
    const formattedTime = `${Math.floor(seconds / 60)
        .toString()
        .padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`;

    // 마지막 완료 버튼
    const completeBtnHandler = () => {};

    // 나중에 등록하기 버튼
    const laterBtnHandler = () => {};

    return (
        <div className={styles["register-wrapper"]}>
            <div>
                <h1>휴대폰 번호 등록하기</h1>
                <h2>
                    마실가실에서는 고객님의 편리한 이용 및 회원 정보 관리를 위해
                    본인 인증(최초 1회)를 하고 있습니다.
                </h2>

                <h3>휴대폰 번호</h3>
                <form onSubmit={smsSendHandler}>
                    <input
                        className={styles["phone-input"]}
                        type="text"
                        value={to}
                        onChange={(event) => setTo(event.target.value.trim())}
                    />
                    <button
                        type="submit"
                        className={`${styles["btn-able"]} ${
                            isCodeChecked && styles["btn-disabled"]
                        }`}
                        disabled={isCodeChecked && "disabled"}
                    >
                        {hasSmsSent}
                    </button>
                </form>
                <p className={styles["insert-check-result"]}>
                    {phoneCheckText}
                </p>

                <h3>인증번호</h3>
                <form onSubmit={codeCheckHandler}>
                    <input
                        className={`${styles["phone-input"]} ${styles["code-input"]}`}
                        type="text"
                        value={insertedCode}
                        onChange={(event) =>
                            setInsertedCode(event.target.value.trim())
                        }
                        ref={insertedCodeRef}
                    />

                    <div className={styles["code-timer"]}>
                        <span>인증번호 만료까지 {formattedTime}</span>
                    </div>

                    <button
                        type="submit"
                        className={`${styles["btn-able"]} ${
                            isCodeChecked && styles["btn-disabled"]
                        }`}
                        disabled={isCodeChecked && "disabled"}
                    >
                        {isCodeChecked ? "인증 완료" : "인증번호 확인"}
                    </button>
                </form>

                <p className={styles["insert-check-result"]}>{codeCheckText}</p>

                <button
                    className={`${styles["complete-btn-disabled"]} ${
                        isCodeChecked && styles["complete-btn-able"]
                    }`}
                    onClick={completeBtnHandler}
                    disabled={isCodeChecked || "disabled"}
                >
                    휴대폰 인증 완료하기
                </button>

                <button
                    className={styles["later-btn"]}
                    onClick={laterBtnHandler}
                >
                    <span>나중에 등록하기</span>
                </button>
            </div>
        </div>
    );
};

export default RegisterPhone;
