import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { addPosting } from "../../_reducers/post_reducer";
import { withRouter } from "react-router-dom";
import Button from "../../components/CustomButtons/Button.js";
import { getLoggedInUser } from "../../helpers/authUtils";
import DropDown from "../../components/DropDown/DropDown";
import Grid from "@material-ui/core/Grid";
import { Cookies } from "react-cookie";
import axios from "axios";

const inputProps = {
  step: 300,
};

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
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
}));

const titlefont = {
  textAlign: "left",
  paddingLeft: "20px",
};

const AddTable = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  // const [post, setPost] = useState({
  //   id: null,
  //   header: "",
  //   title: "",
  //   contents: "",
  //   writer: "",
  //   regiDate: "",
  // });

  const [post, setPost] = useState({
    category: "",
    title: "",
    content: "",
  });

  // const id = useSelector((state) => state.posts.slice(-1)[0].id + 1);

  // const loginUser = getLoggedInUser().name;

  // useEffect(() => {
  //   setPost({
  //     ...post,
  //     id: id,
  //     writer: "loginUser",
  //     regiDate: new Date().toLocaleDateString(),
  //   });
  // }, []);

  const [imgPath, setImgPath] = useState(null);

  const onChangeHandler = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const onClickHandler = () => {
    // dispatch(addPosting(post));
    // props.history.push("/admin/table");

    let cookies = new Cookies();
    const userToken = cookies.get("usertoken");

    const formData = new FormData();
    if (imgPath != null) {
      formData.append("img_path", imgPath[0]);
    }
    formData.append("title", post.title);
    formData.append("content", post.content);
    formData.append("category", post.category);

    axios({
      method: "post",
      url: "http://localhost:8000/api/board/",
      data: formData,
      headers: {
        Authorization: `Token	 ${userToken}`,
        "Content-Type": "multipart/form-data",
      },
    })
      .then(function (response) {
        console.log(response);
        props.history.push("/admin/table");
      })
      .catch(function (response) {
        console.log(response);
      });
  };

  const onChangeFile = (e) => {
    setImgPath(e.target.files);
  };

  const box1 = {
    // height: "20px",
    fontSize: "10px",
  };

  const box2 = {
    // height: "20px",
    fontSize: "5px",
    // width: "150px",
  };

  return (
    <form className={classes.root}>
      <div>
        <DropDown
          title="전체"
          value={["Q&A", "여행 TIP", "자유 게시판"]}
          onChange={(value) => setPost({ ...post, category: value })}
        />

        <TextField
          name="title"
          label="제목"
          multiline
          fullWidth
          variant="outlined"
          value={post.title}
          onChange={(e) => onChangeHandler(e)}
          style={box1}
        />

        <TextField
          name="content"
          label="내용"
          multiline
          fullWidth
          variant="outlined"
          rows={10}
          onChange={(e) => onChangeHandler(e)}
          value={post.contents}
        />

        <TextField
          type="file"
          fullWidth
          variant="outlined"
          onChange={(e) => onChangeFile(e)}
          // style={styles}
        />
        <div style={{ float: "right" }}>
          <Button
            style={{ margin: "3px" }}
            className="write-btn"
            variant="contained"
            color="primary"
            onClick={() => onClickHandler()}
          >
            등록
          </Button>
        </div>
      </div>
    </form>
  );
};

export default withRouter(AddTable);
