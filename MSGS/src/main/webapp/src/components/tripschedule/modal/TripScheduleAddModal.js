import React, { useState } from "react";

import styleModal from "./TripScheduleAddModal.module.css";
import TripScheduleAddStay from "./TripScheduleAddStay";
import TripScheduleAddPlace from "./TripScheduleAddPlace";

const TripScheduleAddModal = () => {
  const [stayOrPlace, setStayOrPlace] = useState("숙박");

  const stayChangeHandler = () => {
    setStayOrPlace("숙박");
  };

  const placeChangeHandler = () => {
    setStayOrPlace("장소");
  };

  return (
    <div className={styleModal["trip-schedule-add-modal"]}>
      <div className={styleModal["trip-schedule-add-modal-close"]}>
        <img src="../../../../public/images/icon_close.png" alt="icon_close" />
      </div>
      {/* Search Container */}
      <div className={styleModal["trip-schedule-add-modal-search"]}>
        <span>
          <img
            className={styleModal["trip-schedule-add-modal-icon-search"]}
            src="public\images\icon_search.png"
            alt="icon_search"
          />
        </span>
        <div>
          <input
            className={styleModal["trip-schedule-add-modal-input"]}
            placeholder="관광지/맛집/숙소 검색"
          />
        </div>
      </div>

      {/* Stay or Place Container */}
      <div className={styleModal["trip-schedule-add-modal-stay-place"]}>
        <div
          className={styleModal["trip-schedule-add-modal-stay"]}
          onClick={stayChangeHandler}
        >
          <img
            className={styleModal["trip-schedule-add-modal-icon-stay"]}
            src="public\images\icon_stay.png"
            alt="icon_stay"
          />
          <span className={styleModal["trip-schedule-add-modal-stay-span"]}>
            숙박
          </span>
        </div>

        <div
          className={styleModal["trip-schedule-add-modal-place"]}
          onClick={placeChangeHandler}
        >
          <img
            className={styleModal["trip-schedule-add-modal-icon-place"]}
            src="public\images\icon_place.png"
            alt="icon_place"
          />
          <span className={styleModal["trip-schedule-add-modal-place-span"]}>
            장소
          </span>
        </div>
      </div>
      <div
        className={styleModal["trip-schedule-add-modal-stay-place-title-div"]}
      >
        <div className={styleModal["trip-schedule-add-modal-stay-place-title"]}>
          DAY1 추천 {stayOrPlace}
        </div>
      </div>

      {/* 조건문 추가: default-숙박 → 장소 클릭 시, Component 변환 */}
      {stayOrPlace === "숙박" ? (
        <TripScheduleAddStay />
      ) : (
        <TripScheduleAddPlace />
      )}

      <div className={styleModal["trip-schedule-add-modal-select-complete"]}>
        <button
          className={
            styleModal["trip-schedule-add-modal-select-complete-button"]
          }
        >
          선택 완료
        </button>
      </div>
    </div>
  );
};

export default TripScheduleAddModal;
