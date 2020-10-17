import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Pagination from "@material-ui/lab/Pagination";
import Button from "../CustomButtons/Button.js";
import DropDown from "../../components/DropDown/DropDown";
import { withRouter } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

// core components
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";

const useStyles = makeStyles(styles);

function CustomTable(props) {
  const classes = useStyles();

  const tableHeaderColor = "primary";
  const tableHead = [
    "번호",
    "주제",
    "글제목",
    "작성자",
    "등록일",
    "조회수",
    "댓글",
  ];
  const [tableData, setTableData] = useState([]);
  const [allData, setAllData] = useState([]);
  const allTable = useSelector((state) => state.posts);

  useEffect(() => {
    const newTable = [];
    for (let i = 0; i < allTable.length; i++) {
      newTable.push([
        allTable[i].id,
        allTable[i].header,
        allTable[i].title,
        allTable[i].writer,
        allTable[i].regiDate,
        allTable[i].view,
        allTable[i].comment,
      ]);
    }
    setAllData(newTable);
    setTableData(newTable.slice(0, 10));
  }, [allTable]);

  const handlePage = (event, value) => {
    const startNum = (value - 1) * 10;
    const endNum = value * 10;
    setTableData(allData.slice(startNum, endNum));
  };

  const addPost = () => {
    props.history.push("/admin/addtable");
  };

  return (
    <div className={classes.tableResponsive}>
      <div>
        <DropDown onChange={(value) => value} />
      </div>
      <Table className={classes.table}>
        <colgroup>
          <col style={{ width: "10%" }} />
          <col style={{ width: "15%" }} />
          <col style={{ width: "30%" }} />
          <col style={{ width: "20%" }} />
          <col style={{ width: "12%" }} />
          <col style={{ width: "8%" }} />
          <col style={{ width: "5%" }} />
        </colgroup>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((prop, key) => {
            return (
              <TableRow key={key} className={classes.tableBodyRow}>
                {prop.map((index, key) => {
                  return (
                    <TableCell className={classes.tableCell} key={key}>
                      <RouterLink to={`/admin/edittable/${prop[0]}`}>
                        {index}
                      </RouterLink>
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <div style={{ float: "right" }}>
        <Button
          variant="contained"
          color="primary"
          className="write-btn"
          onClick={addPost}
        >
          글쓰기
        </Button>
      </div>
      <div className={classes.root}>
        <Pagination
          count={parseInt(allTable.length / 11) + 1}
          shape="rounded"
          onChange={handlePage}
        />
      </div>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray",
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};
export default withRouter(CustomTable);
