import React from "react";
import Counter2 from "./features/counter2/counter2";
import Login from "./features/login/login";
import Posts from "./features/posts/posts";

const App = (props) => {
  return (
    <div>
      <Counter2 />
      <Posts />
      <Login />
    </div>
  );
};

export default App;
