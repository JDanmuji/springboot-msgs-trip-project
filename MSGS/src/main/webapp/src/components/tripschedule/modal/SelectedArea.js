import React from "react";

import stayItems from "../modal-data/TripScheduleAddStayData";
import placeItems from "../modal-data/TripScheduleAddPlaceData";
import styleModalPlace from "./TripScheduleAddPlace.module.css";

import SelectedItem from "./SelectedItem";

const SelectedArea = (props) => {
    const checkedStayItems = stayItems.find(
        (data) => data.id === props.checkedStay
    );

    return (
        <div className={styleModalPlace["selected-items"]}>
            {checkedStayItems && (
                <SelectedItem
                    stay={true}
                    img={checkedStayItems.img}
                    name={checkedStayItems.name}
                />
            )}

            {placeItems
                .filter((data) => props.checkedPlaces.includes(data.id))
                .map((place) => (
                    <SelectedItem
                        key={place.id}
                        img={place.img}
                        name={place.name}
                    />
                ))}
        </div>
    );
};

export default SelectedArea;
