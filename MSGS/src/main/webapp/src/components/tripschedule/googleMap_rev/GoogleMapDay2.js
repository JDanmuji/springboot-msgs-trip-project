import React from "react";

// import styles from "./TripStoryDay.module.css";

// import TripStoryDayPlace from "./TripStoryDayPlace";
import GoogleMapPolyline from "../../../components/tripstory/tripstory-details/GoogleMapPolyline";
import LocGoogleMap from "../../../pages/tripplace/LocGoogleMap";

const GoogleMapDay2 = (props) => {
    const dayData = props.planList;

    // console.log("==========selectedCity===============  ", props.selectedCity);
    // console.log("============planList=============  ", props.planList);

    const mapDataList = [];
    let placeOrder = 1;

    // 지도에 표기할 좌표 데이터 추출
    dayData
        ?.filter((item) => item.type !== "memo")
        .forEach((item, index) => {
            const placeData = {
                order: item.order,
                placeOrder: item.placeOrder,
                type: item.type === "숙박" ? "dorm" : "place",
                center: { lat: item.mapy, lng: item.mapx },
            };
            mapDataList.push(placeData);

            // if (item.type === "place") {
            //     placeOrder += 1;
            // }
        });

    return (
        <>
            {mapDataList.length === 0 ? (
                <LocGoogleMap
                    center={{
                        lat: props.selectedCity.mapLat,
                        lng: props.selectedCity.mapLon,
                    }}
                    width={"130rem"}
                    height={"70rem"}
                />
            ) : (
                <GoogleMapPolyline
                    mapDataList={mapDataList}
                    width={"130rem"}
                    height={"70rem"}
                />
            )}
        </>
    );
};

export default GoogleMapDay2;
