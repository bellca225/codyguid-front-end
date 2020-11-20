// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";

// core components/views for Admin layout

// core components/views for RTL layout

import LoginPage from "member/Login.js";
import RegisterPage from "member/Register.js";

const member = [
  {
    path: "/login",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: LoginPage,
    layout: "/member",
    exact: true,
  },

  {
    path: "/register",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: RegisterPage,
    layout: "/member",
  },
];

export default member;
