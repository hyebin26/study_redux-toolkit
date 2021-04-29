const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

const posts = [
  {
    id: 1,
    content: "치킨은 맛있어요 ",
  },
  {
    id: 2,
    content: "어떤영화를볼까요 ",
  },
  {
    id: 3,
    content: "코인이 떨어지네요 ?",
  },
];

export const getPostsAPI = async () => {
  await sleep(2000);
  return posts;
};
