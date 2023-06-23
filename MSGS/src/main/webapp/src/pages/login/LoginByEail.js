import React from "react";
import { useState } from "react";
import styles from "../signup/Signup.module.css";

const LoginByEail = () => {
    const [email, setEmail] = useState(""); // 이메일
    const [password, setPassword] = useState(""); // 비밀번호
    const [confirmPassword, setConfirmPassword] = useState("");

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 이메일과 비밀번호 확인 로직 구현
        if (password === confirmPassword) {
            // 이메일과 비밀번호가 일치하는 경우 가입 프로세스 진행
            alert("가입 성공!");
            // 여기서 가입 프로세스를 진행하면 됩니다.
        } else {
            // 이메일과 비밀번호가 일치하지 않는 경우 처리 로직
            alert("비밀번호가 일치하지 않습니다.");
        }
    };

    //----------------------------------------------
    // 공백 제거
    const handleEmailChange = (e) => {
        const enteredEmail = e.target.value.replace(/\s/g, "").trim();
        setEmail(enteredEmail);
    };
    // 이메일 형식 체크
    const validateEmail = (email) => {
        const regex =
            /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
        return regex.test(email);
    };

    const emailEventHandler = (e) => {
        const enteredEmail = e.target.value.replace(/\s/g, "").trim();
        handleEmailChange(e);

        if (validateEmail(enteredEmail)) {
            // 이메일 형식이 올바른 경우
            // 필요한 동작을 수행할 수 있습니다
            console.log("올바른 이메일 형식입니다:", enteredEmail);
        } else {
            // 이메일 형식이 올바르지 않은 경우
            // 유효성 검사 오류를 처리할 수 있습니다
            console.log("올바르지 않은 이메일 형식입니다:", enteredEmail);
        }
    };

    return (
        <div className={styles["width-wrapper"]}>
            <form
                className={styles["width-wrapper-form"]}
                onSubmit={handleSubmit}
            >
                <h1 className={styles["signup-heading"]}>
                    이메일로 로그인 하기
                </h1>

                <div className={styles["input-group"]}>
                    <label className={styles.label}>
                        <h2 className={styles["input-label"]}>이메일 주소</h2>
                    </label>
                    <div className={styles["input-field"]}>
                        <input
                            type="email"
                            value={email}
                            onChange={emailEventHandler}
                            placeholder="abc@gmail.com"
                            required
                            className={styles["input"]}
                        />
                        {validateEmail(email) ? (
                            <div className={styles["input-field-valEmail"]}>
                                올바른 이메일 형식입니다:)
                            </div>
                        ) : (
                            <div className={styles["input-field-inValEmail"]}>
                                이메일 형식이 올바르지 않습니다:(
                            </div>
                        )}
                    </div>
                </div>

                <br />
                <div className={styles["input-group"]}>
                    <label className={styles.label}>
                        <h2 className={styles["input-label"]}>비밀번호</h2>
                    </label>
                    <div className={styles["input-field"]}>
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="비밀번호 입력"
                            required
                            className={styles["input"]}
                        />
                    </div>
                </div>

                <button className={styles["submit-button"]} type="submit">
                    확인
                </button>
            </form>
        </div>
    );
};

export default LoginByEail;
