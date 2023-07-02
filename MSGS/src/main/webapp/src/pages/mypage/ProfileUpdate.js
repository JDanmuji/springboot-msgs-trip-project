import React, { useEffect, useRef, useState, useCallback } from "react";
import axios from "axios"; // Import axios library
import { useNavigate } from "react-router-dom";

import Cookies from "js-cookie";

import styles from "./ProfileUpdate.module.css";
import { fetchUserData } from "./mypage-data/userData";
import { myInfoDelete } from "./mypage-data/myInfoDelete";
import { fetchUserInfoUpdate } from "./mypage-data/userInfoUpdate";
import ProfileUploadPhoto from "./ProfileUploadPhoto";

const ProfileUpdate = () => {
  const navigate = useNavigate();

  // 로그인 쿠키 반환
  const tokenValue = Cookies.get("token");
  console.log("======================Hello MyPage Token", tokenValue);

  const [profileInfo, setProfileInfo] = useState({
    userName: "",
    userEmail: "",
    selectedImage: null,
  });
  // const { name, nickname, email } = userProfile;

  const profileInfoHandler = (e) => {
    setProfileInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(profileInfo);
  };

  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    // Handle the selected file here
    const file = event.target.files[0];
    console.log(file);
    setProfileInfo({
      ...profileInfo,
      selectedImage: file,
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const isSaveDisabled =
    profileInfo.nickname === "" || profileInfo.email === "";

  //   //회원탈퇴
  //   const handleExit = useCallback(async () => {
  //     try {
  //       const confirmWithdrawal = window.confirm("정말 탈퇴하시겠습니까?");
  //       if (confirmWithdrawal) {
  //         // 서버에 회원탈퇴 요청을 보냅니다.
  //         await axios.post("/mypage/userDelete");

  //         // 회원탈퇴가 성공한 후 필요한 처리를 수행합니다.
  //         // 예를 들어, 로그아웃 상태로 변경하거나 홈 화면으로 이동할 수 있습니다.
  //         console.log("회원탈퇴가 완료되었습니다.");
  //         alert("회원탈퇴가 완료되었습니다.");
  //         // Navigate to the main screen
  //         navigate("/"); // Replace "/main" with the path to your main screen route
  //         // 여기에서 필요한 추가 작업을 수행하세요.
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }, [navigate]);

  //수정 저장하기
  const handleSave = useCallback(async () => {
    try {
      setIsSubmitting(true);

      // Send the updated user information to the server
      await axios.post("/mypage/profileUpdate", profileInfo);

      console.log("User information has been updated.");
      alert("User information has been updated.");
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  }, [profileInfo]);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSave();
  };

  useEffect(() => {
    // Fetch user information from the backend
    axios
      .get("/mypage/getMyInfo/userId=M000006") // Replace "msgs01" with the desired ID
      .then((response) => {
        const { userName, userEmail } = response.data;
        setProfileInfo({
          userName,
          userEmail,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // ========== 유저 정보 불러오기 ==========

  // API 데이터 담을 state
  const [userData, setUserData] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState("");

  useEffect(() => {
    // back-end에서 API 호출
    const fetchMyInfo = async () => {
      const userData = await fetchUserData(tokenValue, userNick);
      setUserData(userData);
      setUserNick(userData.userName);
    };

    fetchMyInfo();
  }, [tokenValue]);

  // ========== 수정버튼 ==========
  const userUpdateHandler = () => {
    // return fetchUserInfoUpdate(tokenValue, userNick, userImg);
  };

  // user NickName 관리
  const [userNick, setUserNick] = useState("");
  const userNickHandler = (e) => {
    setUserNick(e.target.value);
  };

  // ========== 취소버튼 ==========
  const resetForm = () => {
    navigate("/mypage");
  };

  // ========== 삭제버튼 ==========
  const deleteInfoHandler = async () => {
    const confirmWithdrawal = window.confirm("정말 탈퇴하시겠습니까?");
    if (confirmWithdrawal) {
      await myInfoDelete(tokenValue);
      myInfoDelete();
    }
    alert("회원탈퇴가 완료되었습니다.");
    navigate("/");
  };

  //   console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@", URL.createObjectURL(profileInfo.selectedImage));

  // Write Form Rating Change
  const imgUploadHandler = (img) => {
    setSelectedPhoto(img);
  };

  return (
    <form action="" method="post" onSubmit={handleSubmit}>
      <div className={styles["profile-total-wrap"]}>
        <div className={styles["profile-update-wrap"]}>
          <div
            className={styles["profile-update-image"]}
            onClick={handleImageClick}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/camera-4990900.png"}
              alt="icon_camera"
              style={{ filter: "invert(1)" }}
            />
            {/* <ProfileUploadPhoto
              selectedPhoto={userData.imgPath}
              setSelectedPhoto={imgUploadHandler}
            /> */}
            <img
              src={
                profileInfo.selectedImage
                  ? URL.createObjectURL(profileInfo.selectedImage)
                  : userData.imgPath
              }
              alt="profile_info"
              className={styles["profile-image"]}
            />
          </div>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <div className={styles["profile-input"]}>
            <div className={styles["profile-input-002"]}>
              <p className={styles["profile-input-subject"]}>닉네임</p>
              <input
                type="text"
                name="userName"
                value={userNick}
                onChange={userNickHandler}
              />
              {userData.userName === "" && (
                <p className={styles["input-error"]}>값이 없습니다.</p>
              )}
            </div>
            <div className={styles["profile-input-003"]}>
              <p className={styles["profile-input-subject"]}>이메일</p>
              <input
                type="text"
                name="userEmail"
                value={userData.userEmail}
                onChange={profileInfoHandler}
              />
              {userData.userEmail === "" && (
                <p className={styles["input-error"]}>값이 없습니다.</p>
              )}
            </div>
          </div>
          <div>
            <p
              className={styles["member-withdraw"]}
              onClick={deleteInfoHandler}
            >
              회원탈퇴
            </p>
          </div>
          <div className={styles["profile-list-button"]}>
            <button
              type="reset"
              className={styles["profile-list-button-cancle"]}
              onClick={resetForm}
            >
              취소하기
            </button>
            <button
              type="submit"
              className={styles["profile-list-button-save"]}
              onClick={userUpdateHandler}
              disabled={isSaveDisabled || isSubmitting}
            >
              {isSubmitting ? "저장 중 ..." : "저장하기"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProfileUpdate;
