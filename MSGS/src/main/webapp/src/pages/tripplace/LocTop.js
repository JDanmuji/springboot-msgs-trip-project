import React, { useState } from "react";

import data from "./ReviewDummyData";
import styles from "./LocTop.module.css";
import StarShow from "../../components/common/StarShow";
// import MainThumbBootstrap from "./MainThumbBootstrap";

const LocTop = (props) => {
    const apiData = props.data;

    const thumbnailData = [
        {
            imgId: "I1",
            imgSrc: "https://images.pexels.com/photos/380707/pexels-photo-380707.jpeg",
            imgAlt: "kyunggijeon gate",
        },
        {
            imgId: "I2",
            imgSrc: "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/52bedffd-1e57-4b45-afd2-1eb02c72eee9.jpeg",
            imgAlt: "Korean Castle",
        },
        {
            imgId: "I3",
            imgSrc: "https://images.pexels.com/photos/3018977/pexels-photo-3018977.jpeg",
            imgAlt: "Korean Castle",
        },
    ];

    // 페이지 상단 별점 평균
    const reviewCnt = data.length;
    const sumStars = data.reduce((sum, item) => sum + item.stars, 0);
    const avgStars = Math.round(sumStars / data.length);

    // 썸네일 슬라이드
    const thumbnailCnt = thumbnailData.length;
    const [currentThumnail, setCurrentThumnail] = useState(0);
    const slideClickHandler = (isLeft) => {
        // 썸네일 왼쪽 버튼 클릭
        if (isLeft) {
            if (currentThumnail === 0) {
                setCurrentThumnail(thumbnailCnt - 1);
            } else {
                setCurrentThumnail(currentThumnail - 1);
            }
        }
        // 썸네일 오른쪽 버튼 클릭
        else {
            if (currentThumnail === thumbnailCnt - 1) {
                setCurrentThumnail(0);
            } else {
                setCurrentThumnail(currentThumnail + 1);
            }
        }
    };

    return (
        <div>
            <h1 className={styles["loc-name"]}>경기전</h1>

            <div className={styles["loc-rating"]}>
                <div className={styles["star-rating"]}>
                    <StarShow rating={avgStars} height={"1.6rem"} />
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
                    key={thumbnailData[currentThumnail].imgId}
                    src={thumbnailData[currentThumnail].imgSrc}
                    alt={thumbnailData[currentThumnail].imgAlt}
                    className={styles["thumbnail-img"]}
                ></img>

                <div className={styles["thumbnail-source"]}>출처 Triple</div>

                <img
                    className={`${styles["thumbnail-arrow-icon"]} ${styles["thumbnail-arrow-icon-left"]}`}
                    src={`${process.env.PUBLIC_URL}/images/arrow_left_icon.png`}
                    alt="left arrow icon"
                    onClick={() => slideClickHandler(true)}
                />
                <img
                    className={`${styles["thumbnail-arrow-icon"]} ${styles["thumbnail-arrow-icon-right"]}`}
                    src={`${process.env.PUBLIC_URL}/images/arrow_right_icon.png`}
                    alt="right arrow icon"
                    onClick={() => slideClickHandler(false)}
                />

                <div className={styles["thumbnail-cnt-label"]}>
                    <span>{currentThumnail + 1} / </span>
                    <span>{thumbnailCnt}</span>
                </div>
            </div>
        </div>
    );
};

export default LocTop;
