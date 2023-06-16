import React, { useState } from 'react';
import styles from './AuthenticationNumber.module.css';

const AuthenticationNumber = () => {
  const [isResent, setIsResent] = useState(false);

  const handleButtonClick = () => {
    setIsResent(true);
  };

  return (
    <div className={styles['width-wrapper']}>
      <h1 className={styles['signup-heading']}>아이디를 잊으셨나요?</h1><br />
      <h2>휴대폰 번호 등록하기</h2>
      <h2>
        마실가실에서는 고객님의 안전한 거래 및 회원 보호를 위해 본인 인증(최초 1회)를 하고 있습니다.
        <br /><br />
        <div className={styles['input-wrapper']}>
          <label htmlFor="countryCode" className={styles['input-label']}>국가 코드</label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <label htmlFor="phoneNumber" className={styles['input-label']}>전화번호</label>
        </div>
        <div className={styles['input-wrapper']}>
          <select id="countryCode" className={`${styles['input-select']} ${styles['underline']}`}>
            <option value="82">+82 (대한민국)</option>
            <option value="1">+1 (미국)</option>
            <option value="86">+86 (중국)</option>
            {/* 다른 국가 코드 옵션들 */}
          </select>
          <input type="text" id="phoneNumber" className={`${styles['input-text']} ${styles['underline']}`} />
        </div>
      </h2>
      <br/>

      <h2>인증번호</h2>

      <div className={styles['trip-schedule-add-modal-select-complete']}>
        <button
          className={`${styles['trip-schedule-add-modal-select-complete-button']} ${styles['orange-background']}`}
          onClick={handleButtonClick}
        >
          <h4 style={{ textAlign: 'center', color: 'white' }}>{isResent ? '재전송' : '전송'}</h4>
        </button>
      </div>
    </div>
  );
};

export default AuthenticationNumber;
