import React, { useEffect, useState } from 'react';
import styles from './DayBtn.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { tripStoryActions } from '../../../../pages/tripstory/tripstory-data/TripStoryReducer';
import DateSummary from '../../../../pages/tripstory/tripstory-create/DateSummary';
import SpotItemList from '../tripstory-create-spot/SpotItemList';

//day 선택 버튼입니다.

const DayBtn = ({getDaySelect, dayBtn}) => {

  

  const indexNum = (index) => {
      return (index+1);
  };

  const tripDetailList = useSelector((state) => state.tripStory.tripDetailList);
  
  
  
  return (
    <div>
    <div className={styles['day-btn-list']}>
      
      {
        tripDetailList.map((items, index)=>(
          
          <div key={indexNum(index)}
              className={`${styles['day-btn']} ${(dayBtn-1) === index ? styles.active : ''}`}
              onClick={()=> getDaySelect(indexNum(index)) }
          >
            <Link to='#'>{ 'DAY' + indexNum(index) }</Link>
          </div>
        ))
      }

    </div>
    <DateSummary dayBtn={dayBtn}  />
    
    </div>
  );
};

export default DayBtn;
