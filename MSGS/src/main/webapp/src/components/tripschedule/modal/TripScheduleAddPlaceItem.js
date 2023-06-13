import React, { useState } from "react";

import stylePlaceItem from "./TripScheduleAddPlaceItem.module.css";

// 장소 데이터 불러오기
const TripScheduleAddPlaceItem = (props) => {
    const [isChecked, setIsChecked] = useState(
        props.checkedItems.includes(props.data.id) ? true : false
    );

    const checkClickHandler = () => {
        props.checkHandler(!isChecked, props.data.id);
        setIsChecked(!isChecked);
    };

    return (

        <div className={stylePlaceItem["place-item"]}>
            <div className={stylePlaceItem["place-item-left"]}>
                <div
                    className={
                        stylePlaceItem["trip-schedule-add-place-img-div"]
                    }
                >
                    <img
                        className={
                            stylePlaceItem["trip-schedule-add-place-img"]
                        }
                        src={props.data.stayImg}
                        alt="stayImg{props.id}"
                    />
                </div>
                <div
                    className={
                        stylePlaceItem["trip-schedule-add-place-item-info"]
                    }
                >
                    <div
                        className={
                            stylePlaceItem["trip-schedule-add-place-item-name"]
                        }
                    >
                        {props.data.stayName}
                    </div>
                    <div
                        className={
                            stylePlaceItem[
                                "trip-schedule-add-place-item-loc-type"
                            ]
                        }
                    >
                        <p>{props.data.stayLocation}</p>
                        <p>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
                        <p>{props.data.stayType}</p>
                    </div>
                </div>

            </div>

            <div className={stylePlaceItem["check-div"]}>
                <input
                    className={stylePlaceItem["check-input"]}
                    type="checkbox"
                    // checkedItems 배열에 id 있을 경우 선택
                    checked={isChecked}
                    // onChange={(e) =>
                    //     props.checkHandler(e.target.checked, props.data.id)
                    // }
                />
                <div
                    className={`${stylePlaceItem["check-label"]} ${
                        isChecked ? stylePlaceItem["checked"] : ""
                    }`}
                    onClick={checkClickHandler}
                ></div>
            </div>
        </div>
    );
};

export default TripScheduleAddPlaceItem;
