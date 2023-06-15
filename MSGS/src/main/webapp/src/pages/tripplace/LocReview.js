import React from "react";

import stylesWrap from "./LocContainerHeader.module.css";
import stylesHr from "./LocMap.module.css";
import styles from "./LocReview.module.css";
import data from "./ReviewDummyData";

import ReviewItem from "./ReviewItem";

const LocReview = () => {
  return (
    <>
      <div
        className={[
          stylesWrap["loc-wrap"],
          styles["review-container-wrap"],
        ].join(" ")}
      >
        <div
          className={[stylesWrap["loc-wrap"], styles["review-container"]].join(
            " "
          )}
        >
          <div className={styles["review-container-header"]}>
            <img
              src="https://assets.triple.guide/images/btn-com-write@2x.png"
              className={styles["review-write-icon"]}
            />
            <div className={styles["review-title"]}>리뷰</div>
            <div className={styles["review-cnt"]}>138</div>
          </div>
          <div className={styles["review-filter-wrap"]}>
            <div className={styles["review-filter-left"]}>
              <div
                aria-selected={true}
                className={styles["review-filter-select"]}
              >
                <span>추천순</span>
              </div>
              <div className={styles["review-filter-deselect"]}>
                <span>최신순</span>
              </div>
            </div>
            <div className={styles["review-filter-right"]}>
              <div className={styles["review-filter-check"]}>
                <input
                  readOnly=""
                  type="checkbox"
                  className={styles["review-input-checkbox"]}
                />
                <div className={styles["review-checkbox-label"]}>최근 여행</div>
              </div>
              <div className={styles["review-marker"]}>
                <img
                  src="https://assets.triple.guide/images/ico_tooltip_info_black@4x.png"
                  className={styles["review-checkbox-icon"]}
                />
              </div>
            </div>
          </div>

          {/* 리뷰 목록 */}
          <ul className={styles["review-container-list"]}>
            {data.map((item) => (
              <li
                className={styles["review-container-item"]}
                key={item.reviewId}
              >
                <ReviewItem
                  userImg={item.userImg}
                  userName={item.userName}
                  userLevel={item.userLevel}
                  userReviewCnt={item.userReviewCnt}
                  stars={item.stars}
                  reviewText={item.reviewText}
                  reviewImg={item.reviewImg}
                  reviewLikes={item.reviewLikes}
                  reviewComment={item.reviewComment}
                  writtenDate={item.writtenDate}
                />
              </li>
            ))}
          </ul>

          <div className={styles["review-more-btn-wrap"]}>
            <button type="button" className={styles["review-more-btn"]}>
              134개 리뷰 더보기
            </button>
          </div>
          <div className={styles["review-mileage-btn-wrap"]}>
            <div className={styles["review-mileage-main-text"]}>
              리뷰 쓰면 여행자 클럽 최대 3포인트!
            </div>
            <div
              className={[
                styles["review-mileage-main-text"],
                styles["review-mileage-sub-text"],
              ].join(" ")}
            >
              포인트별 혜택 보기
            </div>
            <img
              alt="포인트별 혜택 보기"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMjk4N0YwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS42IiBkPSJNNy4wNyAxNkwxMyAxMC4wMzUgNyA0Ii8+Cjwvc3ZnPgo="
              className={styles["mileage-btn-arrow"]}
            />
          </div>
        </div>
      </div>
      <div className={stylesHr["loc-hr"]}></div>
    </>
  );
};

export default LocReview;
