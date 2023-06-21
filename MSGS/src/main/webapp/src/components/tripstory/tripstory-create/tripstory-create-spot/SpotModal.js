import React, { useState } from 'react';

import UploadPhoto from '../tripstory-create-upload/UploadPhoto';
import UploadStoryBtn from '../tripstory-create-upload/UploadStoryBtn';
<<<<<<< HEAD
import styles from '../tripstory-create-upload/UploadStoryBtn';
import StarRatingModal from '../tripstory-create-star/StarRatingModal';

//tripstory 글작성 모달창 컴포넌트입니다.
const SpotModal = ({onClose, spot, handleSpotContent, selectedPhotos, setSelectedPhotos }) => {
    const [rating, setRating] = useState(0);
    const [content, setContent] = useState(""); // SpotModal 내부에서 입력된 텍스트

    const handleRatingChange = (event) => {
        setRating(0);
        setRating(Number(event.target.value));
    };

    const handleContentChange = (event) => {
        setContent(event.target.value); // 텍스트 내용 업데이트
    };

    const handleUploadStory = () => {
        handleSpotContent(content); // SpotItem 컴포넌트로 텍스트, 이미지 파일들 전달
        onClose(); // SpotModal 닫기
    };
=======
import styles from './SpotModal.module.css';
import StarRatingModal from '../common/StarRating';
import CompleteBtn from '../common/CompleteBtn';



//tripstory 글작성 모달창 컴포넌트입니다.
const SpotModal = (props) => {

    const {setIsOpen, spot, setSpotContent, setSpotPhotos, setSpotRating, spotRating} = props;
    
    const [modalContent, setModalContent] = useState(""); 
    const [modalPhotos, setModalPhotos] = useState([]); 
    const [modalRating, setModalRating] = useState(spotRating); 


    const handleCloseXButton = () => {
        setIsOpen(false); // SpotModal 닫기
    };

    const handleContentChange = (event) => {
        setModalContent(event.target.value); // 텍스트 내용 업데이트
    };

    const handleCompleteStory = () => {
        setSpotContent(modalContent); 
        setSpotPhotos(modalPhotos); 
        setModalRating(modalRating); 
        setIsOpen(false); 
    };
    
    const check = "spot";
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b

    
    return (
        <>
            <div className={styles["bg"]}></div>   
            <div className={styles["popup"]}>
<<<<<<< HEAD
                <p onClick={ onClose } className={styles["closex"]} >X</p>
                <h2>{spot}</h2>
                <hr/>
                <div className={styles["trip-score-ment2"]}>이 장소의 평점을 입력해주세요.
                    <StarRatingModal rating={rating} handleRatingChange={handleRatingChange} /> {/* 별점 매기기 컴포넌트 */}
                </div>
                <textarea className={styles['tripstory-content']} 
                          placeholder='이 장소에서의 경험과 추억을 공유해주세요.'
                          value={content}
                          onChange={handleContentChange} //텍스트 내용 변경 핸들러
                          ></textarea>
                <hr/>
                <UploadPhoto modalSelectedPhotos={selectedPhotos} setModalSelectedPhotos={setSelectedPhotos}/> {/* 사진 첨부 버튼 */}
                <UploadStoryBtn onClose={ handleUploadStory } />
            </div>
=======
                <p onClick={ handleCloseXButton} className={styles["closex"]} >X</p>
                <h2>{spot}</h2>
                <hr/>
                <div className={styles["trip-score-ment2"]}>
                    <p>이 장소의 평점을 입력해주세요.</p>
                    <StarRatingModal rating={modalRating} setRating ={setSpotRating} /> {/* 별점 매기기 컴포넌트 */}
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
            
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b
        </>
    );
};

export default SpotModal;