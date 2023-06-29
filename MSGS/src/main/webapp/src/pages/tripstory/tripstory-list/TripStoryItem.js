import React from "react";

import styles from "./TripStoryList.module.css";
import { Link } from "react-router-dom";
import TripStoryItemThumbnail from "./TripStoryItemThumbnail";

const TripStoryItem = (props) => {
  const tripDuration = () => {
    const startDate = new Date(props.tripStartDate);
    const endDate = new Date(props.tripEndDate);
    const tripDuration = (endDate - startDate) / (1000 * 60 * 60 * 24);

    return tripDuration;
  };
  // 이미지 엑박 뜰 경우 로고로 대체
  // (데이터 있으나 url이 부정확해 로딩되지 않는 경우)
  const imgErrorHandler = (event) => {
    event.target.src = `${process.env.PUBLIC_URL}/images/common/msgs_logo_margin.png`;
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

//   console.log("=======tripstoryItem", props.tripId);
//   console.log("=======tripstoryItem", props.userImgPath);

  return (
    <Link to={`detail/${props.tripId}/${props.scheduleId}`}>
      <div className={styles["trip-story-item-div"]}>
        <TripStoryItemThumbnail tripImg={props.tripImg} length={length} imgErrorHandler={imgErrorHandler} />
        <div className={styles["trip-story-item-info"]}>
          <p>
            <img
              className={styles["trip-story-item-user-profile"]}
              src={
                props.userImgPath
                  ? props.userImgPath
                  : `${process.env.PUBLIC_URL}/images/common/msgs_logo_margin.png`
              }
              onError={imgErrorHandler}
              alt="userImg"
            />
          </p>
          <div className={styles["trip-story-item-info-inner1"]}>
            <p>{props.userNickname}</p>
            <p>{getDuration()}</p>
          </div>
          <p className={styles["trip-story-item-title"]}>{props.tripTitle}</p>
          <p className={styles["trip-story-item-tag"]}>{props.tripTag}</p>
        </div>
      </div>
    </Link>
  );
};

export default TripStoryItem;
