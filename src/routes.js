/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import AddPost from "views/TableList/AddPost.js";
import EditTable from "views/TableList/EditTable.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
import Gallery from "views/CoordiGallery/Gallery.js";
// import Gallery from "components/CoordiGallery/Gallery.js";
import AddGallery from "views/CoordiGallery/AddGallery.js";
import GalleryDetail from "views/CoordiGallery/GalleryDetail.js";

// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";
import LoginPage from "member/Login.js";
import RegisterPage from "member/Register.js";

// import pantshort from "./clothesIcon";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "코디 가이드",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
    exact: true,
  },

  {
    path: "/login",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: LoginPage,
    layout: "/admin",
    exact: true,
    invisible: true,
  },

  {
    path: "/register",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: RegisterPage,
    layout: "/admin",
    invisible: true,
  },

  // {
  //   path: "/maps",
  //   name: "Maps",
  //   rtlName: "خرائط",
  //   icon: LocationOn,
  //   component: Maps,
  //   layout: "/admin",
  // },

  {
    path: "/table",
    name: "코디 커뮤니티",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
    exact: true,
  },

  {
    path: "/addtable",
    name: "코디 커뮤니티",
    rtlName: "لوحة القيادة",
    component: AddPost,
    layout: "/admin",
    invisible: true,
  },

  {
    path: "/edittable/:id",
    name: "코디 커뮤니티",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: EditTable,
    layout: "/admin",
    invisible: true,
  },

  {
    path: "/gallery",
    name: "코디 갤러리",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: Gallery,
    layout: "/admin",
    // invisible: true,
  },

  {
    path: "/addgallery",
    name: "코디 갤러리",
    rtlName: "ملف تعريفي للمستخدم",
    component: AddGallery,
    layout: "/admin",
    invisible: true,
  },

  {
    path: "/gallerydetail/:id",
    name: "코디 갤러리",
    rtlName: "ملف تعريفي للمستخدم",
    component: GalleryDetail,
    layout: "/admin",
    invisible: true,
  },

  {
    path: "/user",
    name: "마이 페이지",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: " 사이트 소개",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin",
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: BubbleChart,
  //   component: Icons,
  //   layout: "/admin",
  // },

  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: Notifications,
  //   component: NotificationsPage,
  //   layout: "/admin",
  // },
  // {
  //   path: "/rtl-page",
  //   name: "RTL Support",
  //   rtlName: "پشتیبانی از راست به چپ",
  //   icon: Language,
  //   component: RTLPage,
  //   layout: "/rtl"
  // },
  // {
  //   path: "/upgrade-to-pro",
  //   name: "Sns 공유하기",
  //   rtlName: "التطور للاحترافية",
  //   icon: Unarchive,
  //   component: UpgradeToPro,
  //   layout: "/admin",
  // },
];

export default dashboardRoutes;
