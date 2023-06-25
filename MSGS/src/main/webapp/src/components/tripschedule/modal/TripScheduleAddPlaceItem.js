import React from "react";

import stylePlaceItem from "./TripScheduleAddPlaceItem.module.css";

// 장소 데이터 불러오기
const TripScheduleAddPlaceItem = ({checkHandler, isStaySelected, checkedItems, isChecked, data}) => {
    const checkClickHandler = () => {
        checkHandler(!isChecked, data);
    };

    // search_loc[areacode][sigungucode]로 location값 찾음
    const search_loc = {
        31: { 1: '가평', 19: '양평' },
        32: { 1: '강릉', 5: '속초', 7: '양양', 13: '춘천', 16: '홍천' },
        35: { 2: '경주', 23:'포항', 11:'안동' },
        6: '부산',
        38: { 13: '여수', 11: '순천' },
        2: '인천',
        37: { 12: '전주', 2: '군산' },
        39: '제주',
        34: { 14: '태안', 4: '당진', 7: '서산' },
        36: { 17: '통영', 1: '거제', 5: '남해' },
    }


    return (
			<div className={stylePlaceItem['place-item']} onClick={checkClickHandler}>
				<div className={stylePlaceItem['place-item-left']}>
					{/* <div className={stylePlaceItem["place-img-div"]}> */}
					<img className={stylePlaceItem['place-img']} src={data.firstimage2} alt='stayImg{id}' />
					{/* </div> */}
					<div className={stylePlaceItem['place-item-info']}>
						<div className={stylePlaceItem['place-item-name']}>{data.title}</div>
						<div className={stylePlaceItem['place-item-loc-type']}>
							{/* <p>{data.location}</p> */}
							{/* <p>{'숙박or관광지or음식점'}</p> */}
                            <p>{data.contenttypeid === '32' ? '숙박'
                            : data.contenttypeid === '12' ? '관광지' : '음식점'}</p>
							<p>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
							<p>{search_loc[data.areacode][data.sigungucode]}</p>
						</div>
					</div>
				</div>

				<div className={`${stylePlaceItem['check-div']} ${isChecked ? stylePlaceItem['checked'] : ''}`}>
					{isChecked && <img src={`${process.env.PUBLIC_URL}/images/icon_check.png`} alt={data.contentid} />}
				</div>
			</div>
		)
};

export default TripScheduleAddPlaceItem;
