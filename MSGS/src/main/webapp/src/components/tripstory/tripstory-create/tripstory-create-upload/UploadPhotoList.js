import React from 'react';
import styles from './UploadBtn.module.css';

const UploadPhotoList = ({photo, index}) => {


    return (
        <div className={styles['upload-photo-area']}>
            <img
                key={index}
                src={photo}
                alt={`Uploaded Photo ${index + 1}`}
                className={styles['uploaded-photo']}
                />
        </div>
    );
};

export default UploadPhotoList;