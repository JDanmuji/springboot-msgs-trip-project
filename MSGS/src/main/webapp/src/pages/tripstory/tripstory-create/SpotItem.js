import React, { useState } from 'react';
import SpotModal from './SpotModal';
import styles from "./Spot.module.css";


//여행 장소의 순서, 장소, 장소에 대한 설명이 들어가 있는 곳의 컴포넌트입니다.
const SpotItem = (props) => {
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
      


    

    return (
            <div className={styles["spot-item"]}>
                <div className={styles["schedule-line-wrapper"]}>
                    <div className={styles["schedule-line-left"]}></div>
                    <div className={styles["order-label-wrapper"]}>
                        <div className={styles["order-label"]}>{props.id}</div>
                    </div>
                    <div className={styles["schedule-line-right"]}></div>
                </div>
                <div className={styles["where-div"]}>
                    <p className={styles['where']}>{props.where}</p>
                    <p className={styles['comment']}>{props.comment}</p>
                    <p className={styles["spot-content"]}>{spotContent}</p> {/* SpotModal로부터 전달받은 텍스트 출력 */}
                    <img src={selectedPhotos} />
                </div>
                <div className={styles["write-icon-area"]}>
                    <a href='#' onClick={ onOpen }>
                        <img
                                className={styles["write-icon"]}
                                src="https://cdn.imweb.me/upload/596c7f74e6a7f.png"
                        />
                    </a>
                    {
                        isOpen && <SpotModal onClose={ onClose } 
                                            spot={props.where}
                                            handleSpotContent={handleSpotContent} // SpotModal로부터 텍스트를 전달받을 콜백 함수
                                            selectedPhotos={selectedPhotos}
                                            setSelectedPhotos={setSelectedPhotos}/>
                    }
                </div>   
                   
            </div>
                
       
    );
};

export default SpotItem;