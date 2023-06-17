import React from "react";

import data from "./ReviewDummyData";
import styles from "./LocTop.module.css";

const LocTop = () => {
    // 평점 계산
    const reviewCnt = data.length;
    const sumStars = data.reduce((sum, item) => sum + item.stars, 0);
    const avgStars = Math.round(sumStars / data.length);

    return (
        <div>
            <h1 className={styles["loc-name"]}>경기전</h1>

            {/* ----- ratings ----- */}
            <div className={styles["loc-rating"]}>
                <div className={styles["star-rating"]}>
                    {/* 색칠된 별 */}
                    {Array.from({ length: avgStars }).map((_, index) => (
                        <span
                            key={index}
                            className={styles["star-like-icon"]}
                        ></span>
                    ))}
                    {/* 빈 별 */}
                    {Array.from({ length: 5 - avgStars }).map((_, index) => (
                        <span
                            key={index}
                            className={`${styles["star-like-icon"]} ${styles["star-empty-icon"]}`}
                        ></span>
                    ))}
                    <p>{reviewCnt}</p>
                </div>

                <div className={styles["like-cnt"]}>
                    <div
                        className={`${styles["star-like-icon"]} ${styles["like-icon"]}`}
                    ></div>
                    <span>4,646</span>
                </div>
            </div>

            {/*---- address -----*/}
            <div className={styles["loc-addr"]}>
                <img
                    src="https://assets.triple.guide/images/ico-end-location@3x.png"
                    alt="location mark icon"
                />
                <span>전주 한옥 마을 주변</span>
            </div>

            {/* main thumbnail */}
            <div className={styles["thumbnail-slide"]}>
                <img
                    src="https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/52bedffd-1e57-4b45-afd2-1eb02c72eee9.jpeg"
                    alt="location main thumbnail"
                    className={styles["thumbnail-img"]}
                ></img>
                <div className={styles["thumbnail-source"]}>
                    출처
                    media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/193e2503-142a-4f00-997e-3e0c2e953a5f.jpeg
                </div>
            </div>
            {/* <div className={styles["thumbnail-cnt"]}>
                <div className={styles["page-label"]}>
                    <div className={styles["page-label-text"]}>1 / 179</div>
                </div>
            </div> */}
        </div>
    );
};

export default LocTop;
