import React from "react";

import styles from "./LocReview.module.css";
// 추천순 정렬로 가져오기
import reviewDataLike from "./ReviewDummyData";
// 최신순 정렬로 가져오기
import reviewDataDate from "./ReviewDummyData copy";

import ReviewItem from "./ReviewItem";
import { useState } from "react";

const LocReview = () => {
    // 추천순, 최신순 정렬
    const [isSortedByLike, setIsSortedByLike] = useState(true);
    const reviewData = isSortedByLike ? reviewDataLike : reviewDataDate;

    const sortClickHandler = (isLikeSort) => {
        isLikeSort ? setIsSortedByLike(true) : setIsSortedByLike(false);
    };

    // 리뷰 좋아요 버튼 클릭 시, 이벤트 발생
    const [isLike, setIsLike] = useState(false);

    const likeChangeHandler = () => {
        setIsLike((prevState) => !prevState);
    };

    // 리뷰 더보기 기능
    const reviewCnt = reviewData.length;
    const [leftReview, setLeftReview] = useState(reviewCnt - 2);

    const moreReviewClickHandler = () => {
        if (leftReview > 0) {
            setLeftReview(leftReview - 2);
        } else {
            setLeftReview(reviewCnt - 2);
        }
    };

    return (
        <div id="review" className={styles["review-container"]}>
            <div className={styles["review-container-header"]}>
                <img
                    src="https://assets.triple.guide/images/btn-com-write@2x.png"
                    className={styles["review-write-icon"]}
                    alt="icon_review_write"
                />
                <span className={styles["review-title"]}>
                    리뷰
                    <span className={styles["review-cnt"]}>{reviewCnt}</span>
                </span>
            </div>
            <div className={styles["review-filter-wrap"]}>
                <div className={styles["review-filter-left"]}>
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
                            isSortedByLike || styles["review-filter-selected"]
                        }`}
                        onClick={() => sortClickHandler(false)}
                    >
                        최신순
                    </button>
                </div>
                {/* <div className={styles["review-filter-right"]}>
                    <div className={styles["review-filter-check"]}>
                        <input
                            readOnly=""
                            type="checkbox"
                            className={styles["review-input-checkbox"]}
                        />
                        <div className={styles["review-checkbox-label"]}>
                            최근 여행
                        </div>
                    </div>
                    <div className={styles["review-marker"]}>
                        <img
                            src="https://assets.triple.guide/images/ico_tooltip_info_black@4x.png"
                            className={styles["review-checkbox-icon"]}
                            alt="icon_review_marker"
                        />
                    </div>
                </div> */}
            </div>

            {/* 리뷰 목록 */}
            <ul className={styles["review-container-list"]}>
                {reviewData.slice(0, reviewCnt - leftReview).map((item) => (
                    <ReviewItem
                        key={item.reviewId}
                        item={item}
                        isLike={isLike}
                        likeChangeHandler={likeChangeHandler}
                    />
                ))}
            </ul>

            <button
                type="button"
                className={styles["review-more-btn"]}
                onClick={moreReviewClickHandler}
            >
                {leftReview > 0 ? (
                    <span>{leftReview}개의 리뷰 더보기</span>
                ) : (
                    <span>리뷰 접기</span>
                )}
            </button>
        </div>
    );
};

export default LocReview;
