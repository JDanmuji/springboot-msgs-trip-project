import React, { useState } from "react";

const TempSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [locationAgreement, setLocationAgreement] = useState(false);
  const [eventAgreement, setEventAgreement] = useState(false);
  const [nickname, setNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const handleSignUp = async () => {
    const data = {
      email,
      password,
      locationAgreement,
      eventAgreement,
      nickname,
      phoneNumber,
      gender,
      birthDate,
    };

    try {
      const response = await fetch("/user/temp/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("회원가입 성공");
      } else {
        console.log("회원가입 실패");
      }
    } catch (error) {
      // 네트워크 오류 등 예외 처리
      console.log("오류 발생", error);
    }
  };

  return (
    <div style={{ background: "aliceblue" }}>
      <div>
        이메일 주소:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        비밀번호:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        위치 동의:
        <input type="checkbox" checked={locationAgreement} onChange={(e) => setLocationAgreement(e.target.checked)} />
      </div>
      <div>
        이벤트 동의:
        <input type="checkbox" checked={eventAgreement} onChange={(e) => setEventAgreement(e.target.checked)} />
      </div>
      <div>
        닉네임:
        <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
      </div>
      <div>
        전화번호:
        <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </div>
      <div>
        성별:
        남
        <input
          type="radio"
          name="gender"
          value="남"
          checked={gender === "남"}
          onChange={(e) => setGender(e.target.value)}
        />
        여
        <input
          type="radio"
          name="gender"
          value="여"
          checked={gender === "여"}
          onChange={(e) => setGender(e.target.value)}
        />
      </div>
      <div>
        생년월일:
        <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
      </div>
      <button onClick={handleSignUp}>회원가입</button>
    </div>
  );
};

export default TempSignUp;
