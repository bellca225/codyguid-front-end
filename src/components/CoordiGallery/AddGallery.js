import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import {  useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import Button from "../../components/CustomButtons/Button.js";

import Grid from "@material-ui/core/Grid";
import { Cookies } from "react-cookie";
import axios from "axios";


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

const AddGallery = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  // const [gallery, setGallery] = useState({
  //   id: null,
  //   header: "",
  //   title: "",
  //   contents: "",
  //   writer: "",
  //   regiDate: "",
  // });

  const [gallery, setGallery] = useState({
    title: "",
    content: "",
  });

  const titlefont = {
    textAlign: "left",
    paddingLeft: "20px",
    fontSize: "14px",
  };

  const title01 = {
    fontSize: "12px",
  };

  const [imgPath, setImgPath] = useState(null);

  // const id = useSelector((state) => state.galleries.slice(-1)[0].id + 1);

  // const loginUser = getLoggedInUser().name;

  //

  const onChangeInput = (e) => {
    setGallery({
      ...gallery,
      [e.target.name]: e.target.value,
    });
  };

  const saveApi = () => {
    // dispatch(addGallery(gallery));
    // props.history.push("/admin/gallery");

    let cookies = new Cookies();
    const userToken = cookies.get("usertoken");

    const galleryData = new FormData();
    if (imgPath != null) {
      galleryData.append("img_path", imgPath[0]);
    }
    galleryData.append("title", gallery.title);
    galleryData.append("content", gallery.content);

    axios({
      method: "post",
      url: "http://localhost:8000/api/gallery/",
      data: galleryData,
      headers: {
        Authorization: `Token	 ${userToken}`,
        "Content-Type": "multipart/form-data",
      },
    })
      .then(function (response) {
        console.log(response);
        alert("등록완료");
        props.history.push("/admin/gallery");
      })
      .catch(function (response) {
        console.log(response);
        if (userToken == null) {
          alert("로그인 후 사용 가능합니다.");
        } else if (gallery.title == "") {
          alert("제목을 입력해주세요.");
        } else if (gallery.content == "") {
          alert("내용을 입력해주세요.");
        } else if (gallery.imgPath == null) {
          alert("이미지를 넣어주세요.");
        }
      });
  };

  const onChangeFile = (e) => {
    setImgPath(e.target.files);
  };

  const box2 = {
    // height: "20px",
    // fontSize: "5px",
    // width: "150px",
    padding: "0 30px 0 0",
  };

  return (
    <form className={classes.root}>
      <div style={box2}>
        <Grid container spacing={1}>
          <Grid item xs={2} sm={1}>
            <h4 style={titlefont}>제목</h4>
          </Grid>
          <Grid item xs={10} sm={11}>
            <TextField
              name="title"
              label="제목을 입력해주세요."
              size="small"
              multiline
              fullWidth
              // variant="outlined"
              value={gallery.title}
              onChange={(e) => onChangeInput(e)}
            />
          </Grid>

          <Grid item xs={2} sm={1}>
            <h4 style={titlefont}>내용</h4>
          </Grid>
          <Grid item xs={10} sm={11}>
            <TextField
              name="content"
              label="내용을 입력해주세요."
              size="small"
              multiline
              fullWidth
              variant="outlined"
              rows={5}
              onChange={(e) => onChangeInput(e)}
              value={gallery.contents}
            />
          </Grid>
          <Grid item xs={2} sm={1}>
            <h4 style={titlefont}> 파일 </h4>
          </Grid>
          <Grid item xs={10} sm={11}>
            <TextField
              type="file"
              fullWidth
              variant="outlined"
              onChange={(e) => onChangeFile(e)}
              // onChange={<img src={img_path} />}
              // style={styles}
            />
          </Grid>
        </Grid>
        <div style={{ float: "right" }}>
          <Button
            style={{ margin: "15px 0 15px 0" }}
            className="write-btn"
            variant="contained"
            color="primary"
            onClick={() => saveApi()}
          >
            등록
          </Button>
        </div>
      </div>
    </form>
  );
};

export default withRouter(AddGallery);
