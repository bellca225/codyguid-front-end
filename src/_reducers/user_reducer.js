import { Cookies } from "react-cookie";
import { LOGIN_USER, REGISTER_USER } from "../actions/types";

// import axios from "axios";

// export function loginUser(dataToSubmit) {
//   const request = axios
//     .post("http://localhost:8000/member/sign-up", dataToSubmit)
//     .then((response) => response.data);

//   return {
//     type: LOGIN_USER,
//     payload: request,
//   };
// }

// export function registerUser(dataToSubmit) {
//   const request = axios
//     .post("http://localhost:8000/member/sign-up", dataToSubmit)
//     .then((response) => {
//       console.log("데이터 등록 완료", response.data);
//       alert("등록완료");
//     })
//     .catch((response) => {
//       console.error(response);
//     });

//   return {
//     type: REGISTER_USER,
//     payload: request,
//   };
// }

export const registerUser = (member) => ({
  type: REGISTER_USER,
  member,
});

export const loginUser = (memberId, memberPwd) => ({
  type: LOGIN_USER,
  memberId,
  memberPwd,
});

const initialState = {
  members: [
    {
      memberId: "test1",
      memberPwd: "test1",
      name: "test1",
      email: "test1@test.co.kr",
    },
    {
      memberId: "test2",
      memberPwd: "test2",
      name: "test2",
      email: "test2@test.co.kr",
    },
  ],
  // loginUser: {},
  // isLogin: false,
};

// export default function (state = {}, action) {
//   switch (action.type) {
//     case LOGIN_USER:
//       return { ...state, loginSuccess: action.payload };
//       break;
//     case REGISTER_USER:
//       return { ...state, register: action.payload };
//       break;

//     default:
//       return state;
//   }
// }

const member = (state = initialState, action) => {
  const setSession = (user) => {
    const cookies = new Cookies();
    if (user) cookies.set("user", JSON.stringify(user), { path: "/admin" });
    else cookies.remove("user");
  };
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, members: state.members.concat(action.member) };
    case LOGIN_USER: {
      const loginMember = state.members.filter(
        (user) =>
          user.memberId == action.memberId && user.memberPwd == action.memberPwd
      );

      if (loginMember.length == 1) {
        console.log("리덕스 로그인 일치 사용자:", loginMember[0]);
        setSession(loginMember[0]);
        return {
          ...state,
          loginMember: loginMember,
        };
      } else {
        let cookies = new Cookies();
        cookies.remove("user");
        return state;
      }
    }
    default:
      return state;
  }
};
export default member;
