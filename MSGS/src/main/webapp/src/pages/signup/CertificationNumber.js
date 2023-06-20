import React from "react";
import styles from "./registerPhone.module.css";
// import { useSelector } from "react-redux";
// import { RootState } from "../../modules";
import { useState } from "react";

const CertificationNumber = () => {
    // const [time, setTime] = useState(179);
    const [certifiNumber, setCertifiNumber] = useState("");
    // const [validTime, setValidTime] = useState(false);
    // const { verification } = useSelector((state: RootState) => state.auth);
    // const { expireAt } = verification.OTP;

    // useEffect(() => {
    //     if (time > 0) {
    //         const Counter = setInterval(() => {
    //             const gap = Math.floor(
    //                 (new Date(expireAt).getTime() - new Date().getTime()) / 1000
    //             );
    //             setTime(gap);
    //         }, 1000);
    //         return () => clearInterval(Counter);
    //     }
    // }, [expireAt, time]);

    // const timeFormat = (time: Number) => {
    //     const m = Math.floor(time / 60).toString();
    //     let s = (time % 60).toString();
    //     if (s.length === 1) s = `0${s}`;
    //     return `${m}:${s}`;
    // };

    return (
        <div className={styles["certification-number"]}>
            <h3>인증번호</h3>
            <div className={styles["certification-number-inputBox"]}>
                <input
                    type="text"
                    name="certification-number"
                    onChange={certifiNumber}
                ></input>
                <span className={styles["time"]} /*onChange={!validTime}*/>
                    02:32
                </span>
            </div>
        </div>
    );
};

export default CertificationNumber;
