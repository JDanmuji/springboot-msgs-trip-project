import React from "react";

import stylePlaceItem from "./TripScheduleAddPlaceItem.module.css";

// 장소 데이터 불러오기
const TripScheduleAddPlaceItem = ({checkHandler, isStaySelected, checkedItems, isChecked, data}) => {
    const checkClickHandler = () => {
        checkHandler(!isChecked, data.contentid);
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
                        src={data.firstimage2}
                        alt="stayImg{id}"
                    />
                {/* </div> */}
                <div className={stylePlaceItem["place-item-info"]}>
                    <div className={stylePlaceItem["place-item-name"]}>
                        {data.title}
                    </div>
                    <div className={stylePlaceItem["place-item-loc-type"]}>
                        {/* <p>{data.location}</p> */}
                        <p>{'숙박or관광지or음식점'}</p>
                        <p>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
                        <p>{data.sigungucode}</p>
                    </div>
                </div>
            </div>

            <div
                className={`${stylePlaceItem["check-div"]} ${
                    isChecked ? stylePlaceItem["checked"] : ""
                }`}
            >
                {isChecked && (
                    <img
                        src={`${process.env.PUBLIC_URL}/images/icon_check.png`}
                        alt={data.contentid}
                    />
                )}
            </div>
        </div>
    );
};

export default TripScheduleAddPlaceItem;
