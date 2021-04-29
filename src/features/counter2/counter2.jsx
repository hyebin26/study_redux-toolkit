import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice2";

const Counter2 = (props) => {
  const count = useSelector((state) => state.counter2.value);
  const dispatch = useDispatch();

  const clickIncrement = () => {
    dispatch(increment());
  };
  const clickDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <button onClick={clickIncrement}>+</button>
      <button onClick={clickDecrement}>-</button>
      <hr />
      <h2>{count}</h2>
    </div>
  );
};

export default Counter2;
