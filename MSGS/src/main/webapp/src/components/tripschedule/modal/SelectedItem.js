import React from "react";

import styles from "./TripScheduleAddPlace.module.css";

const SelectedItem = (props) => {
    return (
        <div className={styles["selected-item"]}>
            <img src={props.placeImg} alt="stayImg{props.id}" />
            <span>{props.placeName}</span>
        </div>
    );
};

export default SelectedItem;
