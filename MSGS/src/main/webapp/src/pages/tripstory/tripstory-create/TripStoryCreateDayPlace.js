import React from "react";

import styles from "./TripStoryCreateDay.module.css";

import StarShow from "../../../components/common/StarShow";
import ReviewImg from "../../tripplace/ReviewImg";
import { Link } from "react-router-dom";
import SpotModal from "../../../components/tripstory/tripstory-create/tripstory-create-spot/SpotModal";
import { useState } from "react";
import { useEffect } from "react";

const TripStoryCreateDayPlace = (props) => {
    const publicUrl = process.env.PUBLIC_URL;
    const iconEdit = `${publicUrl}/images/common/icon-edit.png`;

    const item = props.item;
    
    const [itemData, setItemData] = useState({});

    const [spotComment, setSpotComment] = useState('');
    const [spotPhotos, setSpotPhotos] = useState([]); 
    const [spotRating, setSpotRating] = useState(0);

    const [isOpen, setIsOpen] = useState(false) 
    

    
    useEffect(() => {
        setItemData(item);
        setSpotComment(item.comment);
        setSpotPhotos(item.img);
        setSpotRating(item.rating);
    }, [item]);


    const handleSpotContent = (modalComment) => {
        setSpotComment(modalComment);
        setItemData((itemData) =>({
               ...itemData,
            comment : modalComment
        }));
    };

    const onOpen = (check) => {
        setIsOpen(check) 
    }
    
    // const handleSpotRating = (modalRating) => {
    //     setContent(modalContent); 
    // };

    
    
    // const handleSpotPhotos = (modalPhotos) => {
    //     setSpotPhotos(modalContent); 
    // };

    return (
        <li className={styles["day-detail-item"]}>
            <div className={styles["place-text"]}>
                <span className={styles["place-order"]}>
                    {item.order}
                </span>
                <div className={styles["white-space"]}></div>
               

                <div>
                    <h3 className={styles["place-title"]}>{item.title}</h3>
                    <span className={styles["place-subtitle"]}>
                    {item.location} {'|'} {item.type}
                    </span>
                    {/* 별점 출력 컴포넌트 */}
                    <StarShow rating={setSpotRating} height={"1.4rem"} />
                    <p className={styles["place-content"]}>{spotComment}</p>
                    
                </div>
                <div className={styles["write-icon-area"]}>
                    <Link to='#' onClick={() => onOpen(true) }>
                        <img
                                className={styles["write-icon"]}
                                src={iconEdit}
                        />
                    </Link>
                    {
                        isOpen && <SpotModal setIsOpen={ setIsOpen }
                                            spot={item.title}
                                            spotContent={spotComment}
                                            handleSpotContent={handleSpotContent}
                                            spotPhotos={spotPhotos}
                                            setSpotPhotos={setSpotPhotos}
                                            spotRating={spotRating}
                                            setSpotRating={setSpotRating}
                                            />
                    }
                </div>   

            </div>

            {/* 이미지 있을 경우 map 돌림 */}
            {item.reviewImg && (
                <ul className={styles["place-img-list"]}>
                    {/* 장소 사진 리스트 - 장소 상세 리뷰란 컴포넌트 끌어옴 */}
                    <ReviewImg reviewImg={item.reviewImg} length={item.reviewImg.length} />
                </ul>
            )}
        </li>
    );
};

export default TripStoryCreateDayPlace;
