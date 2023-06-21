import React from "react";

import styles from "./MainTop.module.css";

const EventItem = (props) => {
    return (
        <a className={styles["event-item"]} href="">
            <div>
                <p>{props.title}</p>
            </div>
            <div className={styles["event-img-div"]}>
                <img src={props.firstimage} />
            </div>
        </a>
    );
};

export default EventItem;
