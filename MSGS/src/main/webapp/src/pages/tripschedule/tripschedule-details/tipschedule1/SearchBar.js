import React from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./SearchBar.module.css";

const SearchBar = (props) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["inputContainer"]}>
        <button className={styles["search-button"]}>
            <img src={`${process.env.PUBLIC_URL}/images/tipschedule/btn-com-search@3x.png`}
                className={styles["search-icon"]}/>
        </button>
        <input
          type="text"
          placeholder="어느 도시로 여행하시나요?"
          className={styles["input"]}
          onChange={props.getSearchValue}
        />
      </div>
    </div>
    
  );
};

export default SearchBar;
