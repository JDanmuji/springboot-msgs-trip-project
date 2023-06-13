import React from "react";

import items from "../modal-data/TripScheduleAddStayData";
import styleModalStay from "./TripScheduleAddStay.module.css";

import TripScheduleAddStayItem from "./TripScheduleAddStayItem";

const TripScheduleAddStay = () => {
    return (
        <div className={styleModalStay["trip-schedule-add-stay"]}>
            <div className={styleModalStay["trip-schedule-add-stay-item"]}>
                {items.map((data) => (
                    <TripScheduleAddStayItem
                        key={data.id}
                        stayId={data.id}
                        stayImg={data.stayImg}
                        stayName={data.stayName}
                        stayLocation={data.stayLocation}
                        stayType={data.stayType}
                    />
                ))}
            </div>
        </div>
    );
};

export default TripScheduleAddStay;
