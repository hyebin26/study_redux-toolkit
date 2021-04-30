import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";

const Counter = (props) => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const clickIncrement = () => {
    dispatch(increment());
  };
  const clickDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <div>
        <button onClick={clickIncrement}>+</button>
        <button onClick={clickDecrement}>-</button>
        <hr />
        <span>{count}</span>
      </div>
    </div>
  );
};

export default Counter;
