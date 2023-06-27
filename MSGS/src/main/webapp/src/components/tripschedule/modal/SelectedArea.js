import React from "react";

import stayItems from "../modal-data/TripScheduleAddStayData";
import placeItems from "../modal-data/TripScheduleAddPlaceData";
import styleModalPlace from "./TripScheduleAddPlace.module.css";

import SelectedItem from "./SelectedItem";

const SelectedArea = (props) => {
	const checkedStayItems = props.checkedStay.length > 0
		? props.modalDormList.find(
			(data) => data.contentid === props.checkedStay[ 0 ].contentid)
		: [];


    return (
			<div className={styleModalPlace['selected-items']}>
				{checkedStayItems && (
					<SelectedItem
						isStay={true}
						removeHandler={props.removeHandler}
						id={checkedStayItems.contentid}
						img={checkedStayItems.firstimage2}
						name={checkedStayItems.title}
					/>
				)}
				{/* isChecked={checkedItems?.some((obj) => obj.contentid === data.contentid)} */}
				{props.modalPlaceList
					// .filter((obj) => props.checkedPlaces.includes(obj.contentid))
					.filter((data) => props.checkedPlaces?.some((obj) => obj.contentid === data.contentid))
					.map((place) => (
						<SelectedItem
							key={place.contentid}
							isStay={false}
							removeHandler={props.removeHandler}
							id={place.contentid}
							img={place.firstimage2}
							name={place.title}
						/>
					))}
			</div>
		)
};

export default SelectedArea;
