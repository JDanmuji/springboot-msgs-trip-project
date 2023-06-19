import React from "react";
import styles from "./registerPhone.module.css";

const CertificationNumber = () => {
    return (
        <div className={styles["certification-number"]}>
            <h3>인증번호</h3>
            <div className={styles["certification-number-inputBox"]}>
                <input type="text" name="certification-number"></input>
                <span className={styles["time"]}>02:13</span>
            </div>
        </div>
    );
};

export default CertificationNumber;
