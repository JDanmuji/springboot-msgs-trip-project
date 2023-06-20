import React from "react";

import styles from "./ReviewImg.module.css";

const ReviewImg = (props) => {
    const getReviewImgClass = (length) => {
        if (length === 0) {
            return "review-img-zero";
        } else if (length === 1) {
            return "review-img-one";
        } else if (length === 2) {
            return "review-img-two";
        } else {
            return "review-img-three";
        }
    };

    const reviewImgClass = getReviewImgClass(props.reviewImg.length);

    return (
        <div
            className={`${styles["review-img-box"]} ${styles[reviewImgClass]}`}
        >
            {props.reviewImg.map((image, index) => {
                if (index < 3) {
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
    );
};

export default ReviewImg;
