import React, { useState } from "react";

import items from "../modal-data/TripScheduleAddStayData";
import styleModalPlace from "./TripScheduleAddPlace.module.css";


import TripScheduleAddPlaceItem from "./TripScheduleAddPlaceItem";
import SelectedItem from "./SelectedItem";


const TripScheduleAddPlace = () => {
    // 선택된 아이템 담는 배열
    const [checkedItems, setCheckedItems] = useState([]);

    const checkHandler = (isChecked, id) => {
        if (isChecked) {
            // 선택 시 체크된 아이템을 배열에 추가
            setCheckedItems((prev) => [...prev, id]);
        } else {
            // 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
            setCheckedItems(checkedItems.filter((el) => el !== id));
        }
    };

    return (
        <div className={styleModalPlace["trip-schedule-add-place"]}>
            <div className={styleModalPlace["trip-schedule-add-place-item"]}>
                {items.map((data) => (
                    <TripScheduleAddPlaceItem
                        key={data.id}
                        data={data}
                        checkedItems={checkedItems}
                        checkHandler={checkHandler}
                    />
                ))}
            </div>
            <div className={styleModalPlace["selected-items"]}>
                {items
                    .filter((data) => checkedItems.includes(data.id))
                    .map((data) => (
                        <SelectedItem
                            key={data.id}
                            placeImg={data.stayImg}
                            placeName={data.stayName}
                        />
                    ))}
            </div>
        </div>
    );
};

export default TripScheduleAddPlace;
