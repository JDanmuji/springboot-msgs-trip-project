import React, { useState } from "react";
import styles from "./registerPhone.module.css";
import CertificationNumber from "./CertificationNumber";

const RegisterPhone = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [certification, setCertification] = useState("");
    const isPhoneNumberValid = phoneNumber.trim().length !== 0;
    const isCertificationValid = certification.trim().length !== 0;

    const certificationHandler = (e) => {
        setCertification();
    };

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
                            <option value="Korea">+82</option>
                            <option value="US">+1</option>
                            <option value="Japan">+81</option>
                            <option value="Vet">+84</option>
                            <option value="Swit">+41</option>
                            <option value="Austria">+61</option>
                            <option value="France">+33</option>
                            <option value="Spain">+34</option>
                        </select>
                    </div>
                    <div className={styles["phone-inputBox"]}>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={phoneNumber}
                            maxLength="11"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        ></input>
                        <button
                            className={styles["send-button"]}
                            disabled={!isPhoneNumberValid}
                        >
                            전송
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
