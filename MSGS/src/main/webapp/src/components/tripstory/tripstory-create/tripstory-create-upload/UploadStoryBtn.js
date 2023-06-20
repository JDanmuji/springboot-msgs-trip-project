import React from 'react';
import styles from './UploadStoryBtn.module.css';

// 글쓰기 모달 창의 하단 '완료' 버튼입니다.
const UploadStoryBtn = ({ onClose } ) => {
    return (
        <div className={styles['upload-story-btn']} onClick={ onClose }>
            <a href='#'>완료</a>
        </div>
    );
};

export default UploadStoryBtn;