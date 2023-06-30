import React from "react";
import { useState } from "react";
import styles from "../signup/Signup.module.css";
import { useEffect } from "react";

import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const LoginByEail = ({ loginHandler }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState(""); // 이메일
    const [password, setPassword] = useState(""); // 비밀번호
    const [enteredEmail, setEnteredEmail] = useState(""); // 유효성 검사된 이메일

    // let userType;
    // console.log("타입 담겼다니?", userType);
    // console.log("비밀번호 담겼다니?", password);

    //----------------------------------------------
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

    // ---------- 이메일 중복 검사(입력 완료 후 1초  뒤 실행) ----------
    const [timer, setTimer] = useState(null);
    const [dplChkEmail, setDplChkEmail] = useState(true);

    useEffect(() => {
        clearTimeout(timer); // 이전 타이머를 제거

        if (validateEmail) {
            const newTimer = setTimeout(dplChkEmailHandler, 500);
            setTimer(newTimer);
        }
    }, [validateEmail, enteredEmail]);

    const dplChkEmailHandler = async () => {
        console.log(enteredEmail);
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

                console.log("무엇일까요?????", text);

                if (text) {
                    try {
                        const data = JSON.parse(text);
                        const userType = data.userId.charAt(0);
                        console.log("타입이 뭐여", userType);
                        if (userType === "N") {
                            alert(
                                "네이버로 가입된 이메일입니다. 네이버로 로그인하시기 바랍니다."
                            );
                            navigate("/login");
                        } else if (userType === "K") {
                            alert(
                                "카카오로 가입된 이메일입니다. 카카오로 로그인하시기 바랍니다."
                            );
                            navigate("/login");
                        } else if (userType === "G") {
                            alert(
                                "구글로 가입된 이메일입니다. 구글로 로그인하시기 바랍니다."
                            );
                            navigate("/login");
                        }

                        setDplChkEmail(false);
                    } catch (error) {
                        console.log("JSON.parse error: ", error);
                    } // JSON.parse try-catch
                } else {
                    console.log("회원가입필요");
                    setDplChkEmail(true);
                    alert(
                        "등록된 정보가 없습니다. 회원가입 화면으로 이동합니다."
                    );
                    navigate("/signup1");
                } // text
            } else {
                console.log("response!=200");
            } // response isn't ok
        } catch (err) {
            console.log("서버 통신 에러 발생: " + err);
        }
    };

    // ---------- 비밀번호 형식 체크 ----------
    const [validatePwd, setValidatePwd] = useState(false);

    const pwdEventHandler = (e) => {
        console.log("비밀번호는:", e.target.value);
        setPassword(e.target.value);
        console.log("비번아 어디로 갔니?", e.target.value);
        const reg2 = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
        const isValidPwd = reg2.test(e.target.value);

        setValidatePwd(isValidPwd);
        console.log(isValidPwd);
    };

    //--------------제출-------------------------------

    const handleSubmit = async (e) => {
        e.preventDefault();

        alert("회원님 환영합니다.");

        try {
            const response = await fetch(`/users/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: email, password: password }),
            });

            const data = await response.json();
            const token = data.accessToken;
            console.log("data 확인: ", data);
            console.log("토큰 확인: ", token);
            Cookies.set("token", token, {
                expires: 1,
            });

            const tokenValue = Cookies.get("token");

            // Check if the 'token' cookie exists and log its value
            if (tokenValue) {
                console.log("Token cookie value:", tokenValue);
            } else {
                console.log("Token cookie does not exist or has no value");
            }

            if (!response.data) {
                loginHandler(tokenValue);
                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles["width-wrapper"]}>
            <form
                className={styles["width-wrapper-form"]}
                onSubmit={handleSubmit}
            >
                <h1 className={styles["signup-heading"]}>
                    이메일로 로그인하기
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
                        {validateEmail ? (
                            <div className={styles["input-field-valEmail"]}>
                                <span>올바른 이메일 형식입니다 :)</span>)
                            </div>
                        ) : (
                            <div className={styles["input-field-inValEmail"]}>
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
                            <div className={styles["input-field-inValEmail"]}>
                                숫자+영문자+특수문자 조합으로 8자리 이상
                                입력해주세요 :(
                            </div>
                        )}
                    </div>
                </div>

                <button
                    className={`${styles["submit-button"]} ${
                        validateEmail &&
                        validatePwd &&
                        styles["submit-button-able"]
                    }`}
                    type="submit"
                    disabled={!validateEmail && !validatePwd}
                >
                    확인
                </button>
            </form>
        </div>
    );
};

export default LoginByEail;
