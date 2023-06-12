import React from "react";

import styles from "./RcmdTripItem.module.css";

const RcmdTripItem = (props) => {
    return (
        <div className={styles["RcmdTripItem-item"]}>
            <div className={styles["RcmdTripItem-img-div"]}>
                <img className={styles["RcmdTripItem-img"]} src={props.image} alt="RcmdTripImage" />
            </div>
            <div>
                <p>{props.text1}</p>
                <p className={styles["RcmdTripItem-sub-text"]}>{props.text2}</p>
            </div>
        </div>
    );
};

export default RcmdTripItem;
