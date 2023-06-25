import React from "react";

import styles from "./TripStoryDay.module.css";

import TripStoryDayPlace from "./TripStoryDayPlace";
import LocGoogleMap from "../../tripplace/LocGoogleMap";

const TripStoryDay = (props) => {
    const dayData = props.dayData;

    return (
        <div>
            <h2 className={styles["day-number"]}>
                Day {dayData.dayCount} | {dayData.dayDate}
            </h2>
            <p className={styles["day-content"]}>{dayData.content}</p>

            {dayData.tripDayDetail && (
                <>
                    {/* 각 day별 경로 표시된 구글맵 */}
                    <LocGoogleMap // 경로 표시되는 걸로 새 컴포넌트 만들어야 함
                        center={{
                            lat: parseFloat(dayData.tripDayDetail[0].mapLat),
                            lng: parseFloat(dayData.tripDayDetail[0].mapLon),
                        }}
                    />

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
