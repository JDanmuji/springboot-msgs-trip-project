import React, { useState, useEffect } from 'react';
import styles from './nonMemberResSearch.module.css';

const NonMemberResSearch = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isCodeGetBtnClicked, setIsCodeGetBtnClicked] = useState(false);
  const [isInjeongBtnClicked, setIsInjeongBtnClicked] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const isNameValid = name.trim() !== '';
  const isPhoneNumberValid = phoneNumber.trim() !== '' && phoneNumber.length === 11; // 휴대전화번호가 공백이 아니고 11자리인지 확인
  const isVerificationCodeValid = verificationCode.trim() !== '' && verificationCode.length === 6;

  const handleCodeGetBtnClick = () => {
    setIsCodeGetBtnClicked(true);
  };

  const handleInjeongBtnClick = () => {
    setIsInjeongBtnClicked(true);
  };


  return (
    <div className={styles['width-wrapper']}>
      <h2 className={styles['signup-agreement-title']}>비회원 예약 조회</h2>
      <div className={styles['sub-title']}>
        예약시 사용한 이름과 휴대폰 번호를 입력해주세요.
      </div>
      
      <div className={styles['name-area']}>
        <div className={styles['name']}>이름</div>
        <input type="text" className={styles['name-input']} placeholder="실명, 한글로 입력"
               value={name}
               onChange={handleNameChange} />
      </div>
      <div className={styles['phone-number']}>휴대전화번호</div>
      <div className={styles['phone-number-area']}>
        <input type="text" className={styles['phone-number-input']} placeholder="-빼고 숫자만 입력"
               value={phoneNumber}
               onChange={handlePhoneNumberChange} />
        <button className={styles['code-get-btn']}
                disabled={!isPhoneNumberValid}
                onClick={handleCodeGetBtnClick}>
                인증번호 받기
        </button>
      </div>
      <div className={styles['code']}>인증번호</div>
      <div className={styles['code-area']}>
        <input type="text" className={styles['code-input']} placeholder="6자리 번호 입력"
               value={verificationCode}
               onChange={handleVerificationCodeChange} />
        <button className={styles['injeong-btn']}
                disabled={!isVerificationCodeValid}
                onClick={handleInjeongBtnClick}>
                인증하기
        </button>
      </div>
      <button className={styles['search-res-btn']}
              disabled={!isNameValid || !isCodeGetBtnClicked || !isInjeongBtnClicked}
              >
              예약조회
      </button>
      
    </div>
  );
};

export default NonMemberResSearch;
