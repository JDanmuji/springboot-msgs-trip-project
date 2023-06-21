import React from "react";

import styles from "./LocContainerEvent.module.css";
const LocContainerEvent = () => {
    return (
        <div className={styles["event-btn-group"]}>
            <button
                type="button"
                className={[
                    styles["event-btn"],
                    styles["event-save-icon"],
                ].join(" ")}
            >
                저장하기
            </button>
            <button
                type="button"
                className={[
                    styles["event-btn"],
                    styles["event-add-schedule-icon"],
                ].join(" ")}
            >
                일정추가
            </button>
            <a
                className={[
                    styles["event-btn"],
                    styles["event-review-icon"],
                ].join(" ")}
                href="#review"
            >
                리뷰쓰기
            </a>
            <button
                type="button"
                className={[
                    styles["event-btn"],
                    styles["event-share-icon"],
                ].join(" ")}
            >
                공유하기
            </button>
        </div>
    );
};

export default LocContainerEvent;
