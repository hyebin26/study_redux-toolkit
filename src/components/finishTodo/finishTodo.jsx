import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import styles from "./finishTodo.module.css";
import { deleteTodo, notFinishTodoList } from "../../modules/todoSlice";

const FinishTodo = ({ content, id }) => {
  const dispatch = useDispatch();
  const liRef = useRef();
  const deleteClick = () => {
    const type = liRef.current.dataset.type;
    dispatch(deleteTodo({ id, type }));
  };
  const notFinishClick = () => {
    dispatch(notFinishTodoList({ id, content }));
  };
  return (
    <ul className={styles.container}>
      <li className={styles.item} ref={liRef} data-type="finishTodoList">
        <span className={styles.content}>{content}</span>
        <button className={styles.deleteBtn} onClick={deleteClick}>
          삭제
        </button>
        <button className={styles.finishBtn} onClick={notFinishClick}>
          미완
        </button>
      </li>
    </ul>
  );
};

export default FinishTodo;
