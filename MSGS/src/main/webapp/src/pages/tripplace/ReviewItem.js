import React from "react";

import styles from "./LocReview.module.css";
import ReviewImg from "./ReviewImg";

const ReviewItem = (props) => {
    // tripImg의 요소길이 반환 → 이미지 개수에 따른 CSS 조정
    const length = props.reviewImg.length;

    return (
        <div className={styles["review-item"]}>
            <div className={styles["review-user"]}>
                <img
                    className={styles["review-item-id-img"]}
                    src={props.userImg}
                    alt="userImg"
                />
                <img
                    className={styles["review-item-id-marker"]}
                    src="https://assets.triple.guide/images/img_badge_level3.png"
                    alt="icon_badge_level3"
                />
                <div>
                    <span className={styles["review-user-name"]}>
                        {props.userName}
                    </span>
                    <span className={styles["review-user-info"]}>
                        LEVEL{props.userLevel} / {props.userReviewCnt}개의 리뷰
                    </span>
                </div>
            </div>

            {/* 별점 */}
            <div className={styles["review-item-rating"]}>
                {/* star icon */}
                {/* _: 해당 변수가 사용되지 않는다는 의미를 전달하기 위해 표기 */}
                {Array.from({ length: props.stars }).map((_, index) => (
                    <span
                        key={index}
                        className={styles["review-item-star"]}
                    ></span>
                ))}
                {/* 빈 별 */}
                {Array.from({ length: 5 - props.stars }).map((_, index) => (
                    <span
                        key={index}
                        className={styles["review-item-star-empty"]}
                    ></span>
                ))}
            </div>

            <span className={styles["review-trip-date"]}>
                {props.tripDate} 여행
            </span>

            {/* 리뷰 텍스트 */}
            {/* <div className={styles["review-item-hr"]}></div> */}
            <div className={styles["review-item-text"]}>
                {props.reviewText}...
                <button className={styles["review-item-text-plus"]}>
                    더보기
                </button>
            </div>

            {/* 리뷰 사진 */}
            {/* <div
                    className={[
                        styles["review-item-grid-wrap"],
                        styles["review-grid"],
                    ].join(" ")}
                > */}
            <ReviewImg reviewImg={props.reviewImg} length={length} />

            <div className={styles["review-bottom"]}>
                <div className={styles["review-bottom-left"]}>
                    {props.isLike ? (
                        <div
                            onClick={props.likeChangeHandler}
                            className={[
                                styles["review-bottom-icon"],
                                styles["review-like-icon-clicked"],
                            ].join(" ")}
                        >
                            {props.reviewLikes}
                            {props.updateLike}
                        </div>
                    ) : (
                        <div
                            onClick={props.likeChangeHandler}
                            className={[styles["review-bottom-icon"]].join(" ")}
                        >
                            {props.reviewLikes}
                            {props.updateLike}
                        </div>
                    )}

                    <div
                        className={[
                            styles["review-bottom-icon"],
                            styles["review-comment-icon"],
                        ].join(" ")}
                    >
                        {props.reviewComment}
                    </div>
                </div>
                <div className={styles["review-bottom-etc"]}>
                    {props.writtenDate}
                    <img
                        src="https://assets.triple.guide/images/btn-review-more@4x.png"
                        className={styles["review-more-icon"]}
                        alt="icon_more_btn"
                    />
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;
