import React, { useState } from 'react';

import UploadPhoto from '../tripstory-create-upload/UploadPhoto';
import UploadPhotoModal from '../tripstory-create-upload/UploadPhotoModal';
import styles from './SpotModal.module.css';
import CompleteBtn from '../common/CompleteBtn';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import StarClick from '../../../common/StarClick';



//tripstory 글작성 모달창 컴포넌트입니다.
const SpotModal = (props) => {

    const { setIsOpen, 
            spot, 
            spotContent, 
            handleSpotContent, 
            spotPhotos, 
            handleSpotPhotos, 
            spotRating, 
            handleSpotRating,
            photoFiles,
            setPhotoFiles
        } = props;
    
    const [modalContent, setModalContent] = useState(""); 
    const [modalPhotos, setModalPhotos] = useState([]); 
    const [modalRating, setModalRating] = useState(spotRating); 

    useEffect(() => {
        setModalContent(spotContent);
        setModalPhotos(spotPhotos);
        setModalRating(spotRating);
    }, [spotContent, spotPhotos, spotRating]);

    const handleCloseXButton = () => {
        setIsOpen(false);
    };

    const handleContentChange = (event) => {
        setModalContent(event.target.value);
    };

    const handleCompleteStory = () => {
        console.log(modalPhotos)
        handleSpotContent(modalContent); 
        handleSpotPhotos(modalPhotos); 
        handleSpotRating(modalRating); 
        setIsOpen(false); 
    };
    

    
    return (
        <>
            <div className={styles["bg"]}></div>   
            <div className={styles["popup"]}>
                <p onClick={ handleCloseXButton} className={styles["closex"]} >X</p>
                <h2>{spot}</h2>
                <hr/>
                <div className={styles["trip-score-ment2"]}>
                    <p>이 장소의 평점을 입력해주세요.</p>
                    <StarClick starCnt={modalRating} setStarCnt={setModalRating} height={"2rem"} />
                </div>
                <textarea className={styles['tripstory-content']} 
                          placeholder='이 장소에서의 경험과 추억을 공유해주세요.'
                          value={modalContent}
                          onChange={handleContentChange} //텍스트 내용 변경 핸들러
                          ></textarea>
                <hr/>
                <UploadPhotoModal modalPhotos={modalPhotos} setModalPhotos={setModalPhotos}/> {/* 사진 첨부 버튼 */}
                <div className={styles['complete-btn']} onClick={ handleCompleteStory }>
                    <Link to='#'>완료</Link>
                </div>
            </div>
            
        </>
    );
};

export default SpotModal;