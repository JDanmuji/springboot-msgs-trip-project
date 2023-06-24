import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "./Signup.module.css";
import SignupAgreement from "./SignupAgreement";
import NickName from "./NickName";
import NonMemberResSearch from "./NonMemberResSearch";
import RegisterPhone from "./RegisterPhone";

const Signup1 = (props) => {
    const [email, setEmail] = useState(""); // 이메일
    const [enteredEmail, setEnteredEmail] = useState(""); // 유효성 검사된 이메일
    const [password, setPassword] = useState(""); // 비밀번호
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isPasswordMatched, setIsPasswordMatched] = useState(false);
    const [nickNameValue, setnickNameValue] = useState("");
    const [agreementValue, setAgreementValue] = useState("");
    const [count, setCount] = useState(1);

    const getAgreementValue = (agreementValue) => {
        setAgreementValue(agreementValue);
        console.log(agreementValue);
    };

    const getNickName = (nickNameValue) => {
        setnickNameValue(nickNameValue);
        console.log();
    };

    const allData = {
        email: { email },
        password: { password },
        agreementValue: { agreementValue },
        nickNameValue: { nickNameValue },
    };

    const onNext = () => {
        if (email === "" || password === "" || confirmPassword === "")
            setCount(count);
        else {
            setCount(count + 1);
        }
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

    //---------- 이메일 형식 체크 ----------
    const [validateEmail, setValidateEmail] = useState(false);

    const emailEventHandler = (e) => {
        const emailValue = e.target.value.replace(/\s/g, "").trim();
        setEnteredEmail(emailValue);
        setEmail(emailValue);
        const regex1 =
            /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
        const isValidEmail = regex1.test(emailValue);

        setValidateEmail(isValidEmail);
    };

    // ---------- 비밀번호 형식 체크 ----------
    const [validatePwd, setValidatePwd] = useState(false);

    const pwdEventHandler = (e) => {
        setPassword(e.target.value);
        const reg2 = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
        const isValidPwd = reg2.test(e.target.value);

        setValidatePwd(isValidPwd);
    };

    // ---------- 비밀번호 동일 여부 체크 ----------
    const [isPwdMatched, setIsPwdMatched] = useState(false);

    const pwdMatchCheckHandler = (e) => {
        setConfirmPassword(e.target.value);
        if (password !== e.target.value) {
            setIsPwdMatched(false);
        } else {
            setIsPwdMatched(true);
        }
    };

    // ---------- 이메일 중복 검사(입력 완료 후 1초 뒤 실행) ----------
    const [timer, setTimer] = useState(null);
    const [dplChkEmail, setDplChkEmail] = useState(true);

    useEffect(() => {
        clearTimeout(timer); // 이전 타이머를 제거

        if (validateEmail) {
            const newTimer = setTimeout(dplChkEmailHandler, 1000);
            setTimer(newTimer);
        }
    }, [validateEmail, enteredEmail]);

    const dplChkEmailHandler = async () => {
        try {
            const response = await fetch(
                `/user/getUserInfo?email=${enteredEmail}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email: enteredEmail }),
                }
            );

            if (response.ok) {
                const text = await response.text();

                if (text) {
                    try {
                        const data = JSON.parse(text);
                        console.log("사용 불가 😊: " + data);
                        setDplChkEmail(false);
                    } catch (error) {
                        console.log("JSON.parse error: ", error);
                    } // JSON.parse try-catch
                } else {
                    console.log("response: 빈 응답");
                    setDplChkEmail(true);
                } // text
            } else {
                console.log("response!=200");
            } // response isn't ok
        } catch (err) {
            console.log("서버 통신 에러 발생: " + err);
        }
    };

    return (
        <div className={styles["width-wrapper"]}>
            {count === 1 && (
                <form
                    className={styles["width-wrapper-form"]}
                    onSubmit={handleSubmit}
                >
                    <h1 className={styles["signup-heading"]}>
                        이메일로 가입하기
                    </h1>

                    <div className={styles["input-group"]}>
                        <label className={styles.label}>
                            <h2 className={styles["input-label"]}>
                                이메일 주소
                            </h2>
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
                            {validateEmail ? (
                                <div className={styles["input-field-valEmail"]}>
                                    {email.length > 0 && dplChkEmail ? (
                                        <span>사용 가능한 이메일입니다 :)</span>
                                    ) : email.length > 0 && !dplChkEmail ? (
                                        <span>중복된 이메일입니다 :(</span>
                                    ) : (
                                        <span>올바른 이메일 형식입니다 :)</span>
                                    )}
                                </div>
                            ) : (
                                <div
                                    className={styles["input-field-inValEmail"]}
                                >
                                    이메일 형식이 올바르지 않습니다 :(
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
                                onChange={pwdEventHandler}
                                placeholder="비밀번호 입력"
                                required
                                className={styles["input"]}
                            />
                            {validatePwd ? (
                                <div className={styles["input-field-valEmail"]}>
                                    올바른 비밀번호 형식입니다 :)
                                </div>
                            ) : (
                                <div
                                    className={styles["input-field-inValEmail"]}
                                >
                                    숫자+영문자+특수문자 조합으로 8자리 이상
                                    입력해주세요 :(
                                </div>
                            )}
                            {/* {validatePwd && (
                <FontAwesomeIcon
                  icon={faCheck}
                  className={styles["check-icon"]}
                />
              )} */}
                        </div>
                    </div>

                    <br />
                    <div className={styles["input-group"]}>
                        <label className={styles.label}>
                            <h2 className={styles["input-label"]}>
                                비밀번호 확인
                            </h2>
                        </label>
                        <div className={styles["input-field"]}>
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={pwdMatchCheckHandler}
                                placeholder="비밀번호 확인"
                                required
                                className={styles["input"]}
                            />
                            {confirmPassword.length > 0 && isPwdMatched && (
                                <div className={styles["input-field-valEmail"]}>
                                    비밀번호가 일치합니다 :)
                                </div>
                            )}
                            {confirmPassword.length > 0 && !isPwdMatched && (
                                <div
                                    className={styles["input-field-inValEmail"]}
                                >
                                    비밀번호가 일치하지 않습니다 :(
                                </div>
                            )}
                            {/* {isPwdMatched && (
                <FontAwesomeIcon
                  icon={faCheck}
                  className={styles["check-icon"]}
                />
              )} */}
                        </div>
                    </div>

                    <button
                        className={`${styles["submit-button"]} ${
                            validateEmail &&
                            validatePwd &&
                            isPwdMatched &&
                            styles["submit-button-able"]
                        }`}
                        type="submit"
                        onClick={onNext}
                        disabled={
                            !validateEmail || !validatePwd || !isPwdMatched
                        }
                    >
                        확인
                    </button>
                </form>
            )}
            {count === 2 && (
                <SignupAgreement
                    getAgreementValue={getAgreementValue}
                    onNext={onNext}
                />
            )}
            {count === 3 && (
                <NickName
                    getNickName={getNickName}
                    onNext={onNext}
                    setnickNameValue={setnickNameValue}
                />
            )}
            {count === 4 && <RegisterPhone allData={allData} />}
        </div>
    );
};

export default Signup1;
