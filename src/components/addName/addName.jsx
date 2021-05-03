import React, { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addName } from "../../modules/addNameSlice";
import styles from "./addName.module.css";

const AddName = memo(() => {
  const name = useSelector((state) => state.addName);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");

  const clickTitleBtn = (e) => {
    e.preventDefault();
    dispatch(addName(userName));
  };
  const nameInputChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <>
      {name ? (
        <div className={styles.container}>
          <h2>안녕하세요 {name}님</h2>
        </div>
      ) : (
        <form className={styles.form}>
          <input
            className={styles.input}
            type="text"
            placeholder="이름을 입력해주세요"
            value={userName}
            onChange={nameInputChange}
          />
          <button onClick={clickTitleBtn} className={styles.button}>
            입력
          </button>
        </form>
      )}
    </>
  );
});

export default AddName;
