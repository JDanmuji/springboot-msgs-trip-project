import React, { useEffect, useRef, useState, useCallback } from "react";
import axios from "axios"; // Import axios library
import { useNavigate } from "react-router-dom";


import styles from "./ProfileUpdate.module.css";


const ProfileUpdate = () => {
    const [profileInfo, setProfileInfo] = useState({
        userName: "",
        userEmail: "",
        selectedImage: null,
    });
    // const { name, nickname, email } = userProfile;

    const profileInfoHandler = (e) => {
        setProfileInfo({
            [e.target.name]: e.target.value,
            [e.target.email]: e.target.value,
        });
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

    const navigate = useNavigate();

    const [isSubmitting, setIsSubmitting] = useState(false);



    useEffect(() => {
        // Fetch user information from the backend
        axios
            .get("/mypage/getMyInfo/userId=m000003") // Replace "msgs01" with the desired ID
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

    const isSaveDisabled = profileInfo.nickname === "" || profileInfo.email === "";

    //취소버튼 
    const resetForm = () => {
        window.location.reload();
      };
    

    //회원탈퇴
    const handleExit = useCallback(async () => {
        try {
          // 서버에 회원탈퇴 요청을 보냅니다.
          await axios.post("/mypage/userDelete");
      
          // 회원탈퇴가 성공한 후 필요한 처리를 수행합니다.
          // 예를 들어, 로그아웃 상태로 변경하거나 홈 화면으로 이동할 수 있습니다.
          console.log("회원탈퇴가 완료되었습니다.");
          alert("회원탈퇴가 완료되었습니다.")
          // Navigate to the main screen
          navigate("/"); // Replace "/main" with the path to your main screen route
          // 여기에서 필요한 추가 작업을 수행하세요.
        } catch (error) {
          console.log(error);
        }
      }, [navigate]);


    //수정 저장하기
    const handleSave = useCallback(async () => {
        try {
          setIsSubmitting(true);
      
          // Create a new FormData instance
          const formData = new FormData();
          formData.append("userName", profileInfo.userName);
          formData.append("userEmail", profileInfo.userEmail);
          formData.append("profileImage", profileInfo.selectedImage);
      
          // Send the updated user information to the server
          await axios.post("/mypage/userUpdate", formData);
      
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
      
      

    // useEffect(() => {});
    return (
        <form
            action=""
            method="post"
            onSubmit={handleSubmit}
        >
        <div className={styles["profile-total-wrap"]}>
            <div className={styles["profile-update-wrap"]}>
                <div
                    className={styles["profile-update-image"]}
                    
                    onClick={handleImageClick}
                    
                >
                    <img
                        src={process.env.PUBLIC_URL + "/images/camera-4990900.png"}
                        alt="Upload Profile Image"
                    />
                    <img
                        src={profileInfo.selectedImage ? URL.createObjectURL(profileInfo.selectedImage) : null}
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
                        <p className={styles["profile-input-subject"]}>
                            닉네임
                        </p>
                        <input
                            type="text"
                            name="nickname"
                            value={profileInfo.userName}
                            onChange={profileInfoHandler}
                        />
                        {profileInfo.nickname === "" && (
                            <p className={styles["input-error"]}>
                                값이 없습니다.
                            </p>
                        )}
                    </div>
                    <div className={styles["profile-input-003"]}>
                        <p className={styles["profile-input-subject"]}>
                            이메일
                        </p>
                        <input
                            type="text"
                            name="email"
                            value={profileInfo.userEmail}
                            onChange={profileInfoHandler}
                        />
                        {profileInfo.email === "" && (
                            <p className={styles["input-error"]}>
                                값이 없습니다.
                            </p>
                        )}
                    </div>
                </div>
                <div>
                    <p className={styles["member-withdraw"]}
                                onClick={handleExit}
                    >회원탈퇴</p>
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
