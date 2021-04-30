import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addName } from "../../modules/addNameSlice";
import styles from "./title.module.css";

const Title = (props) => {
  const name = useSelector((state) => state.title);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const clickTitleBtn = (e) => {
    e.preventDefault();
    dispatch(addName(title));
  };
  const titleChange = useCallback(
    (e) => {
      setTitle(e.target.value);
    },
    [title]
  );
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
            value={title}
            onChange={titleChange}
          />
          <button onClick={clickTitleBtn} className={styles.button}>
            입력
          </button>
        </form>
      )}
    </>
  );
};

export default Title;
