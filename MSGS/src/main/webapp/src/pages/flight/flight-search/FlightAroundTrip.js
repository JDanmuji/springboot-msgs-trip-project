import React from "react";

import styles from "./FlightAroundTrip.module.css";

const FlightAroundTrip = (props) => {
  const today = new Date();

  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const dayOfWeek = weekdays[today.getDay()];

  const formattedDate = `${month}.${day}(${dayOfWeek})`;

  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + 3);

  const futureMonth = String(futureDate.getMonth() + 1).padStart(2, "0");
  const futureDay = String(futureDate.getDate()).padStart(2, "0");
  const futureDayOfWeek = weekdays[futureDate.getDay()];

  const formattedFutureDate = `${futureMonth}.${futureDay}(${futureDayOfWeek})`;

  return (
    <div className={styles["flight-around-trip"]}>
      <div className={styles["from-airport"]}>
        <img
          src="../../../../public/images/icon_location.png"
          alt="icon_location"
        />
        인천공항
      </div>
      <div className={styles["to-airport"]}>
        {" "}
        <img
          src="../../../../public/images/icon_location.png"
          alt="icon_location"
        />
        제주공항
      </div>
      <div className={styles["day-going-coming"]}>
        {props.isRoundTrip ? (
          <>
            <div className={styles["day-going"]}>
              <img
                src="../../../../public/images/icon_event_calendar.png"
                alt="icon_event_calendar"
              />
              {formattedDate}
            </div>
            <div className={styles["day-coming"]}>
              <img
                src="../../../../public/images/icon_event_calendar.png"
                alt="icon_event_calendar"
              />
              {formattedFutureDate}
            </div>
          </>
        ) : (
          <div className={styles["day-oneway"]}>
            <img
              src="../../../../public/images/icon_event_calendar.png"
              alt="icon_event_calendar"
            />
            {formattedDate}
          </div>
        )}
      </div>
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
