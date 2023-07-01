import React from "react";

import styleModalPlace from "./TripScheduleAddPlace.module.css";
// import stayItems from "../modal-data/TripScheduleAddStayData";
// import placeItems from "../modal-data/TripScheduleAddPlaceData";

import TripScheduleAddPlaceItem from "./TripScheduleAddPlaceItem";

const TripScheduleAddPlace = ({ checkedItems, ...props }) => {
    const items = props.isStaySelected ? props.modalDormList : props.modalPlaceList
		console.log(typeof(checkedItems))
		console.log(checkedItems)

    return (
			<div className={styleModalPlace['trip-schedule-add-place']}>
				{items.map((data) => 
					<TripScheduleAddPlaceItem
						key={data.contentid}
						data={data}
						isStaySelected={props.isStaySelected}
						checkedItems={checkedItems}
						checkHandler={props.checkHandler}
						isChecked={checkedItems?.some(obj => obj.contentid === data.contentid)}
						// isChecked={props.checkedItems?.includes(data.contentid)}
					/>
				)}
			</div>
		)
};

export default TripScheduleAddPlace;
