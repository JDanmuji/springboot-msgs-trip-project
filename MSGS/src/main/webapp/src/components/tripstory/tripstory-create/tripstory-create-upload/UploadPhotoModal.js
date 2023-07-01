import React, { useEffect, useRef, useState } from 'react';
import styles from './UploadBtn.module.css';

// 여행 이야기 페이지에서 write 아이콘 누르면 뜨는 여행 이야기 작성 모달창입니다. 

const UploadPhoto = ({ modalPhotos, setModalPhotos }) => {
  const fileInputRef = useRef(null);
  const [selectedPhotos, setSelectedPhotos] = useState([]);

  useEffect(() => {
    setSelectedPhotos(modalPhotos);
}, [modalPhotos]);


  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    // Limit the number of selected photos to 3
    const selected = files.slice(0, 10);

    // Convert selected photos to square shape
    const squarePhotos = selected.map((file) => {

      const reader = new FileReader();

      reader.readAsDataURL(file);

      return new Promise((resolve) => {

        reader.onload = (event) => {
          
          const img = new Image();
          img.src = event.target.result;
          img.onload = () => {
            const canvas = document.createElement('canvas');
            const maxSize = Math.max(img.width, img.height);
            const offsetX = (maxSize - img.width) / 2;
            const offsetY = (maxSize - img.height) / 2;
            
            canvas.width = maxSize;
            canvas.height = maxSize;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, offsetX, offsetY);
            const dataURL = canvas.toDataURL('image/jpeg');
            resolve(dataURL);
          };
        };
      });
    });

    Promise.all(squarePhotos).then((results) => {
      setSelectedPhotos(results);
      setModalPhotos(results);
    });
  };



  return (
    <div className={styles['upload-photo']}>
      <div className={styles['upload-photo-btn']} onClick={handleButtonClick}>
        사진 첨부
        <input
          ref={fileInputRef}
          type="file"
          style={{ display: 'none' }}
          multiple //여러장 선택할 수 있게함
          onChange={handleFileSelect}
        />
      </div>
      {
        selectedPhotos && (
          <div className={styles['upload-photo-area']}>
            {selectedPhotos.map((photo, index) => (
              <img
              key={index}
              src={photo}
              alt={`Uploaded Photo ${index + 1}`}
              className={styles['uploaded-photo']}
              />
              ))}
          </div>
          )
        }
    </div>
  );
};

export default UploadPhoto;
