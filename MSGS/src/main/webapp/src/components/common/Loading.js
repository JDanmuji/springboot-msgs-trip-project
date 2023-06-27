import React from "react";

import styles from "./Loading.module.css";
import { PulseLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className={styles["loading-msg-wrap"]}>
            <PulseLoader color="#fc7300" />
            <div className={styles["loading-msg"]}>로딩중</div>
        </div>
    );
};

export default Loading;
