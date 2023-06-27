import React, { useEffect, useState } from "react";
import axios from "axios";

import styles from "./Stay.module.css";

import StayItem from "./StayItem";
import Loading from "../../../components/common/Loading";
import { useInView } from "react-intersection-observer";

const StayList = () => {
    // API 데이터 담을 state
    const [data, setData] = useState([]);

    const [pageNo, setPageNo] = useState(1); // 현재 페이지 번호
    const [ref, inView] = useInView();

    // back-end에서 API 호출
    const getData = async () => {
        try {
            const response = await axios.post("/api/stay/list", {
                pageNo,
            });
            const items = response.data;
            console.log(items.length);

            setData((prevData) => [...prevData, ...items]);
            setPageNo((prevPageNo) => prevPageNo + 1);
        } catch (error) {
            console.log("Error occurred:", error);
        }
    };

    useEffect(() => {
        // inView가 true 일때만 실행한다.
        if (inView) {
            getData();
        }
    }, [inView]);

    if (!data) {
        return <Loading />;
    } else {
        return (
            <div className={styles["stay-page-wrapper"]}>
                <span className={styles["h1-wrapper"]}>
                    <h1 className={styles["stay-page-h1"]}>숙박 정보</h1>
                    <img
                        className={styles["stay-page-h1-img"]}
                        src={`${process.env.PUBLIC_URL}/images/icon_stay.png`}
                    />
                </span>

                <span className={styles["h2-wrapper"]}>
                    <h2 className={styles["stay-page-h2"]}>
                        즐거운 여행을 마무리할 숙소 정하기
                    </h2>
                </span>

                <div className={styles["width-wrapper"]}>
                    {data.map((item, index) => (
                        <StayItem
                            key={item.contentid}
                            item={item}
                            pageNo={pageNo - 1}
                        />
                    ))}
                </div>

                {/* 무한스크롤 */}
                <div ref={ref}></div>
            </div>
        );
    }
};
export default StayList;
