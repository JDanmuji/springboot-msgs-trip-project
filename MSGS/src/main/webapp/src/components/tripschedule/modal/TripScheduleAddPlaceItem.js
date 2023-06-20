import React from "react";

import stylePlaceItem from "./TripScheduleAddPlaceItem.module.css";

// 장소 데이터 불러오기
const TripScheduleAddPlaceItem = (props) => {
    const checkClickHandler = () => {
        props.checkHandler(!props.isChecked, props.data.id);
    };

    return (
        <div
            className={stylePlaceItem["place-item"]}
            onClick={checkClickHandler}
        >
            <div className={stylePlaceItem["place-item-left"]}>
                {/* <div className={stylePlaceItem["place-img-div"]}> */}
                    <img
                        className={stylePlaceItem["place-img"]}
                        src={props.data.img}
                        alt="stayImg{props.id}"
                    />
                {/* </div> */}
                <div className={stylePlaceItem["place-item-info"]}>
                    <div className={stylePlaceItem["place-item-name"]}>
                        {props.data.name}
                    </div>
                    <div className={stylePlaceItem["place-item-loc-type"]}>
                        <p>{props.data.location}</p>
                        <p>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
                        <p>{props.data.type}</p>
                    </div>
                </div>
            </div>

            <div
                className={`${stylePlaceItem["check-div"]} ${
                    props.isChecked ? stylePlaceItem["checked"] : ""
                }`}
            >
                {props.isChecked && (
                    <img
                        src={`${process.env.PUBLIC_URL}/images/icon_check.png`}
                    />
                )}
            </div>
        </div>
    );
};

export default TripScheduleAddPlaceItem;
