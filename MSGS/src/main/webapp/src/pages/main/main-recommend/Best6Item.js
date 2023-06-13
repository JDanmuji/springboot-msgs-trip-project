import React from "react";

import styles from "./MainRecommend.module.css";

const Best6Item = (props) => {
    return (
        <a className={styles["best-6-item"]} href="">
            <img />
            <span className={styles["rank-no"]}>
                <em>{props.rank}</em>
            </span>
        </a>
    );
};

export default Best6Item;
