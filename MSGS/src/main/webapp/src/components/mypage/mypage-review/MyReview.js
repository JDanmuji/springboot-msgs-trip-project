import React from "react";
import styles from "./MyReview.module.css";

const MyReview = () => {
    return (
        <div>
            <ul>
                <li>추천순</li>
                <li>최신순</li>
            </ul>
            <div className={styles["mypage-list"]}>
                <div className={styles["myage-list-textarea"]}>
                    <p className={styles["mypage-list-textarea-title"]}>강릉중앙시장</p>
                    <p className={styles["mypage-list-textarea-area"]}>명소</p>
                    <p className={styles["mypage-list-textarea-comment"]}>비싸기만하고 맛이 없음</p>

                    <div className={styles["mypage-list-textarea-days"]}>
                        <p>2021.06.08</p>
                        <p>
                            <img src="/public/images/free-icon-like-126473.png" />0
                        </p>
                        <p>
                            <img src="/public/images/free-icon-dislike-126504.png" />0
                        </p>
                    </div>
                </div>
                <div className={styles["list-button"]}>
                    <button className={styles["list-button-update"]}>리뷰 수정</button>
                    <button className={styles["list-button-delete"]}>리뷰 삭제</button>
                </div>
            </div>
        </div>
    );
};

export default MyReview;
