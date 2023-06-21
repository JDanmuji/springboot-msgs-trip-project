import React, { useState } from 'react';
import SpotModal from './SpotModal';
import styles from "./Spot.module.css";
import { Link } from 'react-router-dom';
import StarRating from '../common/StarRating';
import UploadPhotoList from '../tripstory-create-upload/UploadPhotoList';


//여행 장소의 순서, 장소, 장소에 대한 설명이 들어가 있는 곳의 컴포넌트입니다.
const SpotItem = (props) => {

    const {item} = props;

    console.log(item);
    
    const {spotContent, setSpotContent} = useState(item.content);
    const [spotPhotos, setSpotPhotos] = useState(item.img); //선택된 사진 파일들
    const [spotRating, setSpotRating] = useState(item.rating);

    const [isOpen, setIsOpen] = useState(false) //초기값 false

    
    const onOpen = (check) => {
        setIsOpen(check) 
    }

    const modalDisplay = ((!spotContent) || (!spotPhotos) || (!spotRating));

    console.log((!spotPhotos));
    console.log((!spotContent));
    console.log((!spotRating));
  

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
                    <p className={styles['type']}>{item.type}</p>
                    <p className={styles["content"]}>{spotContent}</p> {/* SpotModal로부터 전달받은 텍스트 출력 */}
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
                                            setSpotContent={setSpotContent}
                                            setSpotPhotos={setSpotPhotos}
                                            setSpotRating={setSpotRating}
                                            spotRating={spotRating}
                                            />
                    }
                </div>   
                { 
                
                    modalDisplay && 
                    <div className={styles['day-modal-comment']}>
                        {
                            spotRating && 
                            <div>
                                <StarRating rating={spotRating} setRating={setSpotRating}/>
                            </div>    
                        }
                        {   
                            spotContent &&
                            <div>
                                {spotContent}
                            </div>
                        }
                        {   spotPhotos &&
                            <div>
                                {
                                    spotPhotos.map((photo, index ) => {
                                        console.log('여기 데이터 들어가나?');
                                        <UploadPhotoList photo={photo} index={index} />
                                    })
                                }
                            </div>
                        }
                    </div>}
            </div>
                
       
    );
};

export default SpotItem;