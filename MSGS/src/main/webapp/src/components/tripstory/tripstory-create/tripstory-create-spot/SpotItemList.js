import React, { useState } from 'react';
import SpotItem from './SpotItem';

const SpotItemList = (props) => {

    const {tripDayDetail} = props.tripDayData;


    return (
        <div>
            {
              tripDayDetail.map((item, index) => (
                 <SpotItem 
                        item={item} 
                        
                 />

              ))   
            }
        </div>
    );
};

export default SpotItemList;