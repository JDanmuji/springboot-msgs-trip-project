import React from "react";

import items from "../tripstory-data/TripStoryData";
import styles from "./TripStoryList.module.css";

import TripStoryItem from "./TripStoryItem";

const TripStoryList = () => {
    return (
        <div className={styles["main-wrapper"]}>
            <p className={styles["trip-story-list-title"]}>실시간 여행기🐤</p>
            <p className={styles["trip-story-list-sub-title"]}>
                직접 다녀온 추천 일정과 여행 꿀팁 확인하기
            </p>

            <div className={styles["items-wrapper"]}>
                {items.map((data) => (
                    <TripStoryItem
                        key={data.id}
                        tripImg={data.tripImg}
                        userImg={data.userImg}
                        userNickname={data.userNickname}
                        tripStartDate={data.tripStartDate}
                        tripEndDate={data.tripEndDate}
                        tripTitle={data.tripTitle}
                        tripTag={data.tripTag}
                    />
                ))}
            </div>
        </div>
    );
};

export default TripStoryList;
