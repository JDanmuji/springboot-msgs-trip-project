import React from 'react';
import styles from './UploadStoryBtn.module.css';
import { Link } from 'react-router-dom';

// 글쓰기 모달 창의 하단 '완료' 버튼입니다.
const UploadStoryBtn = ({ handleUploadStory } ) => {
    return (
        <div className={styles['upload-story-btn']} onClick={ handleUploadStory }>
            <Link to='#'>완료</Link>
        </div>
    );
};

export default UploadStoryBtn;