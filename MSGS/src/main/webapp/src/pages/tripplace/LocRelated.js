import React from 'react';

import stylesWrap from "./LocContainerHeader.module.css"
import styles from "./LocRelated.module.css"
const LocRelated = () => {
    return (
        <div className={[stylesWrap["loc-wrap"], styles["related-wrap"]].join(" ")}>
            <div className={styles["related-head"]}>
                <div className={styles["related-title"]}>이곳과 함께 본 장소</div>
            </div>
            <ul className={styles["related-list"]}>
                <div className={styles["related-item-wrap"]}>
                    <li className={styles["related-item"]}>
                        <div className={styles["related-img-wrap"]}>
                            <img src="https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/76edd887-d410-493b-8128-13d504ca5b0c.jpeg"
                                 className={styles["related-img"]} />
                        </div>
                        <div className={styles["related-img-title"]}>전동 성당</div>
                        <div className={styles["related-img-conf"]}>관광명소</div>
                        <div className={styles["related-img-addr"]}>전북 전주시</div>
                        <div className={styles["heart-icon-wrap"]}>
                            <button className={styles["heart-icon-btn"]}>
                                <img src="https://assets.triple.guide/images/btn-content-scrap-overlay-off@3x.png"
                                     alt="OVERLAY_HEART_OFF"
                                     className={styles["heart-icon"]}/>
                            </button>
                        </div>
                    </li>
                </div>
            </ul>
        </div>
    );
};

export default LocRelated;