import React, { useState } from "react";

import FlightAroundTrip from "./flight-search/FlightAroundTrip";
import StickyBanner from "./StickyBanner";
import RcmdTrips from "./trip-list/RcmdTrips";

import styles from "./Flight.module.css";
import FromFlightSelect from "./flight-search/FromFlightSelect";
import ToFlightSelect from "./flight-search/ToFlightSelect";
import BoardingInfoSelect from "./flight-search/BoardingInfoSelect";
import FlightList from "./flight-list/FlightList";

const Flight = () => {
  // 왕복 여부
  const [isRoundTrip, setIsRoundTrip] = useState(true);
  // 공항 선택 모달창 반환
  const [showFromFlightSelect, setShowFromFlightSelect] = useState(false);
  const [showToFlightSelect, setShowToFlightSelect] = useState(false);
  const [showBoardingInfoSelect, setShowBoardingInfoSelect] = useState(false);

  const roundSelectHandler = () => {
    setIsRoundTrip(true);
  };
  const onewaySelectHandler = () => {
    setIsRoundTrip(false);
  };

  // 모달창 열기
  const selectFromAirportHandler = () => {
    setShowFromFlightSelect(true);
  };
  const selectToAirportHandler = () => {
    setShowToFlightSelect(true);
  };
  const selectBoardingInfoHandler = () => {
    setShowBoardingInfoSelect(true);
  };
  // 닫기창
  const selectedFromAirportHandler = () => {
    setShowFromFlightSelect(false);
  };
  const selectedToAirportHandler = () => {
    setShowToFlightSelect(false);
  };
  const selectedBoardingInfoHandler = () => {
    setShowBoardingInfoSelect(false);
  };


  return (
    <div className={styles["width-wrapper"]}>
      <StickyBanner />
      <FlightList />
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
            selectFromAirportHandler={selectFromAirportHandler}
            selectToAirportHandler={selectToAirportHandler}
            selectBoardingInfoHandler={selectBoardingInfoHandler}
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
      {showFromFlightSelect && (
        <div className={styles["show-from-flight-select"]}>
          <FromFlightSelect selectedFromAirportHandler={selectedFromAirportHandler} />
        </div>
      )}
      {showToFlightSelect && (
        <div className={styles["show-to-flight-select"]}>
          <ToFlightSelect selectedToAirportHandler={selectedToAirportHandler} />
        </div>
      )}

  {/* 클릭에 따른 탑승 정보 선택 모달 출력 */}
  {showBoardingInfoSelect && (
        <div className={styles["show-boarding-info-select"]}>
          <BoardingInfoSelect selectedBoardingInfoHandler={selectedBoardingInfoHandler} />
        </div>
      )}

    </div>
  );
};

export default Flight;
