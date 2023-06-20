import React from 'react';
import styles from './restaurant-data/RestaurantData.module.css';
import RestaurantItemImg from './RestaurantItemThumbnail';


const RestaurantItem = ( props ) => {
    const { title } = props; // 식당 이름
    const { firstimage } = props; // 사진1
    const { firstimage2 } = props; // 사진2
    const { addr1 } = props; // 주소
    const { addr2 } = props; // 상세주소

    // console.log(title);
    // tripImg의 요소길이 반환 → 이미지 개수에 따른 CSS 조정
    let length = 1;

    

    return (
        <div className={styles["trip-story-item-div"]}>
            <RestaurantItemImg restaurantImg={firstimage} length={length} />
            <div className={styles["trip-story-item-info"]}>
                <p>
                    {firstimage2.length > 0 ? (
                        <img
                            className={styles["trip-story-item-user-profile"]}
                            src={firstimage2}
                            alt="userImg"
                        />
                    ) : (
                        <img
                            className={styles["trip-story-item-user-profile"]}
                            src="https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/8bf768bf-628c-491f-9312-9f1852b1162a.jpeg"
                            alt="userImg"
                        />
                    )}
                </p>
                <p className={styles["trip-story-item-title"]}>
                    {title}
                </p>
                <div className={styles["restaurant-addrs"]}>
                    <p className={styles["trip-story-item-tag"]}>{addr1}</p>
                    <p className={styles["trip-story-item-tag"]}>{addr2}</p>
                </div>
                
            </div>
        </div>
        );
    };

export default RestaurantItem;