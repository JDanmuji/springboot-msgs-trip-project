import React from "react";

import styles from "./TripStoryDay.module.css";

import TripStoryDayPlace from "./TripStoryDayPlace";
import GoogleMapPolyline from "../../../components/tripstory/tripstory-details/GoogleMapPolyline";

const TripStoryDay = (props) => {
    const dayData = props.dayData;

    const mapDataList = [];
    let placeOrder = 1;

    // 지도에 표기할 좌표 데이터 추출
    dayData.tripDayDetail.forEach((item, index) => {
        const placeData = {
            order: index + 1,
            placeOrder: item.type === "place" ? placeOrder : null,
            type: item.type,
            center: { lat: item.mapLat, lng: item.mapLon },
        };
        mapDataList.push(placeData);

        if (item.type === "place") {
            placeOrder += 1;
        }
    });

    return (
        <div>
            <h2 className={styles["day-number"]}>
                Day {dayData.dayCount} | {dayData.dayDate}
            </h2>
            {dayData.content && (
                <p className={styles["day-content"]}>{dayData.content}</p>
            )}

            {dayData.tripDayDetail && (
                <>
                    {/* 각 day별 경로 표시된 구글맵 */}
                    <div className={styles["map-wrap"]}>
                        <GoogleMapPolyline
                            mapDataList={mapDataList}
                            width={"90rem"}
                            height={"30rem"}
                        />
                    </div>

                    {/* Day1에 간 장소 리스트 map 돌림 */}
                    <ul className={styles["day-detail-list"]}>
                        {dayData.tripDayDetail.map((item, index) => (
                            <TripStoryDayPlace key={index} item={item} />
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default TripStoryDay;
