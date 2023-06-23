import React from 'react';
import styles from './UploadBtn.module.css';

const UploadPhotoList = ({photo, index}) => {


    return (
        <>
            <img
                key={index}
                src={photo}
                alt={`Uploaded Photo ${index + 1}`}
                className={styles['uploaded-photo']}
                />
        </>
    );
};

export default UploadPhotoList;