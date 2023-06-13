import React from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <button className={styles.button}>
          <FaSearch className={styles.icon} />
        </button>
        <input
          type="text"
          placeholder="어느 도시로 여행하시나요?"
          className={styles.input}
        />
      </div>
    </div>
    
  );
};

export default SearchBar;
