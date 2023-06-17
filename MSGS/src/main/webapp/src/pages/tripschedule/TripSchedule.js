import React, { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";

import style from "./TripSchedule.module.css";

import DayPlan from "../../components/tripschedule/DayPlan";
import DayPlanEditMode from "../../components/tripschedule/DayPlanEditMode";
import SelectedPlace from "../../components/tripschedule/SelectedPlace";
import Map from "../../components/tripschedule/Map";

// export default function TripSchedule({ dateList}) {    <-전 페이지에서 dateList 받아오면.
export default function TripSchedule() {
  const dateList = ["2023.6.22", "2023.6.23", "2023.6.24"];

  const [scrollPosition, setScrollPosition] = useState(0); // 현재 스크롤 위치
  const containerRef = React.useRef(null); // React 컴포넌트에서 DOM 요소에 접근하기 위해 사용

  const [showPrevButton, setShowPrevButton] = useState(false); // 이동 버튼 show state
  const [showNextButton, setShowNextButton] = useState(true);

  useEffect(() => { // 마운트 시, 이벤트 등록
    const container = containerRef.current; // 현재 containerRef가 참조하는 DOM 요소를 가리킴
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => { // cleanup
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []); // component 첫 rendering 시 1회만 실행

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      setShowPrevButton(container.scrollLeft > 0); // container의 가로 스크롤 위치가 0보다 클 때
      setShowNextButton(
        container.scrollLeft < container.scrollWidth - container.clientWidth
		// 오른쪽으로 스크롤할 공간이 남아있다는 것을 의미
		// scrollWidth: 컨테이너 전체의 가로 크기
		// clientWidth: 해당 요소의 내용이 보여지는 영역의 가로 크기
      );
    }
  };

  const prevBtnHandler = () => {
    const container = containerRef.current;
    if (container) {
      const scrollOffset = 325; // 클릭 당 스크롤 이동 범위
      container.scrollTo({
        // 컨테이너 스크롤
        left: scrollPosition - scrollOffset, // 현재 위치 - 클릭 당 스크롤 이동 범위
        behavior: "smooth",
      });
      setScrollPosition(scrollPosition - scrollOffset); // state 업데이트
    }
  };

  const nextBtnHandler = () => {
    const container = containerRef.current;
    if (container) {
      const scrollOffset = 325;
      container.scrollTo({
        left: scrollPosition + scrollOffset,
        behavior: "smooth",
      });
      setScrollPosition(scrollPosition + scrollOffset);
    }
  };

  /*편집모드 전환*/
  const [editMode, setEditMode] = useState(false);

  return (
    <div className={style["container"]}>
      <div className={style["sidebar"]}>
        <div className={style["sidebar-title"]}>
          <p className={style["trip-title"]}>강릉 여행</p>
          <p className={style["travel-period"]}>2023.6.22 ~ 6.28</p>
        </div>
        <Scrollbars
          style={{ height: "100%", width: "100%" }}
          thumbSize={120}
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={1000}
          renderTrackHorizontal={(props) => (
            <div {...props} className={style["track-horizontal"]} />
          )}
          renderThumbHorizontal={(props) => (
            <div {...props} className={style["thumb-horizontal"]} />
          )}
        >
          {/* Day1, 2, 3... 블록 */}
          <div className={style["dayplan-wrapper"]}>
            {editMode === true
              ? //편집모드인 경우
                dateList.map((item, index) => (
                  <DayPlan
                    key={index}
                    orderDay={index + 1}
                    date={item}
                    setEditMode={setEditMode}
                  />
                ))
              : //편집모드가 아닌 경우
                dateList.map((item, index) => (
                  <DayPlanEditMode
                    key={index}
                    orderDay={index + 1}
                    date={item}
                    setEditMode={setEditMode}
                  />
                ))}
          </div>
        </Scrollbars>
      </div>

      <div className={style["map"]}>
        <Map />
      </div>

      <div className={style["selected-place"]}>
        <div className={style["day-wrapper"]}>
          <button
            className={style["day-button"]}
            style={{
              color: "white",
              backgroundColor: "#fc7300",
              border: "solid 1px #fc7300",
            }}
          >
            DAY1
          </button>
          <button className={style["day-button"]}>DAY2</button>
          <button className={style["day-button"]}>DAY3</button>
        </div>

        {showPrevButton && (
          <div
            className={style["selected-item-prev-btn"]}
            onClick={prevBtnHandler}
          >
            왼쪽
          </div>
        )}
        <div className={style["selected-item-wrapper"]} ref={containerRef}>
          {Array.from(
            { length: 7 },
            (
              _,
              index // item이 사용되지 않아, _ 표기
            ) => (
              <SelectedPlace key={index + 1} order={index + 1} />
            )
          )}
        </div>
        {showNextButton && (
          <div className={style["slide-button next"]} onClick={nextBtnHandler}>
            오른쪽
          </div>
        )}
      </div>
    </div>
  );
}
