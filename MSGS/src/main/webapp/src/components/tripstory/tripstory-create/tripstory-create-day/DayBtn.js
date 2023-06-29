import React, { useEffect, useState } from 'react';
import styles from './DayBtn.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { tripStoryActions } from '../../../../pages/tripstory/tripstory-data/TripStoryReducer';
import DateSummary from '../../../../pages/tripstory/tripstory-create/DateSummary';
import SpotItemList from '../tripstory-create-spot/SpotItemList';

//day 선택 버튼입니다.

const DayBtn = (props) => {
  const dayData = props.dayData;


  const indexNum = (index) => {
      return (index+1);
  };

  

  return (
    <div>
   

    
    </div>
  );
};

export default DayBtn;
