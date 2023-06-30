import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import styles from "./LocContainer.module.css";

import LocTop from "./LocTop";
import LocContainerEvent from "./LocContainerEvent";
import LocSubSection from "./LocSubSection";
import LocInfo from "./LocInfo";
import LocReview from "./LocReview";
import LocRelated from "./LocRelated";
import Loading from "../../components/common/Loading";

const TripLocDetail = () => {
    // 파라미터 값 가져오기
    const { contentTypeId, contentId, mapX, mapY } = useParams();

    // API 데이터 담을 state
    const [data, setData] = useState(null);

    // back-end에서 API 호출
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.post("/api/place/detail", {
                    contentTypeId,
                    contentId,
                });

                setData(response.data);
                console.log(response.data);
            } catch (error) {
                console.log("Error occurred:", error);
            }
        };

        getData();
    }, []);

    return (
        <>
            {!data ? (
                <Loading />
            ) : (
                <div className={styles["container-wrapper"]}>
                    <LocTop data={data} />
                    <LocContainerEvent />

                    {/* <LocSubSection /> */}
                    <LocInfo data={data} mapX={mapX} mapY={mapY} />

                    <LocReview />
                    <LocRelated />
                </div>
            )}
        </>
    );
};

export default TripLocDetail;
