import React from "react";

import styles from "./LocReview.module.css";
import ReviewImg from "./ReviewImg";

const ReviewItem = (props) => {
  // tripImg의 요소길이 반환 → 이미지 개수에 따른 CSS 조정
  const length = props.reviewImg.length;

  return (
    <>
      <div className={styles["review-item-header"]}>
        <img
          src={props.userImg}
          className={styles["review-item-id-img"]}
          alt="userImg"
        />
        <img
          src="https://assets.triple.guide/images/img_badge_level3.png"
          className={styles["review-item-id-marker"]}
          alt="icon_badge_level3"
        />
        <div>
          <div className={styles["review-item-user-id"]}>{props.userName}</div>
          <div className={styles["review-item-user-info"]}>
            LEVEL{props.userLevel} / {props.userReviewCnt}개의 리뷰
          </div>
        </div>
      </div>
      <div className={styles["review-item-rating"]}>
        {/* star icon */}
        {/* _: 해당 변수가 사용되지 않는다는 의미를 전달하기 위해 표기 */}
        {Array.from({ length: props.stars }).map((_, index) => (
          <span key={index} className={styles["review-item-star"]}></span>
        ))}
        {/* 빈 별 */}
        {Array.from({ length: 5 - props.stars }).map((_, index) => (
          <span key={index} className={styles["review-item-star-empty"]}></span>
        ))}
      </div>
      <div className={styles["review-item-hr"]}></div>
      <div className={styles["review-item-content"]}>
        <a>
          <div className={styles["review-item-text"]}>
            <div className={styles["review-item-text"]}>
              {props.reviewText}

              <button className={styles["review-item-text-plus"]}>
                더보기
              </button>
            </div>
          </div>
        </a>
      </div>
      <div className={styles["review-item-img-wrap"]}>
        <div
          className={[
            styles["review-item-grid-wrap"],
            styles["review-grid"],
          ].join(" ")}
        >
          {/* image list */}
          <ReviewImg reviewImg={props.reviewImg} length={length} />
        </div>
      </div>
      <div className={styles["review-footer-wrap"]}>
        <div className={styles["review-footer"]}>
          {props.isLike ? (
            <div
              onClick={props.likeChangeHandler}
              className={[
                styles["review-footer-btn"],
                styles["review-like-clicked-icon"],
              ].join(" ")}
            >
              {" "}
              {props.reviewLikes}
              {props.updateLike}
            </div>
          ) : (
            <div
              onClick={props.likeChangeHandler}
              className={[
                styles["review-footer-btn"],
                styles["review-like-icon"],
              ].join(" ")}
            >
              {" "}
              {props.reviewLikes}
              {props.updateLike}
            </div>
          )}

          <div
            className={[
              styles["review-footer-btn"],
              styles["review-comment-icon"],
            ].join(" ")}
          >
            {props.reviewComment}
          </div>
          <div className={styles["review-footer-etc"]}>
            {props.writtenDate}
            <img
              src="https://assets.triple.guide/images/btn-review-more@4x.png"
              className={styles["review-more-icon"]}
              alt="icon_more_btn"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewItem;
