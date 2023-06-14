import React from 'react';

import styles from "./LocContainerHeader.module.css"
const LocContainerHeader = () => {
    return (
        <div className={[styles["loc-wrap"], styles["loc-header"]].join(' ')}>
            <h1 className={styles["header-title"]}>경기전</h1>
            {/* -----star----- */}
            <div className={styles["loc-rating"]}>
                <div className={styles["star-rating"]}>
                    {/* -----map----- */}
                    <span className={styles["star-icon"]}></span>
                    <span className={styles["star-icon"]}></span>
                    <span className={styles["star-icon"]}></span>
                    <span className={styles["star-icon"]}></span>
                    <span className={styles["star-icon"]}></span>
                    {/* ---------- */}
                    &nbsp;138
                </div>

                {/*------ icon ------*/}
                <div className={styles["like-cnt"]}>
                    <div className={styles["like-icon"]}></div>
                    &nbsp;4,646
                </div>
            </div>

            {/*----location-----*/}
            <div className={styles["loc-addr"]}>
                <div className={styles["loc-addr-text"]}>전주 한옥 마을 주변</div>
            </div>
        </div>
    );
};

export default LocContainerHeader;