// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";

import AddPost from "views/TableList/AddPost.js";

const board = [
  {
    path: "/addtable",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: AddPost,
    layout: "/board",
  },
];

export default board;
