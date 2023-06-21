import React, { useState } from "react";
import styles from "./registerPhone.module.css";

const RegisterPhoneButton = (props) => {
    const [certification, setCertification] = useState("");
    console.log(props.data);

    const isCertificationValid = certification.trim().length !== 0;
    const certificationHandler = (e) => {
        setCertification(e.target.value);
    };
    // const signUphandle= async()=>{
    //     const data = props.data

    // } ;
    // try {
    //     const response = await fetch("/user/signup", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(data),
    //     });

    //     if (response.ok) {
    //       console.log("회원가입 성공");
    //     } else {
    //       console.log("회원가입 실패");
    //     }
    //   } catch (error) {
    //     // 네트워크 오류 등 예외 처리
    //     console.log("오류 발생", error);
    //   }
    // };

    return (
        <div>
            <button
                className={styles["certification-button"]}
                disabled={!isCertificationValid}
                onClick={() => {
                    certificationHandler();
                    // signUphandle();
                }}
            >
                인증완료
            </button>

            <ul className={styles["footer-text"]}>
                <li>3분 이내로 인증번호(6자리)를 입력해주세요.</li>
                <li>입력시간 초과 시 "재전송" 버튼을 눌러주세요.</li>
            </ul>
            <div className={styles["next-button"]}>
                <button /*onClick={signUphandle}*/>다음에 하기</button>
            </div>
        </div>
    );
};

export default RegisterPhoneButton;
