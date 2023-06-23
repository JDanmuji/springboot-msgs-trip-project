import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import styles from "./StayDetail.module.css";
import Loading from "../../../components/common/Loading";
import LocGoogleMap from "../../../pages/tripplace/LocGoogleMap";

const StayDetail = () => {
    // 파라미터에서 contentId 가져옴
    const { contentId } = useParams();

    // API 데이터 담을 state
    const [data, setData] = useState(null);
    console.log(data);

    // 뒷단에서 API 호출
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.post("/api/stay/detail", {
                    contentId,
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

    // 숙소 편의시설 데이터 처리
    const InfoItem = ({ label, value }) => {
        return (
            <div className={styles["facility-item"]}>
                <span className={styles["facility-label"]}>{label}</span>
                <span className={styles["facility-value"]}>
                    {!value || value === "0" ? "없음" : value}
                </span>
            </div>
        );
    };

    return (
        <>
            {!data ? (
                <Loading />
            ) : (
                <div className={styles["width-wrapper"]}>
                    <h1 className={styles["stay-title"]}>{data.title}</h1>
                    <span className={styles["stay-addr"]}>{data.addr1}</span>

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

                    <h2 className={styles["h2-title"]}>숙소 편의시설</h2>
                    <div className={styles["facility-list"]}>
                        <InfoItem label="식당" value={data.foodplace} />
                        <InfoItem label="세미나실" value={data.seminar} />
                        <InfoItem label="피트니스 센터" value={data.fitness} />
                        <InfoItem label="노래방" value={data.karaoke} />
                        <InfoItem label="공용 PC실" value={data.publicpc} />
                        <InfoItem label="사우나" value={data.sauna} />
                        <InfoItem label="공용샤워실" value={data.publicbath} />
                        <InfoItem label="바베큐" value={data.barbecue} />
                        <InfoItem label="캠프파이어" value={data.campfire} />
                        <InfoItem label="기타 시설" value={data.subfacility} />
                    </div>

                    <h2 className={styles["h2-title"]}>서비스</h2>
                    <div className={styles["facility-list"]}>
                        <InfoItem label="주차" value={data.parkinglodging} />
                        <InfoItem label="픽업 서비스" value={data.pickup} />
                        <InfoItem label="객실내 취사" value={data.chkcooking} />
                    </div>

                    {/* 숙소 위치 표시된 구글맵 */}
                    <h2 className={styles["h2-title"]}>숙소 위치</h2>
                    <LocGoogleMap
                        center={{
                            lat: parseFloat(data.mapy),
                            lng: parseFloat(data.mapx),
                        }}
                    />
                </div>
            )}
        </>
    );
};

export default StayDetail;
