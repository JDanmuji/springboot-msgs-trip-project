import React, { useState } from 'react';
import SpotModal from './SpotModal';
import styles from "./Spot.module.css";
import { Link } from 'react-router-dom';
import StarRatingRead from '../common/StarRatingRead';
import UploadPhotoList from '../tripstory-create-upload/UploadPhotoList';
import { useEffect } from 'react';
import StarShow from '../../../common/StarShow';


//여행 장소의 순서, 장소, 장소에 대한 설명이 들어가 있는 곳의 컴포넌트입니다.
const SpotItem = (props) => {

    const item = props.item;

    const [spotContent, setSpotContent] = useState('');
    const [spotPhotos, setSpotPhotos] = useState([]); 
    const [spotRating, setSpotRating] = useState(0);

    const [isOpen, setIsOpen] = useState(false) 
    

    
    useEffect(() => {
        setSpotContent(item.content);
        setSpotPhotos(item.img);
        setSpotRating(item.rating);
    }, [item]);



    const onOpen = (check) => {
        setIsOpen(check) 
    }

    const modalDisplay = ((!spotContent) || (spotPhotos.length > 0) ||  (!(spotRating < 1)));

    return (
            <div className={styles["spot-item"]}>
                <div className={styles["schedule-line-wrapper"]}>
                    <div className={styles["schedule-line-left"]}></div>
                    <div className={styles["order-label-wrapper"]}>
                        <div className={styles["order-label"]}>{item.scheduleOrder}</div>
                    </div>
                    <div className={styles["schedule-line-right"]}></div>
                </div>
                <div className={styles["where-div"]}>
                    <p className={styles['title']}>{item.title}</p>
                    <p className={styles['type']}>{item.subtitle}</p>
                    { 
                
                        modalDisplay && 
                        <div className={styles['spot-modal-comment']}>
                            {
                                (!(spotRating < 1))&& 
                                (
                                    <div>
                                        <StarShow rating={item.rating} height={"1.4rem"} />
                                    </div>
                                )
                            }
                            {   
                                spotContent &&
                                (
                                    <div>
                                        {spotContent}
                                    </div>
                                )
                            }
                           
                        </div>
                    }    
                    
                    
                    
                </div>
                <div>
                         {   
                            
                                (spotPhotos.length > 0) &&
                                
                                    
                                    <div className={styles['upload-photo-area']}>
                                        {
                                              spotPhotos.map((photo, index) => (
                                                <img
                                                  key={index}
                                                  src={photo}
                                                  alt={`Uploaded Photo ${index + 1}`}
                                                  className={styles['uploaded-photo']}
                                                />
                                              ))
                                           
                                        }
                                    </div>
                                    
                                
                            }
                        
                        </div>
                
                <div className={styles["write-icon-area"]}>
                    <Link to='#' onClick={() => onOpen(true) }>
                        <img
                                className={styles["write-icon"]}
                                src="https://cdn.imweb.me/upload/596c7f74e6a7f.png"
                        />
                    </Link>
                    {
                        isOpen && <SpotModal setIsOpen={ setIsOpen }
                                            spot={item.title}
                                            spotContent={spotContent}
                                            setSpotContent={setSpotContent}
                                            spotPhotos={spotPhotos}
                                            setSpotPhotos={setSpotPhotos}
                                            spotRating={spotRating}
                                            setSpotRating={setSpotRating}
                                            />
                    }
                </div>   
                
            </div>
                
       
    );
};

export default SpotItem;