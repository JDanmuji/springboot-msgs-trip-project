import React from 'react';

import styles from "../SelectPersonInfo.module.css"

const Counter = ({counter, ageLabel, ageInfo, updateCounter}) => {
    return (
        <div className={styles["boarding-info-num"]}>
            <div
                className={styles["boarding-info-num-left"]}
                onClick={() => updateCounter(-1)}
            >
                -
            </div>
            <div className={styles["boarding-info-num-center"]}>
                <div className={styles["boarding-info-num-center-top"]}>
                    {ageLabel} {counter}명
                </div>
                <div className={styles["boarding-info-num-center-bottom"]}>
                    {ageInfo}
                </div>
            </div>
            <div
                className={styles["boarding-info-num-right"]}
                onClick={() => updateCounter(1)}
            >
                +
            </div>
        </div>
    );
};
export default Counter;
