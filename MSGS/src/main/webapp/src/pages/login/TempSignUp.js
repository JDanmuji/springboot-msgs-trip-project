import React, { useState } from "react";

const TempSignUp = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [locationConsent, setLocationConsent] = useState(false);
  const [regUser, setRegUser] = useState(false);
  const [memberDate, setMemberDate] = useState("");

  const handleSignUp = async () => {
    const data = {
      email,
      phone,
      password,
      name,
      gender,
      memberDate,
      locationConsent,
      regUser,
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
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        비밀번호:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        위치 동의:
        <input
          type="checkbox"
          checked={locationConsent}
          onChange={(e) => {
            const checkedValue = e.target.checked ? '1' : '0';
            setLocationConsent(checkedValue);
            console.log(checkedValue);
          }}
        />
      </div>
      <div>
        이벤트 동의:
        <input
          type="checkbox"
          checked={regUser}
          onChange={(e) => {
            const checkedValue = e.target.checked ? '1' : '0';
            setRegUser(checkedValue);
            console.log(checkedValue);
          }}
        />
      </div>
      <div>
        닉네임:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        전화번호:
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        성별: 남
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
        <input
          type="date"
          value={memberDate}
          onChange={(e) => setMemberDate(e.target.value)}
        />
      </div>
      <button onClick={handleSignUp}>회원가입</button>
    </div>
  );
};

export default TempSignUp;
