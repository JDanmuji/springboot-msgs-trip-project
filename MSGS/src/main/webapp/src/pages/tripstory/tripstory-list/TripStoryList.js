import React, { useState, useEffect } from "react";
import axios from "axios";

import items from "../tripstory-data/TripStoryData";
import styles from "./TripStoryList.module.css";

import TripStoryItem from "./TripStoryItem";

const TripStoryList = () => {
  // DB 데이터 담을 state
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.post("/tripstory/getStoryList");
      const data = {};

      // 데이터 형태 재구성
      response.data.forEach((item) => {
        const tripId = item.tripId;

        if (!data[tripId]) {
          data[tripId] = {
            tripId: tripId,
            scheduleId: item.scheduleId,
            title: item.title,
            comment: item.comment,
            userId: item.userId,
            userName: item.userName,
            userImgPath: item.userImgPath,
            storyImgs: [],
          };
        }

        if (item.storyImg && item.storyImg.length > 0) {
          data[tripId].storyImgs.push(item.storyImg);
        }
    });
    
    setData(Object.values(data));
    // console.log("=====getStoryList=====", Object.values(data));
    // console.log("======data======", data['001'].tripId) // tripId 출력 방법
    } catch (error) {
      console.log(error);
    }
  };

  // getStoryList 실행
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles["main-wrapper"]}>
      <p className={styles["trip-story-list-title"]}>실시간 여행기🐤</p>
      <p className={styles["trip-story-list-sub-title"]}>
        직접 다녀온 추천 일정과 여행 꿀팁 확인하기
      </p>

      <div className={styles["items-wrapper"]}>
        {Object.values(data).map((data, index) => (
          <TripStoryItem
            key={index}
            tripId={data.tripId}
            scheduleId={data.scheduleId}
            tripImg={data.storyImgs}
            userImgPath={data.userImgPath}
            userNickname={data.userName}
            tripStartDate="2023-06-01"
            tripEndDate="2023-06-05"
            tripTitle={data.title}
            tripTag={data.comment}
          />
        ))}
      </div>
    </div>
  );
};

export default TripStoryList;
