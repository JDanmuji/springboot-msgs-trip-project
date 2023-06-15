import React from "react";

import styles from "./FlightItem.module.css";

const FlightItem = () => {
  return (
    <div className={styles["width-wrapper-going"]}>
      <div className={styles["card-container"]}>
        <div className={styles["card-container-detail"]}>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/images/icon_flight.png"}
              alt="icon_flight"
            />
          </div>
          <div className={styles["card-container-detail-info"]}>
            <div className={styles["card-container-detail-info-right"]}>
              <div className={styles["card-container-detail-info-right-1"]}>
                07:40 - 08:40
              </div>
              <div className={styles["card-container-detail-info-right-2"]}>
                CJU-GMP 항공사이름
              </div>
            </div>
            <div className={styles["card-container-detail-info-left"]}>
              31,800원
            </div>
          </div>
        </div>
        <div className={styles["card-container-bottom"]}>잔여 좌석 수</div>
      </div>
    </div>
  );
};

export default FlightItem;
