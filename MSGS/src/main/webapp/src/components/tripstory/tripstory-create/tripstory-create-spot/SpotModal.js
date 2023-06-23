import React, { useState } from 'react';

import UploadPhoto from '../tripstory-create-upload/UploadPhoto';
import UploadStoryBtn from '../tripstory-create-upload/UploadStoryBtn';
import styles from './SpotModal.module.css';
import StarRatingModal from '../common/StarRating';
import CompleteBtn from '../common/CompleteBtn';
import { useEffect } from 'react';



//tripstory 글작성 모달창 컴포넌트입니다.
const SpotModal = (props) => {

    const {setIsOpen, spot, spotContent, 
            setSpotContent, spotPhotos, setSpotPhotos, spotRating , setSpotRating } = props;
    
    const [modalContent, setModalContent] = useState(""); 
    const [modalPhotos, setModalPhotos] = useState([]); 
    const [modalRating, setModalRating] = useState(0); 

    useEffect(() => {
        setModalContent(spotContent);
        setModalPhotos(spotPhotos);
        setModalRating(spotRating);
    }, [spotContent, spotPhotos, spotRating]);

    const handleCloseXButton = () => {
        setIsOpen(false); // SpotModal 닫기
    };

    const handleContentChange = (event) => {
        setModalContent(event.target.value); // 텍스트 내용 업데이트
    };

    const handleCompleteStory = () => {
        setSpotContent(modalContent); 
        setSpotPhotos(modalPhotos); 
        setSpotRating(modalRating); 
        setIsOpen(false); 
    };
    
    const check = "spot";
    console.log(spotRating);
    console.log(modalRating);
    
    return (
        <>
            <div className={styles["bg"]}></div>   
            <div className={styles["popup"]}>
                <p onClick={ handleCloseXButton} className={styles["closex"]} >X</p>
                <h2>{spot}</h2>
                <hr/>
                <div className={styles["trip-score-ment2"]}>
                    <p>이 장소의 평점을 입력해주세요.</p>
                    <StarRatingModal rating={modalRating} setRating ={setModalRating} /> {/* 별점 매기기 컴포넌트 */}
                </div>
                <textarea className={styles['tripstory-content']} 
                          placeholder='이 장소에서의 경험과 추억을 공유해주세요.'
                          value={modalContent}
                          onChange={handleContentChange} //텍스트 내용 변경 핸들러
                          ></textarea>
                <hr/>
                <UploadPhoto setModalPhotos={setModalPhotos}/> {/* 사진 첨부 버튼 */}
                <CompleteBtn handleCompleteStory={ handleCompleteStory } check={check} />
            </div>
            
        </>
    );
};

export default SpotModal;