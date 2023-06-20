import React, { useState } from "react";

import styles from "./ReviewImg.module.css";
import ReviewImgModal from "../../components/tripplace/ReviewImgModal";

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
            {props.reviewImg.map((imgSrc, index) => {
                if (index < 3) {
                    return (
                        <>
                            <ReviewImgModal
                                key={index}
                                imgSrc={imgSrc}
                                // isImgModalOpen={isImgModalOpen}
                                // imgModalClickHandler={imgModalClickHandler}
                            />
                        </>
                    );
                }
                return null;
            })}
        </div>
    );
};

export default ReviewImg;
