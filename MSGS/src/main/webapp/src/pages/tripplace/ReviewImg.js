import React from 'react';

import styles from "./LocReview.module.css";

const ReviewImg = () => {
    return (
        <>
            {/* ---- 나중에 back 에서 데이터 긁어 오기 ---- */}
            <div className={styles["review-medium-wrap"]} >
                <div className={styles["review-img-wrap"]} >
                    <img src="https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/507e9af0-cc04-48c6-aa83-9c64eed26967.jpeg"
                         className={styles["review-img"]} />
                </div>
            </div>
        </>
    );
};

export default ReviewImg;