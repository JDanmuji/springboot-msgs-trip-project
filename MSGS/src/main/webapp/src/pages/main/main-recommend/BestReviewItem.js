import React from "react";

import styles from "./MainRecommend.module.css";

const BestReviewItem = (props) => {
    return (
        <a className={styles["best-review-item"]} href="">
            <div className={styles["best-review-info"]}>
                <img className={styles["member-img"]} />
                <div className={styles["info-text"]}>
                    <h4>{props.reviewData.theme}</h4>
                    <div>
                        <span>{props.reviewData.memberName}님의 일정</span>
                        <span>{props.reviewData.date}</span>
                    </div>
                </div>
            </div>

            <img className={styles["thumb-img"]} />
            <p className={styles["preview-text"]}>{props.reviewData.preview}</p>
        </a>
    );
};

export default BestReviewItem;
