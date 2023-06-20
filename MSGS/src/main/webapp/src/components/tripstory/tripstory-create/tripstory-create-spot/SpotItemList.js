import React from 'react';
import SpotItem from './SpotItem';

const SpotItemList = ({TripStoryDetailData}) => {

    const {day, dayDate, tripDayDetail} = TripStoryDetailData;

    console.log(tripDayDetail);


    return (
        <div>
            {
              tripDayDetail.map((item, index) => (
                 <SpotItem item={item} num={index}/>
              ))   
            }
        </div>
    );
};

export default SpotItemList;