import React, { useState, useEffect } from 'react';
import styles from './SignupFindID.module.css';

const SignupFindID = () => {
  const [selectedProvider, setSelectedProvider] = useState('카카오톡');
  const [selectedImage, setSelectedImage] = useState('');

  const handleProviderClick = (provider) => {
    setSelectedProvider(provider);

    // 이미지 경로 설정
    switch (provider) {
      case '카카오톡':
        setSelectedImage(process.env.PUBLIC_URL + '/images/KakaoTalk.png');
        break;
      case '네이버':
        setSelectedImage(process.env.PUBLIC_URL + '/images/Naver.png');
        break;
      case '페이스북':
        setSelectedImage(process.env.PUBLIC_URL + '/images/Facebook.png');
        break;
      case '애플':
        setSelectedImage(process.env.PUBLIC_URL + '/images/Apple.png');
        break;
      default:
        setSelectedImage('');
        break;
    }
  };

  useEffect(() => {
    setSelectedImage(process.env.PUBLIC_URL + '/images/KakaoTalk.png');
  }, []);

  const getProviderInfo = () => {
    switch (selectedProvider) {
      case '카카오톡':
        return '카카오톡 APP ‣ 더보기 ‣ 설정';
      case '네이버':
        return '네이버 APP/WEB 좌측 상단 메뉴 ‣ 로그인';
      case '페이스북':
        return '페이스북 APP 우측 상단 또는 하단 메뉴';
      case '애플':
        return '휴대폰 설정 ‣ 사용자 이름 (Apple ID)';
      default:
        return '';
    }
  };

  return (
    <div className={styles['width-wrapper']}>
      <h1 className={styles['signup-heading']}>아이디를 잊으셨나요?</h1><br />
      <h2>먼저 확인해주세요!</h2>
      <h2>
        카카오톡, 네이버, 페이스북, 애플 등 SNS 간편 로그인을 통해 마실가실에 가입한 경우, 아래 절차에 따라 '연동' 현황을 확인하실 수 있습니다.
        <br />
        만약, 연결된 계정이 확인된다면 해당 이메일로 로그인을 시도해주세요.
      </h2>
      <div className={styles['button-group']}>
        <button
          className={`${styles['provider-button']} ${
            selectedProvider === '카카오톡' ? styles['selected-button'] : ''
          }`}
          onClick={() => handleProviderClick('카카오톡')}
        >
          카카오톡
        </button>
        <button
          className={`${styles['provider-button']} ${
            selectedProvider === '네이버' ? styles['selected-button'] : ''
          }`}
          onClick={() => handleProviderClick('네이버')}
        >
          네이버
        </button>
        <button
          className={`${styles['provider-button']} ${
            selectedProvider === '페이스북' ? styles['selected-button'] : ''
          }`}
          onClick={() => handleProviderClick('페이스북')}
        >
          페이스북
        </button>
        <button
          className={`${styles['provider-button']} ${
            selectedProvider === '애플' ? styles['selected-button'] : ''
          }`}
          onClick={() => handleProviderClick('애플')}
        >
          애플
        </button>
      </div>

      {selectedImage && (
        <div className={styles['selected-image-container']}>
          <img
            src={selectedImage}
            alt={selectedProvider}
            className={styles['selected-image']}
          />
          <p
            className={styles['selected-provider-info']}
            style={{ fontSize: '1.5rem', textAlign: 'center' }}
          >
            {getProviderInfo()}
          </p>
        </div>
      )}

      <div className={styles['trip-schedule-add-modal-select-complete']}>
        <button className={styles['trip-schedule-add-modal-select-complete-button']}>
          <h4 style={{ textAlign: 'center' }}>인증하기</h4>
        </button>
      </div>
    </div>
  );
};

export default SignupFindID;
