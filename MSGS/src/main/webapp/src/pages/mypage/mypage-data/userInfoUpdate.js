import axios from "axios";

export const fetchUserInfoUpdate = async (tokenValue, userNick, userImg) => {
  try {
    const response = await fetch("/mypage/updateMyInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tokenValue: tokenValue,
        userNick: userNick,
        userImg: userImg,
      }),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
