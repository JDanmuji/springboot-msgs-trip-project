import React from "react";

import styles from "./LocReview.module.css";

const ReviewImg = (props) => {
  const getReviewImgClass = (length) => {
    if (length === 0) {
      return "review-img-zero";
    } else if (length === 1) {
      return "review-img-one";
    } else if (length === 2) {
      return "review-img-two";
    } else if (length === 3) {
      return "review-img-three";
    } else if (length === 4) {
      return "review-img-four";
    } else {
      return "review-img-five";
    }
  };

  const reviewImgClass = getReviewImgClass(props.reviewImg.length);

  return (
    <>
      {/* ---- 나중에 back 에서 데이터 긁어 오기 ---- */}
      <div className={styles["review-medium-wrap"]}>
        <div className={`${styles["review-item-img"]} ${styles[reviewImgClass]}`}>
          {props.reviewImg.map((image, index) => {
            if (index < 5) {
              return (
                <img
                  key={index}
                  src={image}
                  alt={`reviewImg-${index}`}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </>
  );
};

export default ReviewImg;
