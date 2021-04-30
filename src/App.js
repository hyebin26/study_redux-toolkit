import React from "react";
import styles from "./app.module.css";
import AddName from "./components/addName/addName";
import Todo from "./components/todo/todo";

const App = (props) => {
  return (
    <div className={styles.container}>
      <AddName />
      <Todo />
    </div>
  );
};

export default App;
