import React, { useState } from "react";

import styles from "./TripStoryCreateDay.module.css";

import TripStoryCreateDayPlace from "./TripStoryCreateDayPlace";
import GoogleMapPolyline from "../../../components/tripstory/tripstory-details/GoogleMapPolyline";
import { Link } from "react-router-dom";
import DayModal from "../../../components/tripstory/tripstory-create/tripstory-create-day/DayModal";
import { useEffect } from "react";
import Loading from "../../../components/common/Loading";

const TripStoryCreateDay = (props)=> {
    
    const {day, date, dailyComment, setDailyComment, storyList, setStoryList} = props;
    const publicUrl = process.env.PUBLIC_URL;
    const iconEdit = `${publicUrl}/images/common/icon-edit.png`;


    const [isOpen, setIsOpen] = useState(false) //초기값 false
    const [dayComment, setDayComment]    = useState('');
    const [daySpotList, setDaySpotList]    = useState([]);

    
    useEffect(() => {
        
        setDayComment(dailyComment[(day+1)]);
        setDaySpotList(storyList[(day+1)]);
    
    },[dailyComment, storyList, day ]);
    

    const handleSpotContent = (modalContent) => {
        let commentDayNum = (day+1);

        setDailyComment((dailyComment) => ({
            ...dailyComment,
            [commentDayNum] : modalContent
          }));

        
            
         
    };

    const onOpen = (check) => {
        setIsOpen(check) 
    }

console.log(daySpotList)

    return (

    <>
    { 
  (
        <div>
            <div className={styles["write-day-header"]}>
                <h2 className={styles["day-number"]}>
                    Day {(day+1)} | {date}
                </h2>
                <Link to='#' onClick={() => onOpen(true) }>
                    <img
                            className={styles["write-icon"]}
                            src={iconEdit}
                    />
                </Link>
            </div>
                {
                    isOpen && 
                    <DayModal setIsOpen={ setIsOpen } handleSpotContent={ handleSpotContent } day={(day+1)} content={dayComment} />
                }
            {
                dayComment && (
                    <p className={styles["day-content"]}>{dayComment}</p>
                )
            }
            {
               
                      
               daySpotList &&  (      
                        <ul className={styles["day-detail-list"]}>
                            {
                                daySpotList.map((item, index) => (
                                    
                                    <TripStoryCreateDayPlace key={index} item={item} /> 
                                    
                                
                                    
                                ))
                            }
                        </ul>
                    ) 
            }
        </div>
        )
        }
        </>
    );
};

export default TripStoryCreateDay;

