import React, { useState } from "react";

import styles from "./LocReview.module.css";
import ReviewImg from "./ReviewImg";
import StarShow from "../../components/common/StarShow";

const ReviewItem = (props) => {
    const item = props.item;

    const [isReviewOpen, setIsReviewOpen] = useState(false);

    // 텍스트 130자까지만 출력
    const comment =
        item.comment.length > 130
            ? item.comment.substring(0, 130) + "..."
            : item.comment;

    const reviewOpenClickHandler = () => {
        setIsReviewOpen((preIsReviewOpen) => !preIsReviewOpen);
    };

    // tripImg의 요소길이 반환 → 이미지 개수에 따른 CSS 조정
    // const length = item.reviewImg.length;

    return (
        <li className={styles["review-item"]}>
            <div className={styles["review-user"]}>
                <img
                    className={styles["review-item-id-img"]}
                    src={
                        item.userImgPath
                            ? item.userImgPath
                            : "https://media.triple.guide/triple-cms/c_limit,f_auto,h_2048,w_2048/b024db0c-0a3b-45f5-bc44-f47770937721.jpeg"
                    }
                    alt="userImg"
                />
                <div>
                    <span className={styles["review-user-name"]}>
                        {item.userName}
                    </span>
                    <span className={styles["review-user-info"]}>
                        {item.userReviewCnt}개의 리뷰
                    </span>
                </div>
            </div>

            <StarShow rating={item.rate} height={"1.4rem"} />

            {/* <span className={styles["review-trip-date"]}>
                {item.regDate} 작성
            </span> */}

            {/* 리뷰 텍스트 */}
            <div className={styles["review-item-text"]}>
                {isReviewOpen ? item.comment : comment}
                <button
                    className={styles["review-detail-btn"]}
                    onClick={reviewOpenClickHandler}
                >
                    {item.comment.length > 130 && (
                        <span>{isReviewOpen ? "접기" : "더보기"}</span>
                    )}
                </button>
            </div>

            {/* 리뷰 사진 */}
            {item.reviewImgList.length > 0 && (
                <ReviewImg reviewImgList={item.reviewImgList} />
            )}

            <div className={styles["review-bottom"]}>
                {/* <div className={styles["review-bottom-left"]}>
                    {item.isLike ? (
                        <div
                            onClick={item.likeChangeHandler}
                            className={[
                                styles["review-bottom-icon"],
                                styles["review-like-icon-clicked"],
                            ].join(" ")}
                        >
                            {item.reviewLikes}
                        </div>
                    ) : (
                        <div
                            onClick={item.likeChangeHandler}
                            className={[styles["review-bottom-icon"]].join(" ")}
                        >
                            {item.reviewLikes}
                        </div>
                    )}
                </div> */}
                <div className={styles["review-bottom-etc"]}>
                    {item.regDate}
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
