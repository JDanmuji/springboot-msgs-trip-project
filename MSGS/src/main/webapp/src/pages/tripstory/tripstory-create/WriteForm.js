import React, { useEffect, useState } from 'react';
import StarRating from '../../../components/tripstory/tripstory-create/common/StarRating';
import UploadPhoto from '../../../components/tripstory/tripstory-create/tripstory-create-upload/UploadPhoto';
import styles from './WriteForm.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


//tripstory 글작성 페이지의 주요 기능들이 있는 컴포넌트입니다.

const WriteForm = () => {
    
    
    const [writeRating, setWiteRating] = useState(0)
    const [writeTitle, setwriteTitle] = useState('')
    const [writeComment, setWriteComment] = useState('')
    

    const tripStoryData = useSelector((state) => state.tripStory.tripStoryData);


       
    useEffect(() => {
        setWiteRating(tripStoryData.rating);    
        setwriteTitle(tripStoryData.title)
        setWriteComment(tripStoryData.comment)
    }, []);
    
    const handleWriteTitle = (e) => {
        setwriteTitle(e.target.value)
    }

    const handleWriteComment = (e) => {
        setWriteComment(e.target.value)
    }
   
    return (
        <>
            {/* <UploadBoard /> */}
            <div  className={styles["tripstory-title"]}>
                <input type="text"  placeholder="여행 이야기 제목(필수)" value={writeTitle} onChange={handleWriteTitle}/>
            </div>
            <div className={styles["star-score-area"]}>
                <div className={styles["trip-score-ment"]}>이번 여행 이야기의 총 평점을 입력해주세요.</div>
                <StarRating rating={writeRating} setRating={setWiteRating} /> {/* 별점 매기기 컴포넌트 */}    
            </div>
            
            <div className={styles['tripstory-content']} >
                <textarea placeholder='이번 여행은 어떤 여행이었나요?' value={writeComment} onChange={handleWriteComment}/>
            </div>

        </>
    );
};

export default WriteForm;