import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { addGallery } from "../../_reducers/gallery_reducer";
import { withRouter } from "react-router-dom";
import Button from "../../components/CustomButtons/Button.js";
import { getLoggedInUser } from "../../helpers/authUtils";
import DropDown from "../../components/DropDown/DropDown";
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
  };

  const [imgPath, setImgPath] = useState(null);

  // const id = useSelector((state) => state.galleries.slice(-1)[0].id + 1);

  // const loginUser = getLoggedInUser().name;

  //

  const onChangeHandler = (e) => {
    setGallery({
      ...gallery,
      [e.target.name]: e.target.value,
    });
  };

  const onClickHandler = () => {
    // dispatch(addGallery(gallery));
    // props.history.push("/admin/gallery");

    let cookies = new Cookies();
    const userToken = cookies.get("usertoken");

    const formData = new FormData();
    if (imgPath != null) {
      formData.append("img_path", imgPath[0]);
    }
    formData.append("title", gallery.title);
    formData.append("content", gallery.content);

    axios({
      method: "post",
      url: "http://localhost:8000/api/gallery/",
      data: formData,
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
      });
  };

  const onChangeFile = (e) => {
    setImgPath(e.target.files);
  };

  return (
    <form className={classes.root}>
      <div>
        <Grid container spacing={1}>
          <Grid item xs={2} sm={1}>
            <h4 style={titlefont}>제목</h4>
          </Grid>
          <Grid item xs={10} sm={11}>
            <TextField
              name="title"
              label="제목을 입력해주세요."
              multiline
              fullWidth
              variant="outlined"
              value={gallery.title}
              onChange={(e) => onChangeHandler(e)}
            />
          </Grid>
          <Grid item xs={2} sm={1}>
            <h4 style={titlefont}>내용</h4>
          </Grid>
          <Grid item xs={10} sm={11}>
            <TextField
              name="content"
              label="내용을 입력해주세요."
              multiline
              fullWidth
              variant="outlined"
              rows={10}
              onChange={(e) => onChangeHandler(e)}
              value={gallery.contents}
            />
          </Grid>
        </Grid>

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

export default withRouter(AddGallery);
