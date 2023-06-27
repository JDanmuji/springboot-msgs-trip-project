import React from "react";

import data from "./TempDummyData";

import styles from "./TripStoryCreateList.module.css";
import TripStoryCreateItem from "./TripStoryCreateItem";

const TripStoryCreateList = () => {
  return (
    <div className={styles["main-wrapper-list-create-tripstory"]}>
      <div>
        <p className={styles["title"]}> 여행 이야기 생성하기 🎠 </p>
        <p className={styles["sub-title"]}>
          이젠 나도 여행 작가📖! 나만의 멋진 여행 이야기로 여행을 마무리 하기😮{" "}
        </p>
      </div>
      <div className={styles["trip-list"]}>
        {data.map((item) => (
          <TripStoryCreateItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default TripStoryCreateList;
