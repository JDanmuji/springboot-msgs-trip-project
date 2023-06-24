import React, { useState } from "react";

import styles from "./MainRecommend.module.css";

const Best6Item = (props) => {
    const [titleShow, setTitleShow] = useState(false);
    const itemEnterHandler = () => {
        setTitleShow(true);
    };
    const itemLeaveHandler = () => {
        setTitleShow(false);
    };

    return (
        <div
            className={styles["best-6-item"]}
            onMouseEnter={itemEnterHandler}
            onMouseLeave={itemLeaveHandler}
        >
            <img src={props.imageUrl} />
            <span className={styles["rank-no"]}>
                <em>{props.rank}</em>
            </span>

            {titleShow && (
                <span className={styles["area-title"]}>
                    {props.areaTitle.slice(0, 2)}
                </span>
            )}
        </div>
    );
};

export default Best6Item;
