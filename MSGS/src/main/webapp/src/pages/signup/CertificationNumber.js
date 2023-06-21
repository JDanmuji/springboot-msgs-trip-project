import React from "react";
import styles from "./registerPhone.module.css";
// import { useSelector } from "react-redux";
// import { RootState } from "../../modules";
import { useState } from "react";

<<<<<<< HEAD
const CertificationNumber = () => {
    // const [time, setTime] = useState(179);
    const [certifiNumber, setCertifiNumber] = useState("");
=======
const CertificationNumber = (props) => {
    // const [time, setTime] = useState(179);
    const [certifiNumber, setCertifiNumber] = useState("");
    const certifiNumberHandler = (e) => {
        setCertifiNumber(e.target.value);
        props.certificationHandler(setCertifiNumber);
    };

>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b
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
<<<<<<< HEAD
                    onChange={certifiNumber}
=======
                    onChange={certifiNumberHandler}
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b
                ></input>
                <span className={styles["time"]} /*onChange={!validTime}*/>
                    02:32
                </span>
            </div>
        </div>
    );
};

export default CertificationNumber;
