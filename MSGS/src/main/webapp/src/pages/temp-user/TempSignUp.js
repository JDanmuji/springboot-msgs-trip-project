import React, { useState, useEffect } from "react";

const TempSignUp = () => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [locationConsent, setLocationConsent] = useState(false);
  const [regUser, setRegUser] = useState(false);
  const [memberDate, setMemberDate] = useState("");

  // 회원가입 버튼 클릭 시,
  const signUpHandler = async () => {
    // 데이터 전달 시, 최종 유효성 검사
    const data = {
      id,
      email,
      phone: phone.replace(/-/g, ""), // `-`를 모두 제거,
      password,
      name,
      memberDate,
      locationConsent: locationConsent ? "1" : "0",
      regUser: regUser ? "1" : "0",
    };

    try {
      const response = await fetch("/temp/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

    useEffect(() => {
        const fetchData = async () => {
            // fetch 함수: 데이터 호출
            // await를 사용하여 응답 대기 → 응답 데이터를 JSON 형식으로 변환 후에 storyComment 업데이트
            try {
                const response = await fetch("/user/temp/list");
                const data = await response.json();
                setTestUserInfo(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        };
    }, []);



  return (
    <div style={{ background: "aliceblue" }}>
      {/* 회원가입 */}
      <>
      <div>
        아이디: 
        <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
      </div>
        <div>
          이메일 주소:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          비밀번호:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          생년월일:
          <input
            type="date"
            value={memberDate}
            onChange={(e) => setMemberDate(e.target.value)}
          />
        </div>
        <div>
          위치 동의:
          <input
            type="checkbox"
            checked={locationConsent}
            onChange={(e) => {
              setLocationConsent(e.target.checked);
              console.log(e.target.checked);
            }}
          />
        </div>
        <div>
          이벤트 동의:
          <input
            type="checkbox"
            checked={regUser}
            onChange={(e) => {
              setRegUser(e.target.checked);
            }}
          />
        </div>
        <button onClick={signUpHandler}>회원가입 버튼</button>
      </>
    </div>
  );
};

export default TempSignUp;
