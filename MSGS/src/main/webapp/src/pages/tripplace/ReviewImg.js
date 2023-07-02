import React from "react";

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

    const reviewImgClass = getReviewImgClass(props.reviewImgList.length);

    return (
        <div
            className={`${styles["review-img-box"]} ${styles[reviewImgClass]}`}
        >
            {props.reviewImgList.map((img, index) => {

                let data = (!img.imgPath) ? img : img.imgPath ;
             

                if (index < 3) {
                    return <ReviewImgModal key={index} imgSrc={data} />;
                }
                return null;
            })}
        </div>
    );
};

export default ReviewImg;
