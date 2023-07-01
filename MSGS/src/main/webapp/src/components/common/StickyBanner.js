import React, { useEffect, useState } from "react";

import Cookies from "js-cookie";

import styles from "./StickyBanner.module.css";
import StickyBannerPlan from "./StickyBannerPlan";
import { fetchMyTripScheduleList } from "../../pages/mypage/mypage-data/myTripScheduleData";

const StickyBanner = () => {
  // API 데이터 담을 state
  const [data, setData] = useState([]);

  const tokenValue = Cookies.get("token");

  useEffect(() => {
    // back-end에서 API 호출
    const fetchData = async () => {
      const fetchedData = await fetchMyTripScheduleList(tokenValue);
      setData(fetchedData);
    };

    fetchData();
  }, [tokenValue]);

//   const bannerData = [
//     {
//       destination: data[0].cityName,
//       startDate: new Date("2023/06/19"),
//       endDate: new Date("2023/06/14"),
//     },
//     {
//       destination: "부산",
//       startDate: new Date("2023/07/16"),
//       endDate: new Date("2023/07/20"),
//     },
//   ];

//   console.log(bannerData[0].endDate - bannerData[0].startDate);

  return (
    <div className={styles["banner-area"]}>
      <div className={styles["sticky-banner"]}>
        <p className={styles["sticky-banner-title"]}>예정된 여행</p>
        {data.map((data, index) => (
          <StickyBannerPlan key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default StickyBanner;
