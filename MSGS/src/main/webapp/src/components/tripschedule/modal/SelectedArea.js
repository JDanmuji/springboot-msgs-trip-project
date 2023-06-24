import React from "react";

import stayItems from "../modal-data/TripScheduleAddStayData";
import placeItems from "../modal-data/TripScheduleAddPlaceData";
import styleModalPlace from "./TripScheduleAddPlace.module.css";

import SelectedItem from "./SelectedItem";

const SelectedArea = (props) => {
    const checkedStayItems = props.modalDormList.find(
        (data) => data.contentid === props.checkedStay
    );

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

				{props.modalPlaceList
					.filter((data) => props.checkedPlaces.includes(data.contentid))
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
