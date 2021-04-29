import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logOut } from "./loginSlice";

const Login = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  const onClickLogin = () => {
    dispatch(login(user));
  };
  const onClickLogout = () => {
    dispatch(logOut());
  };
  const changeInput = (e) => {
    setUser(e.target.value);
  };
  console.log(state);
  return (
    <div>
      <input type="text" value={user} onChange={changeInput} />
      <button onClick={onClickLogin}>로그인</button>
    </div>
  );
};

export default Login;
