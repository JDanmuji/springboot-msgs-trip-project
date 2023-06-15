import React, { useEffect, useRef } from 'react';

import styles from "./Tripstory.module.css";
import WriteForm from "./WriteForm.js";
import Map from '../../../components/tripstory/tripstory-write/Map';

//tripstory 가장 첫 컴포넌트입니다. 
const Create = () => {

    return (
        <div className={styles["width-wrapper1"]}>
            {/* <img
                    className={styles["map"]}
                    src="https://velog.velcdn.com/images/ljs7463/post/744d448c-ba31-4263-8c6b-b4001d1e1a84/image.png"
            /> */}
            <div className={styles['map']}>
				<Map />
			</div>
            
            <WriteForm />
            
        </div>
    );
};

export default Create;