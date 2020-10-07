import { ADD_POSTING, EDIT_POSTING, DELETE_POSTING } from "../actions/types";

export const addPosting = (post) => ({
  type: ADD_POSTING,
  post,
});

export const editPosting = (id) => {
  return {
    type: EDIT_POSTING,
    id,
  };
};

export const deletePosting = (id) => {
  return {
    type: DELETE_POSTING,
    id,
  };
};

const initialState = [
  {
    id: 1,
    header: "여행 TIP",
    title: "코디 Tip",
    contents: "옷을 겹겹이 입는게 더 따뜻합니다.",
    writer: "test1",
    regiDate: "2020.9.19",
  },
  {
    id: 2,
    header: "자유 게시판",
    title: "질문합니다",
    contents: "내일 여행가는데 반팔에 반바지만 챙겨도 괜찮나요?",
    writer: "test2",
    regiDate: "2020.9.20",
  },
];

const posts = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POSTING:
      return state.concat(action.post);
    case DELETE_POSTING:
      return state.filter((post) => post.id !== action.id);
    default:
      return state;
  }
};

export default posts;
