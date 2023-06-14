import React from "react";

import styles from "./TripStoryList.module.css";
import TripStoryItemImg from "./TripStoryItemThumbnail";

const TripStoryItem = (props) => {
    const tripDuration = () => {
        const startDate = new Date(props.tripStartDate);
        const endDate = new Date(props.tripEndDate);
        const tripDuration = (endDate - startDate) / (1000 * 60 * 60 * 24);

        return tripDuration;
    };
    const getDuration = () => {
        const duration = tripDuration();

        if (duration === 0) {
            return "당일치기";
        } else {
            return `${duration}박 ${duration + 1}일`;
        }
    };

    // tripImg의 요소길이 반환 → 이미지 개수에 따른 CSS 조정
    const length = props.tripImg.length;

    return (
        <div className={styles["trip-story-item-div"]}>
            <TripStoryItemImg tripImg={props.tripImg} length={length} />
            <div className={styles["trip-story-item-info"]}>
                <p>
                    {props.userImg.length > 0 ? (
                        <img
                            className={styles["trip-story-item-user-profile"]}
                            src={props.userImg}
                            alt="userImg"
                        />
                    ) : (
                        <img
                            className={styles["trip-story-item-user-profile"]}
                            src="https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/8bf768bf-628c-491f-9312-9f1852b1162a.jpeg"
                            alt="userImg"
                        />
                    )}
                </p>
                <div className={styles["trip-story-item-info-inner1"]}>
                    <p>{props.userNickname}</p>
                    <p>{getDuration()}</p>
                </div>
                <p className={styles["trip-story-item-title"]}>
                    {props.tripTitle}
                </p>
                <p className={styles["trip-story-item-tag"]}>{props.tripTag}</p>
            </div>
        </div>
    );
};

export default TripStoryItem;
