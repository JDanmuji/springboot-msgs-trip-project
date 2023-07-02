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
    // 유저 아이디 가져오기
    // const userId = Cookies.get("token");
    // const userId = "0f82a90f9f96402";
    const userId = "M000006";

    // 파라미터 값 가져오기
    const { areaCode, contentTypeId, contentId } = useParams();

    // API 데이터 담을 state
    const [commonData, setCommonData] = useState(null);
    const [introData, setIntroData] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    // 장소 정보 데이터 호출
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.post("/api/place/detail", {
                    areaCode,
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
                    <LocInfo commonData={commonData} introData={introData} />

                    <LocReview
                        data={commonData}
                        contentTypeId={contentTypeId}
                        contentId={contentId}
                        userId={userId}
                    />
                    {/* <LocRelated /> */}
                </div>
            )}
        </>
    );
};

export default TripLocDetail;
