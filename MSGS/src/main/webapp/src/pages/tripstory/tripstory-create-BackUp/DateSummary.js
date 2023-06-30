import React, { useState } from 'react';
import styles from './DateSummary.module.css';
import DayModal from '../../../components/tripstory/tripstory-create/tripstory-create-day/DayModal';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tripStoryActions  } from '../tripstory-data/TripStoryReducer';
import SpotItemList from '../../../components/tripstory/tripstory-create/tripstory-create-spot/SpotItemList';
import SpotItem from '../../../components/tripstory/tripstory-create/tripstory-create-spot/SpotItem';

//tripstory의 day0, 날짜, 글작성 아이콘 나오는 한 줄의 div 컴포넌트입니다.


const DateSummary = (props) => {
    
    const dayData = props.dayData;
    const day = props.day;


    
    const [isOpen, setIsOpen] = useState(false) //초기값 false
    const [content, setContent] = useState(dayData.content) //초기값 false
    
    

    
    const handleSpotContent = (modalContent) => {
        setContent(modalContent); 
    };

    const onOpen = (check) => {
        setIsOpen(check) 
    }

    useEffect(() => {
        
    }, []);

    return (
        <>

            <div className={styles['date-summary']}>
                <div className={styles['trip-date']}>
                    <h5>{'DAY' + day}</h5>
                    <h5>{dayData.dayDate}</h5>
                </div>
                <Link to='#' onClick={() => onOpen(true) }>
                    <img
                            className={styles["write-icon"]}
                            src="https://cdn.imweb.me/upload/596c7f74e6a7f.png"
                    />
                </Link>
                {
                    isOpen && 
                    <DayModal setIsOpen={ setIsOpen } handleSpotContent={ handleSpotContent } day={day} content={content} />
                }
            </div>
            { 
                <div className={styles['day-modal-comment']}>
                    {dayData.content}
                </div>
            }
            
            {
                <ul>
                {
                    dayData.tripDayDetail.map((item, index) => (
                        <SpotItem key={index} item={item} />
                    ))   
                }
                </ul>
              }
        </>

        

        
    );
};

export default DateSummary;
