import React from "react";

import styles from "./LocReview.module.css";
import ReviewImg from "./ReviewImg";

const ReviewItem = (props) => {
    const item = props.item;

    // 텍스트 130자까지만 출력
    const reviewText =
        item.reviewText.length > 130
            ? item.reviewText.substring(0, 130) + "..."
            : item.reviewText;

    // tripImg의 요소길이 반환 → 이미지 개수에 따른 CSS 조정
    const length = item.reviewImg.length;

    return (
        <li className={styles["review-item"]}>
            <div className={styles["review-user"]}>
                <img
                    className={styles["review-item-id-img"]}
                    src={item.userImg}
                    alt="userImg"
                />
                <img
                    className={styles["review-item-id-marker"]}
                    src="https://assets.triple.guide/images/img_badge_level3.png"
                    alt="icon_badge_level3"
                />
                <div>
                    <span className={styles["review-user-name"]}>
                        {item.userName}
                    </span>
                    <span className={styles["review-user-info"]}>
                        LEVEL{item.userLevel} / {item.userReviewCnt}개의 리뷰
                    </span>
                </div>
            </div>

            {/* 별점 */}
            <div className={styles["review-item-rating"]}>
                {/* star icon */}
                {/* _: 해당 변수가 사용되지 않는다는 의미를 전달하기 위해 표기 */}
                {Array.from({ length: item.stars }).map((_, index) => (
                    <span
                        key={index}
                        className={styles["review-item-star"]}
                    ></span>
                ))}
                {/* 빈 별 */}
                {Array.from({ length: 5 - item.stars }).map((_, index) => (
                    <span
                        key={index}
                        className={styles["review-item-star-empty"]}
                    ></span>
                ))}
            </div>

            <span className={styles["review-trip-date"]}>
                {item.tripDate} 여행
            </span>

            {/* 리뷰 텍스트 */}
            {/* <div className={styles["review-item-hr"]}></div> */}
            <div className={styles["review-item-text"]}>
                {reviewText}
                <button className={styles["review-detail-btn"]}>
                    <span>자세히보기</span>
                    <img
                        className={styles["new-window-icon"]}
                        src={`${process.env.PUBLIC_URL}/images/new_window_icon.png`}
                    />
                </button>
            </div>

            {/* 리뷰 사진 */}
            <ReviewImg reviewImg={item.reviewImg} length={length} />

            <div className={styles["review-bottom"]}>
                <div className={styles["review-bottom-left"]}>
                    {item.isLike ? (
                        <div
                            onClick={item.likeChangeHandler}
                            className={[
                                styles["review-bottom-icon"],
                                styles["review-like-icon-clicked"],
                            ].join(" ")}
                        >
                            {item.reviewLikes}
                            {item.updateLike}
                        </div>
                    ) : (
                        <div
                            onClick={item.likeChangeHandler}
                            className={[styles["review-bottom-icon"]].join(" ")}
                        >
                            {item.reviewLikes}
                            {item.updateLike}
                        </div>
                    )}

                    <div
                        className={[
                            styles["review-bottom-icon"],
                            styles["review-comment-icon"],
                        ].join(" ")}
                    >
                        {item.reviewComment}
                    </div>
                </div>
                <div className={styles["review-bottom-etc"]}>
                    {item.writtenDate}
                    <img
                        src="https://assets.triple.guide/images/btn-review-more@4x.png"
                        className={styles["review-more-icon"]}
                        alt="icon_more_btn"
                    />
                </div>
            </div>
        </li>
    );
};

export default ReviewItem;
