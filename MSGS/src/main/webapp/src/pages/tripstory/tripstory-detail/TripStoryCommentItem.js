import React from "react";

import styles from "./TripStoryComment.module.css";

const TripStoryCommentItem = ({ item }) => {
    return (
        <div className={styles["comment-item"]} key={item.seq}>
            <img className={styles["comment-img"]} src={item.userImgPath} alt="userImgPath" />

            <div className={styles["comment-content"]}>
                <div className={styles["comment-info"]}>
                    <span className={styles["comment-user"]}>
                        {item.userId}
                    </span>
                    <span className={styles["comment-date"]}>
                        {item.regDate}
                    </span>
                </div>
                <p className={styles["comment-text"]}>{item.content}</p>
            </div>
        </div>
    );
};

export default TripStoryCommentItem;
