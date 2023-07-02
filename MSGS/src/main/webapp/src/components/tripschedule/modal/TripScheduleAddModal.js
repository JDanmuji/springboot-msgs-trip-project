import React, { useState } from "react";

import styleModal from "./TripScheduleAddModal.module.css";

import TripScheduleAddPlace from "./TripScheduleAddPlace";
import SelectedArea from "./SelectedArea";
import Loading from "../../../components/common/Loading";

const TripScheduleAddModal = ({
  orderDay,
  planList,
  planListHandler,
  setAddPlaceModal,
  modalDormList,
  modalPlaceList,
}) => {
  // 현재 모달창 닫기
  const closeModal = () => {
    setAddPlaceModal(false);
  };

  // 숙박-장소 탭 전환
  const [isStaySelected, setIsStaySelected] = useState(true);
  const stayChangeHandler = () => {
    setIsStaySelected(true);
  };
  const placeChangeHandler = () => {
    setIsStaySelected(false);
  };

  const search_loc = {
    31: { 1: "가평", 19: "양평" },
    32: { 1: "강릉", 5: "속초", 7: "양양", 13: "춘천", 16: "홍천" },
    35: { 2: "경주", 23: "포항", 11: "안동" },
    6: "부산",
    38: { 13: "여수", 11: "순천" },
    2: "인천",
    37: { 12: "전주", 2: "군산" },
    39: "제주",
    34: { 14: "태안", 4: "당진", 7: "서산" },
    36: { 17: "통영", 1: "거제", 5: "남해" },
  };

  // 선택된 아이템 담을 배열
  // const [checkedStay, setCheckedStay] = useState([{}])
  const [checkedStay, setCheckedStay] = useState([{}]);
  const [checkedPlaces, setCheckedPlaces] = useState([]);

  // 함수 호출 시 창 띄웠다가 타임아웃 후 제거
  const feedbackHandler = () => {
    //장소 7개 초과하여 담으려는 경우에 호출됨
    setShowFeedback(true);
    setTimeout(() => {
      setShowFeedback(false);
    }, 1500);
  };

  // 숙박 항목의 체크 버튼 클릭 시
  const stayCheckHandler = (isChecked, data) => {
    if (search_loc[data.areacode][data.sigungucode]) {
      data["location"] = search_loc[data.areacode][data.sigungucode];
    } else {
      //부산, 인천, 제주와 같이 도시에 sigungucode가 없는 경우
      data["location"] = search_loc[data.areacode];
    }
    data["isChecked"] = false;
    data["type"] = "숙박";

    if (checkedStay.length == 0) {
      //처음으로 클릭하는 경우
      setCheckedStay([data]);
    } else if (checkedStay[0].contentid === data.contentid) {
      //이미 선택한걸 또 클릭하는 경우
      setCheckedStay([{}]);
    } else {
      setCheckedStay([data]);
    }
  };

  // 장소 항목의 체크 버튼 클릭 시
  const placeCheckHandler = (isChecked, data) => {
    data["location"] = search_loc[data.areacode][data.sigungucode];
    data["isChecked"] = false;
    data["type"] = data.contenttypeid === "12" ? "관광지" : "음식점";

    if (isChecked) {
      if (checkedPlaces.length > 6) {
        feedbackHandler(); //7개 이상 넣을수 없다는 alert창 띄움
      } else {
        setCheckedPlaces((prev) => [...prev, data]); // 선택
      }
    } else {
      setCheckedPlaces(
        checkedPlaces.filter((obj) => obj.contentid !== data.contentid)
      ); // 선택 해제
    }
  };

  // 선택된 아이템 X 클릭 시
  const removeHandler = (isStay, id) => {
    if (isStay) {
      setCheckedStay([{}]);
    } else {
      setCheckedPlaces(checkedPlaces.filter((obj) => obj.contentid !== id)); // 선택 해제
    }
  };

  // 장소 7개 초과 선택 시 경고창
  const [showFeedback, setShowFeedback] = useState(false);
  // const [opacity, setOpacity] = useState(100); // 사라질 때 투명도 변화

  // 선택 완료 버튼 클릭 시
  const confirmSelection = () => {
    //해당 Day 아래에 plan 블록 추가함.
    planListHandler((prevObj) => {
      let updatedObj = { ...prevObj };

      //숙박 추가

	  const stayIndex = updatedObj[orderDay].findIndex(obj => obj.type === '숙박');
	  if (stayIndex !== -1 && Object.keys(checkedStay[0]).length > 0) {
		updatedObj[orderDay][stayIndex] = checkedStay[0];
	  } else if(
		stayIndex === -1 && Object.keys(checkedStay[0]).length > 0) {
		updatedObj[orderDay].push(checkedStay[0]);
	  }

    //   Object.keys(checkedStay[0]).length > 0 &&
    //     updatedObj[orderDay].push(checkedStay[0]);

      //장소 추가
	  const filteredPlaceArr = updatedObj[orderDay].filter(obj => obj.type === '관광지' || obj.type === '음식점'  );


	  if (filteredPlaceArr.length + checkedPlaces.length < 8) {
		checkedPlaces.length > 0 &&
		  checkedPlaces.map((item) => {
			item["placeOrder"] = 1;
			updatedObj[orderDay].push(item);
		  });
		  setAddPlaceModal(false);

	  } else if (filteredPlaceArr.length + checkedPlaces.length >= 8) {
		feedbackHandler()
	  }


      let maxPlaceOrder = 0;
      if (updatedObj[orderDay]) {
        updatedObj[orderDay] = updatedObj[orderDay].map((item, index) => {
          maxPlaceOrder = item.placeOrder ? maxPlaceOrder + 1 : maxPlaceOrder;
          return {
            ...item,
            order: index + 1,
            placeOrder: item.placeOrder ? maxPlaceOrder : null,
          };
        });
      }

      return updatedObj;
    });
    //모달창 닫기
    // setAddPlaceModal(false);
  };

  return (
    <div className={styleModal["modal-container"]}>
      <div className={styleModal["modal-wrapper"]}>
        <div className={styleModal["modal-top"]}>
          {/* Search Container */}
          <div className={styleModal["modal-search"]}>
            <span>
              <img
                className={styleModal["icon-search"]}
                src={process.env.PUBLIC_URL + "images/icon_search.png"}
                alt="icon_search"
              />
            </span>
            <div>
              <input
                className={styleModal["modal-input"]}
                placeholder="관광지/맛집/숙소 검색"
              />
            </div>
          </div>
          <img
            className={styleModal["icon-close"]}
            src={process.env.PUBLIC_URL + "/images/icon_close.png"}
            alt="icon_close"
            onClick={closeModal}
          />
        </div>

        {/* Stay or Place Container */}
        <div className={styleModal["modal-stay-place"]}>
          <div
            className={`${styleModal["tab-btn"]} ${
              isStaySelected && styleModal["selected"]
            }`}
            onClick={stayChangeHandler}
          >
            <img
              src={process.env.PUBLIC_URL + "images/icon_stay.png"}
              alt="icon_stay"
            />
            <span>숙박</span>
          </div>

          <div
            className={`${styleModal["tab-btn"]} ${
              isStaySelected || styleModal["selected"]
            }`}
            onClick={placeChangeHandler}
          >
            <img
              src={process.env.PUBLIC_URL + "images/icon_place.png"}
              alt="icon_place"
            />
            <span>장소</span>
          </div>
        </div>

        <div className={styleModal["stay-place-title"]}>
          DAY 1 추천 {isStaySelected ? "숙박" : "장소"}
        </div>

        {modalDormList ? (
          <TripScheduleAddPlace
            isStaySelected={isStaySelected}
            checkedItems={isStaySelected ? checkedStay : checkedPlaces}
            checkHandler={isStaySelected ? stayCheckHandler : placeCheckHandler}
            modalDormList={modalDormList}
            modalPlaceList={modalPlaceList}
          />
        ) : (
          <Loading />
        )}

        <SelectedArea
          checkedStay={checkedStay}
          checkedPlaces={checkedPlaces}
          removeHandler={removeHandler}
          modalDormList={modalDormList}
          modalPlaceList={modalPlaceList}
        />

        <button
          className={styleModal["select-complete-btn"]}
          onClick={confirmSelection}
        >
          선택 완료
        </button>
      </div>

      {showFeedback && (
        <div
          className={styleModal["feedback-box"]}
          // style={{ opacity: `${opacity}` }}
        >
          장소는 7개까지 선택할 수 있습니다.
        </div>
      )}
    </div>
  );
};

export default TripScheduleAddModal;
