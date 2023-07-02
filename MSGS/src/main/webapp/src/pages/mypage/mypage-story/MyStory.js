import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./MyTripStory.module.css";

const MyStory = (props) => {
  const { data } = props;

  // 추천순, 최신순 선택
  const [isSortedByLike, setIsSortedByLike] = useState(true);
  // 선택한 정렬에 따라 데이터 전환
  //   const data = isSortedByLike ? props.data : props.data;

  const sortClickHandler = (isLikeSort) => {
    isLikeSort ? setIsSortedByLike(true) : setIsSortedByLike(false);
  };

  // ========== Date 계산 ==========
  const dateArray = data[0].dateList.split(",");
  const today = new Date();

  const startDay = dateArray[0];
  const endDay = dateArray[dateArray.length - 1];

  const startDate = new Date(startDay);
  const endDate = new Date(endDay);
  const timeDiff = startDate.getTime() - today.getTime();
  const dDay = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) * -1;

  console.log("===========dDay===========", dDay);

  // regDate, modDate 형식변환(yyyy-mm-dd)
  const formatDate = (date) => {
    const dateString = new Date(date);
    const year = dateString.getFullYear();
    const month = ("0" + (dateString.getMonth() + 1)).slice(-2);
    const day = ("0" + dateString.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  };

  // DDay 계산
  // const today = new Date();
  // const startDay = new Date(data.tourStartDay);
  // const timeDiff = startDay.getTime() - today.getTime();
  // const dDay = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) * -1;
  console.log("===================mystory================", data);

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

      {data.map((item) => (
        <div>
          <div className={styles["myschedule-mypage-item"]}>
            {/* 도시 사진 */}
            <div className={styles["myschedule-mypage-photo"]}>
              {/* <div className={styles["myschedule-d-day-text"]}>
                <span>
                  D{dDay < 0 ? dDay : dDay === 0 ? "-day" : `+${dDay}`}
                </span>
              </div> */}
              <div className={styles["myschedule-list-image"]}>
                <img src={item.storyImgs[0]} alt="storyImgs[0]" />
              </div>
            </div>

            {/* 도시 이름 */}
            <div className={styles["city-wrap"]}>
              <p className={styles["list-content-fullcityname"]}>
                {item.cityName} 여행
              </p>
              <p className={styles["list-content-cityname"]}>{item.city}</p>
            </div>

            {/* 기타 정보 */}
            <ul className={styles["schedule-info-list"]}>
              <li className={styles["schedule-info-item"]}>
                <span className={styles["schedule-info-title"]}>여행제목</span>
                <span className={styles["schedule-info-value"]}>
                  {item.title.length > 13
                    ? item.title.substring(0, 13) + "..."
                    : item.title}
                </span>
              </li>

              <li className={styles["schedule-info-item"]}>
                <span className={styles["schedule-info-title"]}>여행일자</span>
                <span className={styles["schedule-info-value"]}>
                  {startDay} - {endDay}
                </span>
              </li>

              <li className={styles["schedule-info-item"]}>
                <span className={styles["schedule-info-title"]}>최종수정</span>
                <span className={styles["schedule-info-value"]}>
                  {item.modDate
                    ? formatDate(item.modDate)
                    : formatDate(item.regDate)}
                </span>
              </li>
            </ul>

            <div className={styles["schedule-info-button"]}>
              <Link to={`/tripstory/detail/${item.storyId}/${item.scheduleId}`}>
                <button>보러가기</button>
              </Link>
              <Link to="">
                <button>수정</button>
              </Link>
              <button onClick="">삭제</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MyStory;
