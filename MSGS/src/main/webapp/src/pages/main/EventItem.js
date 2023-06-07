import React from "react";

import styles from "./Event.module.css";

const EventItem = (props) => {
    return (
        <div className={styles["event-item"]}>
            <div>
                <p>{props.text1}</p>
                <p>{props.text2}</p>
            </div>
            <div className={styles["event-img-div"]}>
                <img />
            </div>
        </div>
    );
};

export default EventItem;
