import React from "react";

import styles from "./FlightItem.module.css";

const FlightItem = () => {
  return (
    <div className={styles["width-wrapper-going"]}>
      <div className={styles["card-container"]}>
        <div className={styles["card-container-detail"]}>
          <div>
            <img
              src={process.env.PUBLIC_URL + '/images/icon_flight.png'}
              alt="icon_flight"
            />
          </div>
          <div className={styles["card-container-detail-info"]}>
            <div className={styles["card-container-detail-info-right"]}>
              <div className={styles["card-container-detail-info-right-1"]}>
                항공사 이름
              </div>
              <div className={styles["card-container-detail-info-right-2"]}>
                항공사 출발-도착시간
              </div>
            </div>
            <div className={styles["card-container-detail-info-left"]}>
              직항 여부, 소요 시간
            </div>
          </div>
        </div>
              <div>잔여 좌석 수</div>
      </div>
    </div>
  );
};

export default FlightItem;
