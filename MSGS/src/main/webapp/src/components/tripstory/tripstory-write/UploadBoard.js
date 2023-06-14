import React, { useState } from 'react';
import StoryPostingModal from './StoryPostingModal';
import styles from './UploadBoard.module.css';

// 여행 이야기 페이지에서 write 아이콘 누르면 뜨는 여행 이야기 작성 모달창입니다. 

const UploadBoard = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const UploadBoardButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveIndex();
  };

  const [isOpen, setIsOpen] = useState(false) //초기값 false
    const onOpen = () => {
        setIsOpen(true) 
    }

    //상태변수와 함수는 같이 있어야 한다.
    const onClose = () => {
        setIsOpen(false)
    }

  return (
    <div className={styles['upload-board-div']}>
    <a href='#' onClick={ onOpen }>
      <div className={styles['upload-board-btn']} onClick={()=> UploadBoardButtonClick()}>
        포스팅
      </div>
    </a>
    {
                    isOpen && <StoryPostingModal onClose={ onClose }/>
    }
      
    </div>
  );
};

export default UploadBoard;
