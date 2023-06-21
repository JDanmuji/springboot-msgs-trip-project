import React, { useState } from 'react';
import SpotModal from './SpotModal';
import styles from "./Spot.module.css";
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
import StarRating from '../common/StarRating';
import UploadPhotoList from '../tripstory-create-upload/UploadPhotoList';
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b


//여행 장소의 순서, 장소, 장소에 대한 설명이 들어가 있는 곳의 컴포넌트입니다.
const SpotItem = (props) => {
<<<<<<< HEAD
    const [isOpen, setIsOpen] = useState(false) //초기값 false
    const [spotContent, setSpotContent] = useState(""); // SpotModal로부터 전달받은 텍스트
    const [selectedPhotos, setSelectedPhotos] = useState([]); //선택된 사진 파일들

    const onOpen = () => {
        setIsOpen(true) 
    }

    //상태변수와 함수는 같이 있어야 한다.
    const onClose = () => {
        setIsOpen(false)
    }

    const handleSpotContent = (content, photos) => {
        setSpotContent(content); // SpotModal로부터 전달받은 텍스트 설정
        setSelectedPhotos(photos);
    };

    // function resultHtml() {
    //     if (props.id === 1) {
    //       return (
    //         <div className={styles["order-label-wrapper"]}>
    //           <div className={styles["order-label"]}>{props.id}</div>
    //         </div>
    //       );
    //     } else {
    //       return (
    //         <>
    //           <div className={styles["order-label-wrapper"]}>
    //             <div className={styles["order-label"]}>{props.id}</div>
    //           </div>
    //           {/* <div className={styles["distance-label-wrapper"]}>
    //             <div className={styles["distance-label"]}>1.6km</div>
    //           </div> */}
    //         </>
    //       );
    //     }
    //   }
      


    
=======

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
  
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b

    return (
            <div className={styles["spot-item"]}>
                <div className={styles["schedule-line-wrapper"]}>
                    <div className={styles["schedule-line-left"]}></div>
                    <div className={styles["order-label-wrapper"]}>
<<<<<<< HEAD
                        <div className={styles["order-label"]}>{props.id}</div>
=======
                        <div className={styles["order-label"]}>{item.scheduleOrder}</div>
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b
                    </div>
                    <div className={styles["schedule-line-right"]}></div>
                </div>
                <div className={styles["where-div"]}>
<<<<<<< HEAD
                    <p className={styles['where']}>{props.where}</p>
                    <p className={styles['comment']}>{props.comment}</p>
                    <p className={styles["spot-content"]}>{spotContent}</p> {/* SpotModal로부터 전달받은 텍스트 출력 */}
                    <img src={selectedPhotos} />
                </div>
                <div className={styles["write-icon-area"]}>
                    <a href='#' onClick={ onOpen }>
=======
                    <p className={styles['title']}>{item.title}</p>
                    <p className={styles['type']}>{item.type}</p>
                    <p className={styles["content"]}>{spotContent}</p> {/* SpotModal로부터 전달받은 텍스트 출력 */}
                </div>
                <div className={styles["write-icon-area"]}>
                    <Link to='#' onClick={() => onOpen(true) }>
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b
                        <img
                                className={styles["write-icon"]}
                                src="https://cdn.imweb.me/upload/596c7f74e6a7f.png"
                        />
<<<<<<< HEAD
                    </a>
                    {
                        isOpen && <SpotModal onClose={ onClose } 
                                            spot={props.where}
                                            handleSpotContent={handleSpotContent} // SpotModal로부터 텍스트를 전달받을 콜백 함수
                                            selectedPhotos={selectedPhotos}
                                            setSelectedPhotos={setSelectedPhotos}/>
                    }
                </div>   
                   
=======
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
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b
            </div>
                
       
    );
};

export default SpotItem;