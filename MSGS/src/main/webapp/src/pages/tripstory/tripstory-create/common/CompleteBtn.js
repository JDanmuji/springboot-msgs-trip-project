import React from 'react';
import styles from './CompleteBtn.module.css';
import { Link } from 'react-router-dom';


const CompleteBtn = ({handleCompleteStory}) => {
    return (
        <div className={styles['complete-btn']} onClick={ handleCompleteStory }>
            <Link to='#'>완료</Link>
        </div>
    );
};

export default CompleteBtn;