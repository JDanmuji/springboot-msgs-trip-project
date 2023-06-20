import React from "react";

import styles from "./StickyBanner.module.css";

const StickyBanner = () => {
    return (
        <div className={styles["banner-area"]}>
            <div className={styles["sticky-banner"]}>
                <div className={styles["banner-plan"]}>여행일정1</div>
                <div className={styles["banner-plan"]}>여행일정2</div>
            </div>
        </div>
    );
};

export default StickyBanner;
