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
    const { contentTypeId, contentId } = useParams();

    // API 데이터 담을 state
    const [commonData, setCommonData] = useState(null);
    const [introData, setIntroData] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    // back-end에서 API 호출
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.post("/api/place/detail", {
                    contentId,
                    contentTypeId,
                });

                setCommonData(response.data.common);
                setIntroData(response.data.intro);
                console.log("common ", response.data.common);
                console.log("intro ", response.data.intro);

                setIsLoaded(true);
            } catch (error) {
                console.log("Error occurred:", error);
            }
        };

        getData();
    }, []);

    return (
        <>
            {!isLoaded ? (
                <Loading />
            ) : (
                <div className={styles["container-wrapper"]}>
                    <LocTop data={commonData} />
                    <LocContainerEvent />

                    {/* <LocSubSection /> */}
                    <LocInfo
                        data={introData}
                        mapY={commonData.mapy}
                        mapX={commonData.mapx}
                        addr={commonData.addr1}
                    />

                    <LocReview />
                    {/* <LocRelated /> */}
                </div>
            )}
        </>
    );
};

export default TripLocDetail;
