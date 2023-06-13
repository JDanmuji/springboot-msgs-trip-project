import React from 'react';

import styles from "./LocSubHeader.module.css"
const LocSubHeader = () => {
    return (
        <div className={styles["sub-title"]}>
            <div className={styles["sub-title-text"]}>대나무 숲과 한옥의 조화가 아름다운 조선 왕조 사당</div>
        </div>
    );
};

export default LocSubHeader;