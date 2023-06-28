import React from "react";
import { Link } from "react-router-dom";

import styles from "./MyReview.module.css";
import { useState } from "react";

const MyReview = (props) => {
    // 추천순, 최신순 선택
    const [isSortedByLike, setIsSortedByLike] = useState(true);
    // 선택한 정렬에 따라 데이터 전환
    const data = isSortedByLike ? props.data : props.data;

    const sortClickHandler = (isLikeSort) => {
        isLikeSort ? setIsSortedByLike(true) : setIsSortedByLike(false);
    };

    return (
        <>
            <div className={styles["review-filter"]}>
                <button
                    className={`${styles["review-filter-btn"]} ${
                        isSortedByLike && styles["review-filter-selected"]
                    }`}
                    onClick={() => sortClickHandler(true)}
                >
                    추천순
                </button>
                <button
                    className={`${styles["review-filter-btn"]} ${
                        !isSortedByLike && styles["review-filter-selected"]
                    }`}
                    onClick={() => sortClickHandler(false)}
                >
                    최신순
                </button>
            </div>

            <div className={styles["review-item-wrap"]}>
                {data.map((item, index) => (
                    <div className={styles["review-item"]} key={index}>
                        {/* 장소 이름 */}
                        <div className={styles["city-wrap"]}>
                            <span
                                className={styles["list-content-fullcityname"]}
                            >
                                강릉중앙시장
                            </span>
                            <span className={styles["list-content-cityname"]}>
                                강릉 | 명소
                            </span>
                        </div>

                        {/* 기타 정보 */}
                        <ul className={styles["schedule-info-list"]}>
                            <li className={styles["review-info-item"]}>
                                <img
                                    className={styles["quote-icon"]}
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/images/icon_quote.png"
                                    }
                                />
                                <span className={styles["review-preview"]}>
                                    가족들과 함께 방문했으나 비싸기만 하고 맛이
                                    없음. 다음엔 안 ...
                                </span>
                            </li>

                            <li className={styles["review-info-item"]}>
                                <span className={styles["schedule-info-title"]}>
                                    방문일자
                                </span>
                                <span className={styles["schedule-info-value"]}>
                                    2023.07
                                </span>
                            </li>

                            <li className={styles["review-info-item"]}>
                                <span className={styles["schedule-info-title"]}>
                                    작성일자
                                </span>
                                <span className={styles["schedule-info-value"]}>
                                    2023.07.06
                                </span>
                            </li>

                            <li className={styles["review-info-item"]}>
                                <span className={styles["schedule-info-title"]}>
                                    좋아요
                                </span>
                                <span className={styles["schedule-info-value"]}>
                                    0
                                </span>
                            </li>
                        </ul>

                        <div className={styles["schedule-info-button"]}>
                            <Link to="">
                                <button>장소 보러 가기</button>
                            </Link>
                            <Link to="">
                                <button>리뷰 보러 가기</button>
                            </Link>
                            <button onClick="">리뷰 삭제</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default MyReview;
