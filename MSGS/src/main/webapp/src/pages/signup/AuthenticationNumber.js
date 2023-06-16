import React, { useState } from 'react';
import styles from './AuthenticationNumber.module.css';

const AuthenticationNumber = () => {
  const [isResent, setIsResent] = useState(false);
  const [isPhoneNumberFocused, setIsPhoneNumberFocused] = useState(false);
  const [isAuthCodeEntered, setIsAuthCodeEntered] = useState(false);

  const handleButtonClick = () => {
    setIsResent(true);
  };

  const handlePhoneNumberClick = () => {
    setIsPhoneNumberFocused(true);
  };

  return (
    <div className={styles['width-wrapper']}>
      <h1 className={styles['signup-heading']}>아이디를 잊으셨나요?</h1>
      <br />
      <h2>휴대폰 번호 등록하기</h2>
      <h2>
        마실가실에서는 고객님의 안전한 거래 및 회원 보호를 위해 본인 인증(최초 1회)를 하고 있습니다.
        <br />
        <br />
        <div className={styles['input-wrapper']}>
          <label htmlFor="countryCode" className={styles['input-label']}>국가 코드</label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <label htmlFor="phoneNumber" className={styles['input-label']}>전화번호</label>
        </div>
        <div className={styles['input-wrapper']}>
          <select id="countryCode" className={styles['input-select'] }>
            <option value="82">+82 (대한민국)</option>
            <option value="1">+1 (미국)</option>
            <option value="86">+86 (중국)</option>
            <option value="81">+81 (일본)</option>
            {/* 다른 국가 코드 옵션들 */}
          </select>
          <input
            type="text"
            id="phoneNumber"
            className={`${styles['input-text']} ${styles['underline']}`}
            onClick={handlePhoneNumberClick}
          />
          <button
            className={`${styles['trip-schedule-add-modal-select-complete-button']} `}
            onClick={handleButtonClick}
            disabled={!isAuthCodeEntered}
          >
            <h3 style={{ textAlign: 'center', color: 'white' }}>{isResent ? '재전송' : '전송'}</h3>
          </button>
        </div>
      </h2>
      <br />

      <h2>
        인증번호
        <div className={styles['input-wrapper']}>
          <input
            type="text"
            id="authCode"
            className={`${styles['input-text']} ${styles['blue-underline']}`}
          />
        </div>
        <div className={styles['trip-schedule-add-modal-select-complete']}>
          <button
            className={`${styles['trip-schedule-add-modal-select-complete-button2']} ${styles['orange-background']}`}
            disabled={!isAuthCodeEntered}
          >
            <h3 style={{ textAlign: 'center', color: 'white' }}>인증하기<br/></h3>
          </button>
        </div>
      </h2>
      <h4 style={{ color: 'gray' }}>
        <br/>
        ※ 3분 이내로 인증번호(6자리)를 입력해주세요. <br/>
        ※ 입력시간 초과 시 "재전송" 버튼을 눌러주세요.
      </h4>
    </div>
  );
};

export default AuthenticationNumber;