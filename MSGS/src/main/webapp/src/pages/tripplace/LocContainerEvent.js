import React from 'react';

import stylesWrap from "./LocContainerHeader.module.css"
import styles from "./LocContainerEvent.module.css"
const LocContainerEvent = () => {
    return (
        <div>
            <div className={[stylesWrap["loc-wrap"], styles["container-event-wrap"]].join(" ")}>
                <div className={styles["event-btn-group"]}>
                    <button type="button"
                            className={[styles["event-btn-text"], styles["loc-event-btn"],
                                    styles["event-icon"], styles["event-save-icon"]].join(" ")}>저장하기
                    </button>
                    <button type="button"
                            className={[styles["event-btn-text"], styles["loc-event-btn"],
                                styles["event-icon"], styles["event-add-schedule-icon"]].join(" ")}>일정추가
                    </button>
                    <button type="button"
                            className={[styles["event-btn-text"], styles["loc-event-btn"],
                                styles["event-icon"], styles["event-review-icon"]].join(" ")}>리뷰쓰기
                    </button>
                    <button type="button"
                            className={[styles["event-btn-text"], styles["loc-event-btn"],
                                styles["event-icon"], styles["event-share-icon"]].join(" ")}>공유하기
                    </button>
                </div>
                <div className={styles["event-btn-hr"]}></div>
            </div>
        </div>
    );
};

export default LocContainerEvent;