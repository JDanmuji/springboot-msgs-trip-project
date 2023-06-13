import React from 'react';

import stylesWrap from "./LocContainerHeader.module.css"
import styles from "./LocContainerImg.module.css"
const LocContainerImg = () => {
    return (
        <div className={[stylesWrap["loc-wrap"], styles["top-img-wrap"]].join(' ')}>
            <div className={styles["top-img"]}>
                <div className={styles["img-viewport"]}>
                    {/*-------map-------*/}
                    <div className={styles["img-panel"]}>
                        <div className={styles["source-url"]}>출처
                            media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/193e2503-142a-4f00-997e-3e0c2e953a5f.jpeg
                        </div>
                        <img
                            src="https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/52bedffd-1e57-4b45-afd2-1eb02c72eee9.jpeg"
                            className={styles["img-section"]}></img>
                    </div>
                    {/* -------------- */}
                </div>
                <div className={styles["top-right-cnt"]}>
                    <div className={styles["page-label"]}>
                        <div className={styles["page-label-text"]}>1 / 179</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocContainerImg;