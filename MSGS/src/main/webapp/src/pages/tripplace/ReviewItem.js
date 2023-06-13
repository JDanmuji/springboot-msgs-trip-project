import React from 'react';

import styles from "./LocReview.module.css";
import ReviewImg from "./ReviewImg";

const ReviewItem = () => {
    return (
        <>
            <div className={styles["review-item-header"]}>
                <img src="https://media.triple.guide/titicaca-imgs/image/upload/v1613091788/n6oztunble9grzk0ozjx.jpg"
                     className={styles["review-item-id-img"]} />
                <img src="https://assets.triple.guide/images/img_badge_level3.png"
                     className={styles["review-item-id-marker"]} />
                <div>
                    <div className={styles["review-item-user-id"]} >Garin 가린</div>
                    <div className={styles["review-item-user-info"]} >
                        LEVEL3 / 145개의 리뷰
                    </div>
                </div>
            </div>
            <div className={styles["review-item-rating"]}>
                {/* star icon */}
                <span className={styles["review-item-star"]} ></span>
                <span className={styles["review-item-star"]} ></span>
                <span className={styles["review-item-star"]} ></span>
                <span className={styles["review-item-star"]} ></span>
                <span className={styles["review-item-star"]} ></span>
            </div>
            <div className={styles["review-item-hr"]} ></div>
            <div className={styles["review-item-content"]} >
                <a>
                    <div className={styles["review-item-text"]} >
                        <div className={styles["review-item-text"]} >
                            전주한옥마을은 자주 와봤다고
                            생각했는데 ⛩경기전은 한번도 가보지 못해서 경성의복 빌려입고 가봤어요. 포토존이 있는 듯 사람들이 줄서서 …
                            <button className={styles["review-item-text-plus"]} >
                                더보기
                            </button>
                        </div>
                    </div>
                </a>
            </div>
            <div className={styles["review-item-img-wrap"]} >
                <div className={[styles["review-item-grid-wrap"], styles["review-grid"]].join(" ")} >
                    {/* image list */}
                    {
                        Array.from({length: 5}).map((item, index) => <ReviewImg />
                    )}
                </div>
            </div>
            <div className={styles["review-footer-wrap"]} >
                <div className={styles["review-footer"]} >
                    <div className={[styles["review-footer-btn"], styles["review-like-icon"]].join(" ")} >
                        0
                    </div>
                    <div className={[styles["review-footer-btn"], styles["review-comment-icon"]].join(" ")} >
                        0
                    </div>
                    <div className={styles["review-footer-etc"]} >
                        2022.6.18
                        <img src="https://assets.triple.guide/images/btn-review-more@4x.png"
                             className={styles["review-more-icon"]}  />
                    </div>

                </div>
            </div>
        </>
    );
};

export default ReviewItem;