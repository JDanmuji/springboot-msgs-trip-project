import React from "react";

import stayItems from "../modal-data/TripScheduleAddStayData";
import placeItems from "../modal-data/TripScheduleAddPlaceData";

import { useState } from "react";
import styleModalPlace from "./TripScheduleAddPlace.module.css";
import TripScheduleAddPlaceItem from "./TripScheduleAddPlaceItem";
import { useEffect } from "react";

const TripScheduleAddPlace = (props) => {
    const items = props.isStaySelected ? stayItems : placeItems;

    const checkOnlyOne = (checkTarget) => {
        const checkboxes = document.getElementsByName("stay");
        checkboxes.forEach((cb) => {
            cb.checked = false;
        });
        checkTarget.checked = true;
    };

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
                    checkOnlyOne={checkOnlyOne}
                />
            ))}
        </div>
    );
};

export default TripScheduleAddPlace;
