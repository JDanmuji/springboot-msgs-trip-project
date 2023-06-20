import React, { useState } from "react";
import styles from "./registerPhone.module.css";
import CertificationNumber from "./CertificationNumber";
import { useEffect } from "react";

const RegisterPhone = () => {
    const [isResent, setIsResent] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [certification, setCertification] = useState("");

    // const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
    const isPhoneNumberValid = phoneNumber.trim().length !== 0;
    const isCertificationValid = certification.trim().length !== 0;

    const handleButtonClick = () => {
        const phoneValue = phoneNumber;
        console.log(phoneValue.length);

        if (phoneValue.length !== 13) alert("휴대폰 번호를 확인하세요");
        else {
            setIsResent(true);
        }
    };
    const certificationHandler = (e) => {
        setCertification();
    };

    const phoneHandler = (e) => {
        const regPhone = /^[0-9\b -]{0,13}$/;
        console.log(regPhone.test(e.target.value));
        console.log(e.target.value);
        if (regPhone.test(e.target.value)) {
            setPhoneNumber(e.target.value);
        }
    };
    useEffect(() => {
        if (phoneNumber.length === 11) {
            setPhoneNumber(
                phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")
            );
        }
        if (phoneNumber.length === 13) {
            setPhoneNumber(
                phoneNumber
                    .replace(/-/g, "")
                    .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
            );
        }
    }, [phoneNumber]);

    return (
        <div className={styles["register-width-wrapper"]}>
            <h1 className={styles["register-phone-subject"]}>
                휴대폰 번호 등록하기
            </h1>
            <h2>
                마실가실에서는 고객님의 안전한 거래 및 회원 정보를 위해 본인
                인증(최초 1회)를 하고 있습니다.
            </h2>
            <div className={styles["code-phone-input-group"]}>
                <div className={styles["code-phone-text"]}>
                    <span>국가 코드</span>
                    <span>휴대폰 번호</span>
                </div>
                <div className={styles["code-phone-inputBox"]}>
                    <div className={styles["code-inputBox"]}>
                        <select name="code">
                            <option value="82">+82 (대한민국)</option>
                            <option value="1">+1 (미국)</option>
                            <option value="86">+86 (중국)</option>
                            <option value="81">+81 (일본)</option>
                        </select>
                    </div>
                    <div className={styles["phone-inputBox"]}>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={phoneNumber}
                            maxLength="11"
                            onChange={phoneHandler}
                        ></input>
                        <button
                            className={styles["send-button"]}
                            onClick={handleButtonClick}
                            disabled={!isPhoneNumberValid}
                        >
                            {isResent ? "재전송" : "전송"}
                        </button>
                    </div>
                </div>
                <div className={styles["non-sms"]}>
                    <p>
                        문자가 전송되지 않는 경우<span>?</span>
                    </p>
                </div>
            </div>
            <CertificationNumber />
            <div>
                <button
                    className={styles["certification-button"]}
                    disabled={!isCertificationValid}
                    onClick={certificationHandler}
                >
                    인증완료
                </button>
            </div>
            <ul className={styles["footer-text"]}>
                <li>3분 이내로 인증번호(6자리)를 입력해주세요.</li>
                <li>입력시간 초과 시 "재전송" 버튼을 눌러주세요.</li>
            </ul>
            <div className={styles["next-button"]}>
                <p>다음에 하기</p>
            </div>
        </div>
    );
};

export default RegisterPhone;
