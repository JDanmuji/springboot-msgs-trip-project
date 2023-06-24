import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import styles from "./TripStoryDetail.module.css";
import Loading from "../../../components/common/Loading";
import LocGoogleMap from "../../../pages/tripplace/LocGoogleMap";
import TripStoryDayPlace from "./TripStoryDayPlace";

const TripStoryDetail = () => {
    // 파라미터에서 데이터 가져옴
    const { storyId } = useParams();

    // API 데이터 담을 state
    const [data, setData] = useState(null);

    // back-end에서 API 호출
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.post("/tripstory/getStoryDetail", {
                    storyId,
                });
                setData(response.data);
            } catch (error) {
                console.log("Error occurred:", error);
            }
        };
        getData();
    }, []);

    // 이미지 엑박 처리
    const [imageError, setImageError] = useState(false);
    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <>
            {!data ? (
                <Loading />
            ) : (
                <div className={styles["width-wrapper"]}>
                    {!imageError && ( // 이미지 엑박일 경우 띄우지 않음
                        <div className={styles["thumbnail-img-wrap"]}>
                            <img
                                className={styles["thumbnail-img"]}
                                src={data.firstimage}
                                alt={data.title}
                                onError={handleImageError}
                            />
                        </div>
                    )}
                    <h1 className={styles["story-title"]}>{data.title}</h1>
                    <span className={styles["story-comment"]}>
                        {data.comment}
                    </span>

                    <h2 className={styles["day-number"]}>
                        Day 1 | {data.date_list[0]}
                    </h2>

                    {/* 각 day별 경로 표시된 구글맵 */}
                    <LocGoogleMap // 경로 표시되는 걸로 새 컴포넌트 만들어야 함
                        center={{
                            lat: parseFloat(
                                data.tripDetailList[0].tripDayDetail[0].mapLat
                            ),
                            lng: parseFloat(
                                data.tripDetailList[0].tripDayDetail[0].mapLon
                            ),
                        }}
                    />

                    {/* Day1에 간 장소 리스트 map 돌림 */}
                    <ul className={styles["day-detail-list"]}>
                        {data.tripDetailList[0].tripDayDetail.map(
                            (item, index) => (
                                <TripStoryDayPlace key={index} item={item} />
                            )
                        )}
                    </ul>
                </div>
            )}
        </>
    );
};

export default TripStoryDetail;
