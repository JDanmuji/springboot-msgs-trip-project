import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './signup.module.css';

const Signup1 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordMatched, setIsPasswordMatched] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsPasswordMatched(value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setIsPasswordMatched(value === password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 이메일과 비밀번호 확인 로직 구현
    if (password === confirmPassword) {
      // 이메일과 비밀번호가 일치하는 경우 가입 프로세스 진행
      console.log('가입 성공!');
      // 여기서 가입 프로세스를 진행하면 됩니다.
    } else {
      // 이메일과 비밀번호가 일치하지 않는 경우 처리 로직
      console.log('비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <div className={styles['width-wrapper']}>
      <h1 className={styles['signup-heading']}>이메일로 가입하기</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles['input-group']}>
          <label className={styles.label}>
            <h2 className={styles['input-label']}>이메일 주소</h2>
          </label>
          <div className={styles['input-field']}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="abc@gmail.com"
              required
              className={styles['input']}
            />
          </div>
        </div>

        <br />
        <div className={styles['input-group']}>
          <label className={styles.label}>
            <h2 className={styles['input-label']}>비밀번호</h2>
          </label>
          <div className={styles['input-field']}>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="비밀번호 입력"
              required
              className={styles['input']}
            />
            {isPasswordMatched && (
              <FontAwesomeIcon
                icon={faCheck}
                className={styles['check-icon']}
              />
            )}
          </div>
        </div>

        <br />
        <div className={styles['input-group']}>
          <label className={styles.label}>
            <h2 className={styles['input-label']}>비밀번호 확인</h2>
          </label>
          <div className={styles['input-field']}>
            <input
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder="비밀번호 확인"
              required
              className={styles['input']}
            />
            {isPasswordMatched && (
              <FontAwesomeIcon
                icon={faCheck}
                className={styles['check-icon']}
              />
            )}
          </div>
        </div>

        <br />
        <button className={styles['submit-button']} type="submit">
          <div className={styles['entry-button']}>확인</div>
        </button>
      </form>
    </div>
  );
};

export default Signup1;
