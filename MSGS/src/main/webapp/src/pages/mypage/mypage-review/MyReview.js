import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./MyReview.module.css";
import StarShow from "../../../components/common/StarShow";

const MyReview = (props) => {
  // 추천순, 최신순 선택
  const [isSortedByLike, setIsSortedByLike] = useState(true);
  // 선택한 정렬에 따라 데이터 전환
  const data = isSortedByLike ? props.data : props.data;

  const sortClickHandler = (isLikeSort) => {
    isLikeSort ? setIsSortedByLike(true) : setIsSortedByLike(false);
  };

  console.log("@@@@@@@@@@@@@@@@@@@@@@@@", data);

  return (
    <>
      <div className={styles["review-filter"]}>
        <button
          className={`${styles["review-filter-btn"]} ${
            isSortedByLike && styles["review-filter-selected"]
          }`}
          onClick={() => sortClickHandler(true)}
        >
          추천순
        </button>
        <button
          className={`${styles["review-filter-btn"]} ${
            !isSortedByLike && styles["review-filter-selected"]
          }`}
          onClick={() => sortClickHandler(false)}
        >
          최신순
        </button>
      </div>

      <div className={styles["review-item-wrap"]}>
        {data.map((item, index) => (
          <div className={styles["review-item"]} key={index}>
            {/* 장소 이름 */}
            <div className={styles["city-wrap"]}>
              <span className={styles["list-content-fullcityname"]}>
                {item.title}
              </span>
              <span className={styles["list-content-cityname"]}>
                {item.cityName} | {item.contentTypeName}
              </span>
            </div>

            {/* 기타 정보 */}
            <ul className={styles["schedule-info-list"]}>
              <li className={styles["review-info-item"]}>
                <img
                  className={styles["quote-icon"]}
                  src={process.env.PUBLIC_URL + "/images/icon_quote.png"}
                  alt="icon_quote"
                />
                <span className={styles["review-preview"]}>
                  {item.comment.substring(0,30)}...
                </span>
              </li>

              <li className={styles["review-info-item"]}>
                <span className={styles["schedule-info-title"]}>작성일자</span>
                <span className={styles["schedule-info-value"]}>
                  {item.regDate}
                </span>
              </li>

              <li className={styles["review-info-item"]}>
                <span className={styles["schedule-info-title"]}>
                  &ensp;평&ensp;점&ensp;
                </span>
                <div className={styles["schedule-info-value-review"]}>
                  <StarShow rating={item.rate} height={"1.6rem"} />
                </div>
              </li>
            </ul>

            <div className={styles["schedule-info-button"]}>
              <Link to={`/tripLoc/35/${item.contentTypeId}/${item.contentId}`}>
                <button>장소 보러 가기</button>
              </Link>
              <Link to={`/tripLoc/35/${item.contentTypeId}/${item.contentId}`}>
                <button>리뷰 보러 가기</button>
              </Link>
              <button onClick="">리뷰 삭제</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyReview;
