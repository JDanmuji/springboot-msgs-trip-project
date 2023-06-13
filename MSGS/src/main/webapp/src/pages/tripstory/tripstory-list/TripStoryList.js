import React from "react";

import StickyBanner from "../../main/StickyBanner";
import TripStoryItem from "../tripstory-single/TripStoryItem";

import items from "../tripstory-data/TripStoryData";

import style1 from "../../main/Main.module.css"
import style2 from "../tripstory-single/TripStoryItem.module.css";
import style3 from "./TripStoryList.module.css";

const TripStoryList = () => {

  return (
    <div className={style1["width-wrapper"]}>
      <p className={style3["trip-story-list-title"]}>
        실시간 여행기🐤
      </p>
      <p className={style3["trip-story-list-sub-title"]}>
        직접 다녀온 추천 일정과 여행 꿀팁 확인하기
      </p>


      <StickyBanner />


      <div className={style2["width-wrapper"]}>
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
