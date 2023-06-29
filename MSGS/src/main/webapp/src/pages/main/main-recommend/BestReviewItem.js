import React from "react";
import { Link } from "react-router-dom";

import styles from "./MainRecommend.module.css";

const BestReviewItem = (props) => {
  // 이미지 엑박 뜰 경우 로고로 대체
  // (데이터 있으나 url이 부정확해 로딩되지 않는 경우)
  const imgErrorHandler = (event) => {
    event.target.src = `${process.env.PUBLIC_URL}/images/common/msgs_logo_margin.png`;
  };

  const shortedTitle =
    props.reviewData.title.length > 20
      ? props.reviewData.title.substring(0, 20) + "..."
      : props.reviewData.title;

  return (
    <Link to={`/tripstory/detail/${props.reviewData.tripId}/${props.reviewData.scheduleId}`}>
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
            <span>"2박 3일"</span>
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
      <p className={styles["preview-text"]}>{props.reviewData.comment}</p>
    </div>
    </Link>
  );
};

export default BestReviewItem;
