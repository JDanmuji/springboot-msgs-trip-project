import React from "react";

import styles from "./TripScheduleAddPlace.module.css";

const SelectedItem = (props) => {
    return (
        <div className={styles["selected-item"]}>
            <img src={props.img} alt="place thumbnail image" />
            <span className={styles["selected-item-name"]}>{props.name}</span>

            <span
                className={styles["remove-tag"]}
                onClick={() => props.removeHandler(props.isStay, props.id)}
            >
                X
            </span>
            {props.isStay && <span className={styles["stay-tag"]}>숙박</span>}
        </div>
    );
};

export default SelectedItem;
