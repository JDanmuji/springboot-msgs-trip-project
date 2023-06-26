import React, { useState, useEffect } from "react";

const TempUserUpdate = () => {
    const id = "testUser01";
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [locationConsent, setLocationConsent] = useState(false);
    const [regUser, setRegUser] = useState(false);
    const [memberDate, setMemberDate] = useState("");

    // 회원 정보 불러오기
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/temp/getUserInfo?id=${id}`);
                const data = await response.json();
                setEmail(data.userEmail);
                setPhone(data.userPhone);
                setPassword(data.userPwd);
                setName(data.userName);
                setLocationConsent(data.locationConsent === "1" ? true : false);
                setRegUser(data.regUser === "1" ? true : false);
                setMemberDate(data.memberDate);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    // 회원정보 수정하기
    const updateUserHandler = async () => {
        // 데이터 전달 시, 최종 유효성 검사
        const data = {
            id,
            email,
            phone: phone.replace(/-/g, ""),
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

            if (response.ok) {
                console.log("회원정보 수정 성공");
            } else {
                console.log("회원정보 수정 실패");
            }
        } catch (error) {
            // 네트워크 오류 등 예외 처리
            console.log("오류 발생", error);
        }
    };

    return (
        <div style={{ background: "ghostwhite" }}>
            {/* 회원정보 수정: PK readOnly */}
            <>
                <div>
                    아이디:
                    <input type="text" value={id} readOnly={true} />
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
                    비밀번호:
                    <input
                        type="text"
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
                    생년월일:
                    <input
                        type="date"
                        value={memberDate}
                        onChange={(e) => setMemberDate(e.target.value)}
                    />
                </div>
                <button onClick={updateUserHandler}>회원정보 수정</button>
            </>
        </div>
    );
};

export default TempUserUpdate;
