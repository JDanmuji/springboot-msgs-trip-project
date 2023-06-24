import React, { useState } from 'react';
import SpotItem from './SpotItem';
import { useSelector } from 'react-redux';

const SpotItemList = (props) => {
    const {tripDayDetail} = props;
    
    
    const tripDaySpotDetail = tripDayDetail.tripDayDetail;
    return (
        <div>
            {
              tripDaySpotDetail.map((item, index) => (
                 <SpotItem 
                        item={item} 
                        
                 />

              ))   
            }
        </div>
    );
};

export default SpotItemList;