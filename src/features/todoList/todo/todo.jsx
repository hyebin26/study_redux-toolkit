import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "../todoList/todoList";
import { addTodo } from "./todoSlice";
import styles from "./todo.module.css";
import FinishTodo from "../finishTodo/finishTodo";

const Todo = (props) => {
  const todoList = useSelector((state) => state.todo.todoList);
  const finishTodoList = useSelector((state) => state.todo.finishTodoList);
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const [todoId, setTodoId] = useState(0);
  const onChangeTodo = (e) => {
    setContent(e.target.value);
  };
  const clickTodo = (e) => {
    e.preventDefault();
    if (content === "") return false;
    dispatch(addTodo({ id: todoId, todo: content }));
    setTodoId((state) => state + 1);
    setContent("");
  };
  return (
    <>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          value={content}
          onChange={onChangeTodo}
          placeholder="오늘 할 일을 입력해주세요"
        />
        <button onClick={clickTodo} className={styles.button}>
          입력
        </button>
      </form>
      <h2>미완!</h2>
      <ul className={styles.todoContainer}>
        {todoList.length === 0 ? (
          <li>할 일을 입력해주세요!</li>
        ) : (
          todoList.map((item) => <TodoList content={item.todo} id={item.id} />)
        )}
      </ul>
      <h2>완료!</h2>
      <ul className={styles.finishContainer}>
        {finishTodoList.length === 0 ? (
          <li>할 일을 끝내주세요!</li>
        ) : (
          finishTodoList.map((item) => (
            <FinishTodo content={item.todo} id={item.id} />
          ))
        )}
      </ul>
    </>
  );
};

export default Todo;
