import React, { useState } from "react";

import FlightAroundTrip from "./flight-search/FlightAroundTrip";
import StickyBanner from "./StickyBanner";
import RcmdTrips from "./trip-list/RcmdTrips";

import styles from "./Flight.module.css";
import FlightSelect from "./flight-search/FlightSelect";

const Flight = () => {
  // 왕복 여부
  const [isRoundTrip, setIsRoundTrip] = useState(true);
  // 공항 선택 모달창 반환
  const [showFlightSelect, setShowFlightSelect] = useState(false);

  const roundSelectHandler = () => {
    setIsRoundTrip(true);
  };
  const onewaySelectHandler = () => {
    setIsRoundTrip(false);
  };
  const selectAirportHandler = () => {
    setShowFlightSelect(true);
  };

  return (
    <div className={styles["width-wrapper"]}>
      <StickyBanner />
      <p className={styles["flight-headline"]}>어디로 떠나시나요?</p>
      <div className={styles["width-wrapper-inner"]}>
        {/* 왕복, 편도 선택 */}
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
          {/* onClick() 전달 후 click값 전달받아 setData 변환 처리 */}
          <FlightAroundTrip
            isRoundTrip={isRoundTrip}
            selectAirportHandler={selectAirportHandler}
          />

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

      {/* 인기 추천 여행지 */}
      <RcmdTrips />

      {/* 클릭에 따른 공항 모달창 출력 */}
      {showFlightSelect && (
        <div className={styles["show-flight-select"]}>
          <FlightSelect />
        </div>
      )}
    </div>
  );
};

export default Flight;
