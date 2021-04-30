import React from "react";
import Title from "./features/todoList/title/title";
import Todo from "./features/todoList/todo/todo";
import styles from "./app.module.css";

const App = (props) => {
  return (
    <div className={styles.container}>
      <Title />
      <Todo />
    </div>
  );
};

export default App;
