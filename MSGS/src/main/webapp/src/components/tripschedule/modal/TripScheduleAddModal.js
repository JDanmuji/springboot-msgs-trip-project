import React, { useState } from "react";

import styleModal from "./TripScheduleAddModal.module.css";
import TripScheduleAddStay from "./TripScheduleAddStay";
import TripScheduleAddPlace from "./TripScheduleAddPlace";

const TripScheduleAddModal = () => {
    const [isStaySelected, setIsStaySelected] = useState(true);

    const stayChangeHandler = () => {
        setIsStaySelected(true);
    };
    const placeChangeHandler = () => {
        setIsStaySelected(false);
    };

    return (
        <div className={styleModal["trip-schedule-add-modal"]}>
            <div className={styleModal["trip-schedule-add-modal-close"]}>
                <img
                    src="../../../../public/images/icon_close.png"
                    alt="icon_close"
                />
            </div>
            {/* Search Container */}
            <div className={styleModal["trip-schedule-add-modal-search"]}>
                <span>
                    <img
                        className={
                            styleModal["trip-schedule-add-modal-icon-search"]
                        }
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
                    className={`${styleModal["trip-schedule-add-modal-btn"]} ${
                        isStaySelected && styleModal["selected"]
                    }
          `}
                    onClick={stayChangeHandler}
                >
                    <img
                        className={
                            styleModal["trip-schedule-add-modal-icon-stay"]
                        }
                        src="public\images\icon_stay.png"
                        alt="icon_stay"
                    />
                    <span
                        className={
                            styleModal["trip-schedule-add-modal-stay-span"]
                        }
                    >
                        숙박
                    </span>
                </div>

                <div
                    className={`${styleModal["trip-schedule-add-modal-btn"]} ${
                        isStaySelected || styleModal["selected"]
                    }
            `}
                    onClick={placeChangeHandler}
                >
                    <img
                        className={
                            styleModal["trip-schedule-add-modal-icon-place"]
                        }
                        src="public\images\icon_place.png"
                        alt="icon_place"
                    />
                    <span
                        className={
                            styleModal["trip-schedule-add-modal-place-span"]
                        }
                    >
                        장소
                    </span>
                </div>
            </div>
            <div
                className={
                    styleModal["trip-schedule-add-modal-stay-place-title-div"]
                }
            >
                <div
                    className={
                        styleModal["trip-schedule-add-modal-stay-place-title"]
                    }
                >
                    DAY1 추천 {isStaySelected ? "숙박" : "장소"}
                </div>
            </div>

            {/* 조건문 추가: default-숙박 → 장소 클릭 시, Component 변환 */}
            {isStaySelected ? (
                <TripScheduleAddStay />
            ) : (
                <TripScheduleAddPlace />
            )}

            <div
                className={
                    styleModal["trip-schedule-add-modal-select-complete"]
                }
            >
                <button
                    className={
                        styleModal[
                            "trip-schedule-add-modal-select-complete-button"
                        ]
                    }
                >
                    선택 완료
                </button>
            </div>
        </div>
    );
};

export default TripScheduleAddModal;
