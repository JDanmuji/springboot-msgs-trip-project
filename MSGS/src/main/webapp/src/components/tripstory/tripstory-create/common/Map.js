import React from "react";
import styles from "../tripstory-create-day/DayModal.module.css";
import GoogleMapPolyline from "../../tripstory-details/GoogleMapPolyline";


const Map = (props) => {
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

                </>
            )}
        </div>
    );
};

export default Map;
