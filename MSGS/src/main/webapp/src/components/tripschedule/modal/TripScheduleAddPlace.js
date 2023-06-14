import React from "react";

import styleModalPlace from "./TripScheduleAddPlace.module.css";
import stayItems from "../modal-data/TripScheduleAddStayData";
import placeItems from "../modal-data/TripScheduleAddPlaceData";

import TripScheduleAddPlaceItem from "./TripScheduleAddPlaceItem";

const TripScheduleAddPlace = (props) => {
    const items = props.isStaySelected ? stayItems : placeItems;

    return (
        <div className={styleModalPlace["trip-schedule-add-place"]}>
            {items.map((data) => (
                <TripScheduleAddPlaceItem
                    key={data.id}
                    data={data}
                    isStaySelected={props.isStaySelected}
                    checkHandler={props.checkHandler}
                    checkedItems={props.checkedItems}
                    isChecked={props.checkedItems.includes(data.id)}
                />
            ))}
        </div>
    );
};

export default TripScheduleAddPlace;
