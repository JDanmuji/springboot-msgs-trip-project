import React, { useRef } from 'react';
import styles from './UploadBtn.module.css';

// 여행 이야기 페이지에서 write 아이콘 누르면 뜨는 여행 이야기 작성 모달창입니다. 

const UploadPhoto = () => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    // Handle the selected file here
    console.log(file);
  };

  return (
    <div className={styles['upload-photo-btn']} onClick={handleButtonClick}>
      사진 첨부
      <input
        ref={fileInputRef}
        type="file"
        style={{ display: 'none' }}
        onChange={handleFileSelect}
      />
    </div>
  );
};

export default UploadPhoto;
