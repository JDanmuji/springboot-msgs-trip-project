import React, { useState } from "react";

import styles from "./FlightAroundTrip.module.css";

const FlightAroundTrip = (props) => {
  // 일자 표현식(Default-오늘 기준)
  const today = new Date();

  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const dayOfWeek = weekdays[today.getDay()];

  const formattedDate = `${month}.${day}(${dayOfWeek})`;

  // 일자 표현식(오늘로부터 3일 후)
  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + 3); // 3일 후

  const futureMonth = String(futureDate.getMonth() + 1).padStart(2, "0");
  const futureDay = String(futureDate.getDate()).padStart(2, "0");
  const futureDayOfWeek = weekdays[futureDate.getDay()];

  const formattedFutureDate = `${futureMonth}.${futureDay}(${futureDayOfWeek})`;


  return (
    <div className={styles["flight-around-trip"]}>

    {/* 비행기 출발 공항 */}
      <div onClick={props.selectAirportHandler} className={styles["from-airport"]}>
        <img
          src="../../../../public/images/icon_location.png"
          alt="icon_location"
        />
        인천공항
      </div>

    {/* 비행기 도착 공항 */}
      <div className={styles["to-airport"]}>
        <img
          src="../../../../public/images/icon_location.png"
          alt="icon_location"
        />
        제주공항
      </div>


      {/* 여행 일정 선택 */}
      <div className={styles["day-going-coming"]}>

        {/* 왕복인지 편도인지에 따른 Component 전환: Default-왕복 */}
        {props.isRoundTrip ? (
          <>
            {/* 가는 날 */}
            <div className={styles["day-going"]}>
              <img
                src="../../../../public/images/icon_event_calendar.png"
                alt="icon_event_calendar"
              />
              {formattedDate}
            </div>
            {/* 오는 날 */}
            <div className={styles["day-coming"]}>
              <img
                src="../../../../public/images/icon_event_calendar.png"
                alt="icon_event_calendar"
              />
              {formattedFutureDate}
            </div>
          </>
        ) : (

          // 편도
          <div className={styles["day-oneway"]}>
            <img
              src="../../../../public/images/icon_event_calendar.png"
              alt="icon_event_calendar"
            />
            {formattedDate}
          </div>
        )}
      </div>
      
      {/* 탑승객, 좌석 등급 선택 */}
      <div className={styles["boarding-info"]}>
        <img
          src="../../../../public/images/icon_person.png"
          alt="icon_person"
        />
        성인 1명 ㆍ 일반석
      </div>
    </div>
  );
};

export default FlightAroundTrip;
