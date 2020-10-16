import { Cookies } from "react-cookie";
import { LOGIN_USER, REGISTER_USER } from "../actions/types";

import axios from "axios";

// export function loginUser(dataToSubmit) {
//   const apiUrl = "http://127.0.0.1:8000/api/get_token/";

//   const request = axios
//     .post(apiUrl, dataToSubmit)
//     .then((response) => {
//       console.log("호출 결과 :", response.data);
//       const token = response.data.token;
//       let cookies = new Cookies();
//       cookies.set("usertoken", token, { path: "/admin" });
//     })
//     .catch((response) => {
//       console.error(response);
//     });

//   return {
//     type: LOGIN_USER,
//     payload: request,
//   };
// }

// export function registerUser(dataToSubmit) {

//   const apiUrl = "http://127.0.0.1:8000/api/register/";
//   const request = axios
//     .post(apiUrl, dataToSubmit)
//     .then((response) => {
//       console.log("호출 결과 :", response.data);
//     })
//     .catch((response) => {
//       console.error(response, "불러오지 못했습니다.");
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

export const loginUser = (email, password) => ({
  type: LOGIN_USER,
  email,
  password,
});

const initialState = {
  members: [
    {
      name: "test1",
      email: "test1@test.co.kr",
      password: "test1",
    },
    {
      name: "test2",
      email: "test2@test.co.kr",
      password: "test2",
    },
  ],
  loginUser: {},
  // isLogin: false,
};

// const member = (state = {}, action) => {
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
// };

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
        (user) => user.email == action.email && user.password == action.password
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
