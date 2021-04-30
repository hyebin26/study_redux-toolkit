import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../features/posts/postsSlice";

const Posts = (props) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (!data) return <div>로딩중...</div>;
  return data.map((item) => <h2>{item.content}</h2>);
};

export default Posts;
