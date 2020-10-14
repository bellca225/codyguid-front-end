//사용자 인증관련 유틸리티 함수 제공 모듈
import { Cookies } from "react-cookie";

/**
 * 로그인 사용자 정보 조회 반환 함수
 */
const getLoggedInUser = () => {
  const cookies = new Cookies();
  const user = cookies.get("user");
  return user ? (typeof user == "object" ? user : JSON.parse(user)) : null;
};

const getUserToken = () => {
  const cookies = new Cookies();
  const userToken = cookies.get("usertoken");
  return userToken;
};

const setCookieExpire = () => {
  const cookies = new Cookies();
  cookies.remove("usertoken");
};

const isUserAuthenticated = () => {
  const userToken = getUserToken();
  if (userToken == null) {
    return false;
  } else {
    return true;
  }
};
const notLoginRedirect = () => {
  const userToken = getUserToken();

  if (!isUserAuthenticated()) {
    window.location = "/admin/login";
  }
};

export {
  getLoggedInUser,
  getUserToken,
  isUserAuthenticated,
  setCookieExpire,
  notLoginRedirect,
};
