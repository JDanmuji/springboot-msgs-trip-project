import React from "react";
import { Link } from "react-router-dom";

import styles from "./MainRecommend.module.css";

const BestReviewItem = (props) => {
  const tripDuration = () => {
    // dateList: "2023.6.20,2023.6.21,2023.6.22" , 구분자로 배열화
    const dateListArray = props.reviewData.dateList.split(",");

    const startDate = new Date(dateListArray[0]);
    const endDate = new Date(dateListArray[dateListArray.length-1]);
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

  // 이미지 엑박 뜰 경우 로고로 대체
  // (데이터 있으나 url이 부정확해 로딩되지 않는 경우)
  const imgErrorHandler = (event) => {
    event.target.src = `${process.env.PUBLIC_URL}/images/common/msgs_logo_margin.png`;
  };

  // 여행기 제목이 너무 길 경우
  const shortedTitle =
    props.reviewData.title.length > 20
      ? props.reviewData.title.substring(0, 20) + "..."
      : props.reviewData.title;

    // 여행기 내용이 너무 길 경우
  const shortedComment =
  props.reviewData.comment.length > 60
    ? props.reviewData.comment.substring(0, 60) + "..."
    : props.reviewData.comment;

  return (
    <Link to={`/tripstory/detail/${props.reviewData.storyId}/${props.reviewData.scheduleId}`}>
    <div className={styles["best-review-item"]}>
      <div className={styles["best-review-info"]}>
        <img
          className={styles["member-img"]}
          src={
            props.reviewData.userImgPath
              ? props.reviewData.userImgPath
              : `${process.env.PUBLIC_URL}/images/common/msgs_logo_margin.png`
          }
          onError={imgErrorHandler}
          alt="userImgPath"
        />
        <div className={styles["info-text"]}>
          <h4>{shortedTitle}</h4>
          <div>
            <span>{props.reviewData.userName}님의 일정</span>
            <span>{getDuration()}</span>
          </div>
        </div>
      </div>

      <img
        className={styles["thumb-img"]}
        src={
          props.reviewData.storyImgs[0]
            ? props.reviewData.storyImgs[0]
            : `${process.env.PUBLIC_URL}/images/common/msgs_logo_margin.png`
        }
        onError={imgErrorHandler}
        alt="storyImgs"
      />
      <p className={styles["preview-text"]}>{shortedComment}</p>
    </div>
    </Link>
  );
};

export default BestReviewItem;
