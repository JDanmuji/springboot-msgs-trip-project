import React from 'react';
import styles from './UploadStoryBtn.module.css';
<<<<<<< HEAD

// 글쓰기 모달 창의 하단 '완료' 버튼입니다.
const UploadStoryBtn = ({ onClose } ) => {
    return (
        <div className={styles['upload-story-btn']} onClick={ onClose }>
            <a href='#'>완료</a>
=======
import { Link } from 'react-router-dom';

// 글쓰기 모달 창의 하단 '완료' 버튼입니다.
const UploadStoryBtn = ({ handleUploadStory } ) => {
    return (
        <div className={styles['upload-story-btn']} onClick={ handleUploadStory }>
            <Link to='#'>완료</Link>
>>>>>>> d918fbbf4d967f8a03bff71dd3ef26101b20ec3b
        </div>
    );
};

export default UploadStoryBtn;