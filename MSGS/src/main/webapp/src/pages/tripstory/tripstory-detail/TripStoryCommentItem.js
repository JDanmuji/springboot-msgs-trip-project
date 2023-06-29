import React from "react";

import styles from "./TripStoryComment.module.css";

const TripStoryCommentItem = ({ item }) => {
    return (
        <div className={styles["comment-item"]} key={item.seq}>
            <img
                className={styles["comment-img"]}
                src={
                    item.userImgPath
                        ? item.userImgPath
                        : "https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/b024db0c-0a3b-45f5-bc44-f47770937721.jpeg"
                }
                alt="user profile"
            />

            <div className={styles["comment-content"]}>
                <div className={styles["comment-info"]}>
                    <span className={styles["comment-user"]}>
                        {item.userName}
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
