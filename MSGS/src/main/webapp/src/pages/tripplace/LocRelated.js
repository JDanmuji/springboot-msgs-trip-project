import React from 'react';

import stylesWrap from "./LocContainerHeader.module.css"
import styles from "./LocRelated.module.css"
import LocRelatedItem from "./LocRelatedItem";
import ReviewItem from "./ReviewItem";
const LocRelated = () => {
    return (
        <div className={[stylesWrap["loc-wrap"], styles["related-wrap"]].join(" ")}>
            <div className={styles["related-head"]}>
                <div className={styles["related-title"]}>이곳과 함께 본 장소</div>
            </div>
            <ul className={styles["related-list"]}>

                {
                    Array.from({length: 5}).map((item, index) => (
                        <LocRelatedItem />
                ))}
            </ul>
        </div>
    );
};

export default LocRelated;