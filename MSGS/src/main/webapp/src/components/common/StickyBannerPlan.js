import React from "react";

import citiesData from "../../pages/tripschedule/tripschedule-details/tipschedule1/CitiesData";

import styles from "./StickyBanner.module.css";

const StickyBannerPlan = ({ data, dDaysHandler }) => {
  console.log("==================================", data);

  const dateArray = data.dateList.split(",");
  const today = new Date();

  const startDay = dateArray[0];
  const endDay = dateArray[dateArray.length - 1];

  const startDate = new Date(startDay);
  const endDate = new Date(endDay);
  const timeDiff = startDate.getTime() - today.getTime();
  const dDay = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) * -1;

  dDaysHandler(dDay);

  // regDate, modDate 형식변환(mm.dd(weekday))
  const formatDate = (date) => {
    const dateString = new Date(date);
    const month = dateString.getMonth() + 1;
    const day = dateString.getDate();
    const weekday = dateString.toLocaleDateString("ko-KR", {
      weekday: "short",
    });
    return `${month}.${day}(${weekday})`;
  };

  // D-day 계산 후, 지나지 않은 데이터만 추출
  console.log("=========dDay=============", dDay);

  // const today = new Date();
  // const timeDiff = props.data.startDate.getTime() - today.getTime();
  // const dDay = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) * -1;

  // const startMonth = props.data.startDate.getMonth() + 1;
  // const startDate = props.data.startDate.getDate();
  // const startWeekday = props.data.startDate.toLocaleDateString("ko-KR", {
  //     weekday: "short",
  // });
  // const endMonth = props.data.endDate.getMonth() + 1;
  // const endDate = props.data.endDate.getDate();
  // const endWeekday = props.data.endDate.toLocaleDateString("ko-KR", {
  //     weekday: "short",
  // });

  // engTitle, imgURL 불러오기
  const selectedCityName = data.cityName;
  const filteredData = citiesData.filter(
    (cityData) => cityData.areaTitle === selectedCityName
  );
  const imageUrl = filteredData[0].imageUrl;

  return (
    dDay <= 0 && (
      <div className={styles["banner-plan"]}>
        <div className={styles["plan-destination"]}>
          <img src={imageUrl} alt="cityName_url" />
          <div>
            <span>{data.cityName.substring(0, 2)}</span>
            <span>D{dDay < 0 ? dDay : dDay === 0 ? "-day" : `+${dDay}`}</span>
          </div>
        </div>
        <span className={styles["plan-date"]}>
          {formatDate(startDay)} - {formatDate(endDay)}
          {/* {startMonth}.{startDate}({startWeekday}) - {endMonth}.{endDate}({endWeekday}) */}
        </span>
      </div>
    )
  );
};

export default StickyBannerPlan;
