import React, { useState } from "react";
import styles from "./MyReview.module.css";
import { useSearchParams } from "react-router-dom";

const MyReview = () => {
    const [selected, setSelected] = useState();
    const [nonSelected, setNonSelected] = useState();
    const recommendHandler = (e) => {
        setSelected(true);
        setNonSelected(false);
    };

    const recentHandler = (e) => {
        setSelected(false);
        setNonSelected(true);
    };

    return (
        <div className="list-main-wrap">
            <ul className={styles["mypage-sort-list"]}>
                <li className={selected ? styles["selected-list"] : styles["non-selected-list"]} onClick={recommendHandler}>
                    추천순
                </li>
                <li className={nonSelected ? styles["selected-list"] : styles["non-selected-list"]} onClick={recentHandler}>
                    최신순
                </li>
            </ul>
            <div className={styles["mypage-list"]}>
                <div className={styles["myage-list-textarea"]}>
                    <p className={styles["mypage-list-textarea-title"]}>강릉중앙시장</p>
                    <p className={styles["mypage-list-textarea-area"]}>명소</p>
                    <p className={styles["mypage-list-textarea-comment"]}>비싸기만하고 맛이 없음</p>

                    <div className={styles["mypage-list-textarea-days"]}>
                        <p>2021.06.08</p>
                        <p>
                            <img src={process.env.PUBLIC_URL + "/images/free-icon-like-126473.png"} />0
                        </p>
                        <p>
                            <img src={process.env.PUBLIC_URL + "/images/free-icon-dislike-126504.png"} />0
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
