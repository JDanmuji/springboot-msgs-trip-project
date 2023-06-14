import React, { useState } from "react";

import styleModal from "./TripScheduleAddModal.module.css";

import TripScheduleAddPlace from "./TripScheduleAddPlace";
import SelectedArea from "./SelectedArea";

const TripScheduleAddModal = () => {
    // 숙박 / 장소 탭 전환
    const [isStaySelected, setIsStaySelected] = useState(true);

    const stayChangeHandler = () => {
        setIsStaySelected(true);
    };
    const placeChangeHandler = () => {
        setIsStaySelected(false);
    };

    // 선택된 아이템 담을 배열
    const [checkedPlaces, setCheckedPlaces] = useState([]);
    const [checkedStay, setCheckedStay] = useState("");

    const stayCheckHandler = (isChecked, id) => {
        if (checkedStay !== id) {
            setCheckedStay(id);
        } else {
            setCheckedStay("");
        }
    };

    const placeCheckHandler = (isChecked, id) => {
        if (isChecked) {
            setCheckedPlaces((prev) => [...prev, id]); // 선택
        } else {
            setCheckedPlaces(checkedPlaces.filter((el) => el !== id)); // 선택 해제
        }
    };

    return (
        <div className={styleModal["trip-schedule-add-modal"]}>
            <div className={styleModal["modal-top"]}>
                {/* Search Container */}
                <div className={styleModal["trip-schedule-add-modal-search"]}>
                    <span>
                        <img
                            className={styleModal["icon-search"]}
                            src="public\images\icon_search.png"
                            alt="icon_search"
                        />
                    </span>
                    <div>
                        <input
                            className={
                                styleModal["trip-schedule-add-modal-input"]
                            }
                            placeholder="관광지/맛집/숙소 검색"
                        />
                    </div>
                </div>
                <img
                    className={styleModal["icon-close"]}
                    src="../../../../public/images/icon_close.png"
                    alt="icon_close"
                />
            </div>

            {/* Stay or Place Container */}
            <div className={styleModal["trip-schedule-add-modal-stay-place"]}>
                <div
                    className={`${styleModal["tab-btn"]} ${
                        isStaySelected && styleModal["selected"]
                    }
          `}
                    onClick={stayChangeHandler}
                >
                    <img src="public\images\icon_stay.png" alt="icon_stay" />
                    <span>숙박</span>
                </div>

                <div
                    className={`${styleModal["tab-btn"]} ${
                        isStaySelected || styleModal["selected"]
                    }
            `}
                    onClick={placeChangeHandler}
                >
                    <img src="public\images\icon_place.png" alt="icon_place" />
                    <span>장소</span>
                </div>
            </div>

            <div className={styleModal["stay-place-title"]}>
                DAY1 추천 {isStaySelected ? "숙박" : "장소"}
            </div>

            <TripScheduleAddPlace
                isStaySelected={isStaySelected}
                checkedItems={isStaySelected ? checkedStay : checkedPlaces}
                checkHandler={
                    isStaySelected ? stayCheckHandler : placeCheckHandler
                }
            />

            <SelectedArea
                checkedStay={checkedStay}
                checkedPlaces={checkedPlaces}
            />

            <button className={styleModal["select-complete-btn"]}>
                선택 완료
            </button>
        </div>
    );
};

export default TripScheduleAddModal;
