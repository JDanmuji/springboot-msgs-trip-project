import React from "react";

import styles from "./ReviewImg.module.css";
<<<<<<< HEAD
=======
import ReviewImgModal from "../../components/tripplace/ReviewImgModal";
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b

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
<<<<<<< HEAD
            {props.reviewImg.map((image, index) => {
                if (index < 3) {
                    return (
                        <img
                            key={index}
                            src={image}
                            alt={`reviewImg-${index}`}
                        />
                    );
=======
            {props.reviewImg.map((imgSrc, index) => {
                if (index < 3) {
                    return <ReviewImgModal key={index} imgSrc={imgSrc} />;
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b
                }
                return null;
            })}
        </div>
    );
};

export default ReviewImg;
