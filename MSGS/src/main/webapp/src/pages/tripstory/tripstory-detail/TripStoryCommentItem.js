import React from "react";

import styles from "./TripStoryComment.module.css";

const TripStoryCommentItem = ({ item }) => {
    const imgErrorHandler = (event) => {
        event.target.src = `${process.env.PUBLIC_URL}/images/common/msgs_logo_margin.png`;
    };

    return (
        <div className={styles["comment-item"]} key={item.seq}>
            {item.userImgPath === "noImg" ? (
                <div className={styles["comment-img"]}></div>
            ) : (
                <img
                    className={styles["comment-img"]}
                    src={item.userImgPath}
                    alt="user profile"
                    onError={imgErrorHandler}
                />
            )}

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
