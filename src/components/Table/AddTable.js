import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { addPosting } from "../../_reducers/post_reducer";
import { withRouter } from "react-router-dom";
import Button from "../../components/CustomButtons/Button.js";
import { getLoggedInUser } from "../../helpers/authUtils";
import DropDown from "../../components/DropDown/DropDown";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  form: {
    width: "98%", // Fix IE 11 issue.
    // marginTop: theme.spacing(0),
  },
}));

const AddTable = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [post, setPost] = useState({
    id: null,
    header: "",
    title: "",
    contents: "",
    writer: "",
    regiDate: "",
  });

  const id = useSelector((state) => state.posts.slice(-1)[0].id + 1);

  // const loginUser = getLoggedInUser().name;

  useEffect(() => {
    setPost({
      ...post,
      id: id,
      writer: "loginUser",
      regiDate: new Date().toLocaleDateString(),
    });
  }, []);

  const onChangeHandler = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const onClickHandler = () => {
    dispatch(addPosting(post));
    props.history.push("/admin/table");
  };

  return (
    <div style={{ display: "flex" }}>
      <form className={classes.form}>
        <div className={classes.root}>
          <div>
            <DropDown
              onChange={(value) => setPost({ ...post, header: value })}
            />
            <h4>제목</h4>
            <TextField
              name="title"
              label="제목을 작성해주세요"
              multiline
              fullWidth
              variant="outlined"
              value={post.title}
              onChange={onChangeHandler}
            />

            <h4>내용</h4>
            <TextField
              name="contents"
              label="내용을 입력해주세요"
              multiline
              fullWidth
              variant="outlined"
              rows={15}
              value={post.contents}
              onChange={onChangeHandler}
            />

            <Button
              style={{ margin: "3px" }}
              className="write-btn"
              variant="contained"
              color="primary"
              onClick={onClickHandler}
            >
              등록
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default withRouter(AddTable);
