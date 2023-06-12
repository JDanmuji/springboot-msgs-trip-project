import React, { useState } from "react";

import FlightAroundTrip from "./flight-search/FlightAroundTrip";
import StickyBanner from "./StickyBanner";
import RcmdTrips from "./trip-list/RcmdTrips";

import styles from "./Flight.module.css";

const Flight = () => {
  const [isRoundTrip, setIsRoundTrip] = useState(true);

  const roundSelectHandler = () => {
    setIsRoundTrip(true);
  };
  const onewaySelectHandler = () => {
    setIsRoundTrip(false);
  };

  return (
    <div className={styles["width-wrapper"]}>
      <StickyBanner />
      <p className={styles["flight-headline"]}>어디로 떠나시나요?</p>
      <div className={styles["width-wrapper-inner"]}>
        <div className={styles["select-round-oneway"]}>
          <div
            className={
              isRoundTrip ? styles["select-round"] : styles["not-select-round"]
            }
            onClick={roundSelectHandler}
          >
            왕복
          </div>
          <div
            className={
              isRoundTrip
                ? styles["not-select-oneway"]
                : styles["select-oneway"]
            }
            onClick={onewaySelectHandler}
          >
            편도
          </div>
        </div>

        <div className={styles["width-wrapper-inner-inner"]}>
          <FlightAroundTrip isRoundTrip={isRoundTrip} />

          <label className={styles["direct-flight-check"]}>
            <input
              className={styles["direct-flight-checkbox"]}
              type="checkbox"
            />
            <p>직항</p>
          </label>

          <div className={styles["direct-flight-search-btn"]}>항공권 검색</div>
        </div>
      </div>
      <RcmdTrips />
    </div>
  );
};

export default Flight;
