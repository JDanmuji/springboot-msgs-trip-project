import React from "react";

import items from "./restaurant-data/RestaurantData";
import styles from "./RestaurantList.module.css";

import RestaurantItem from "./RestaurantItem";

const RestaurantList = () => {
    return (
        <div className={styles["main-wrapper"]}>
            <p className={styles["trip-story-list-title"]}>맛집🥑</p>
            <p className={styles["trip-story-list-sub-title"]}>
                직접 다녀온 찐 맛집 확인하기
            </p>

            <div className={styles["items-wrapper"]}>
                {/* {items.map((data, index) => (
                    <RestaurantItem
                        key={data.index}
                        tripImg={data.tripImg}
                        userImg={data.userImg}
                        userNickname={data.userNickname}
                        tripStartDate={data.tripStartDate}
                        tripEndDate={data.tripEndDate}
                        tripTitle={data.tripTitle}
                        tripTag={data.tripTag}
                    />
                ))} */}
            </div>
        </div>
    );
};

export default RestaurantList;
