import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, finishTodoList } from "../../modules/todoSlice";
import styles from "./todoList.module.css";

const TodoList = ({ content, id }) => {
  const dispatch = useDispatch();
  const liRef = useRef();
  const deleteClick = () => {
    const type = liRef.current.dataset.type;
    dispatch(deleteTodo({ id, type }));
  };
  const finishClick = () => {
    dispatch(finishTodoList({ id, content }));
  };

  return (
    <ul className={styles.container}>
      <li className={styles.item} ref={liRef} data-type="todoList">
        <span className={styles.content}>{content}</span>
        <button className={styles.deleteBtn} onClick={deleteClick}>
          삭제
        </button>
        <button className={styles.finishBtn} onClick={finishClick}>
          완료
        </button>
      </li>
    </ul>
  );
};

export default TodoList;
