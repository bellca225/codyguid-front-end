import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import Button from "../../components/CustomButtons/Button.js";
import axios from "axios";
import { Cookies } from "react-cookie";
import { makeStyles } from "@material-ui/core/styles";
import "./gallery.css";

import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    marginBottom: 20,
    fontSize: 14,
  },

  pos1: {
    marginBottom: 10,
    fontWeight: "bold",
  },
  pos2: {
    marginTop: 10,
    marginBottom: 5,
    fontWeight: "bold",
  },
});

const GalleryDetail = (props) => {
  const classes = useStyles();
  let galleryId = props.match.params.id;
  // const gallery = useSelector(
  //   (state) => state.galleries.filter((gallery) => gallery.id == galleryId)[0]
  // );
  // const text = gallery.contents.split("\n").map((i, key) => {
  //   return <div key={key}>{i}</div>;
  // });

  const [gallery, setGallery] = useState({});
  const [mypage, setMypage] = useState({});

  const galleryCall = () => {
    const postApiUrl = `http://localhost:8000/api/gallery/${galleryId}`;
    axios
      .get(postApiUrl)
      .then((response) => {
        console.log("조회목록데이터:", response.data);
        setGallery(response.data);
      })
      .catch((response) => {
        console.error(response);
      });
  };

  const myInfoCall = () => {
    // 로그인 유저 정보 불러오기
    let cookies = new Cookies();
    const userToken = cookies.get("usertoken");
    const myInfoApiUrl = `http://127.0.0.1:8000/api/mypage/`;
    axios
      .get(myInfoApiUrl, { headers: { Authorization: `Token ${userToken}` } })
      .then((response) => {
        setMypage(response.data[0]);
        // console.log("로그인 유저", response.data[0]);
      })
      .catch((response) => {
        console.error(response);
      });
  };

  useEffect(() => {
    galleryCall();
    myInfoCall();
  }, []);

  const onDataSave = () => {
    let cookies = new Cookies();
    const userToken = cookies.get("usertoken");
    const saveApiUrl = `http://localhost:8000/api/gallery/${galleryId}/update/`;

    axios
      .patch(saveApiUrl, { headers: { Authorization: `Token ${userToken}` } })
      .then((response) => {
        alert("수정완료");
        console.log(response);
        props.history.push("admin/addtable");
      })
      .catch((response) => {
        console.error(response);
        alert("수정실패");
      });
  };

  const onDelete = () => {
    let cookies = new Cookies();
    const userToken = cookies.get("usertoken");
    const deleteApiUrl = `http://localhost:8000/api/gallery/${galleryId}/`;

    axios
      .delete(deleteApiUrl, {
        headers: { Authorization: `Token ${userToken}` },
      })
      .then((response) => {
        console.log(response);
        alert("삭제완료");
        props.history.push("/admin/gallery");
      })
      .catch((response) => {
        console.error(response);
        alert("삭제실패");
      });
  };

  return (
    <div>
      <Paper>
        <CardContent>
          <div className="flex01">
            <div className="font-category1">{gallery.title}</div>

            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            ></Typography>

            {String(gallery.created).substring(0, 10) +
              "  |  " +
              gallery.username}
          </div>
          {/* <Typography component="p">
            {gallery.content}
            <br />
            <br />
            <br />
          </Typography> */}

          <hr className="gray"></hr>

          <div className="height15"></div>
          <div className="flex02 width-space-detail-gallery">
            <img src={gallery.img_path} className={classes.img} />
          </div>

          <div className="font-content2">{gallery.content}</div>
        </CardContent>

        <div style={{ float: "right" }}>
          {/* <Button variant="contained" color="primary">
            수정
          </Button>
          <Button
            className="write-btn"
            variant="outlined"
            color="white"
            onClick={() => props.history.goBack()}
          >
            뒤로가기
          </Button> */}
          {gallery.username == mypage.username && (
            <>
              <div className="height15"></div>
              <Button
                className={classes.btn}
                variant="outlined"
                onClick={onDataSave}
                style={{ marginRight: "15px" }}
                color="white"
                disabled
              >
                수정
              </Button>
              <Button
                className={classes.btn}
                variant="contained"
                color="primary"
                onClick={onDelete}
                style={{
                  backgroundColor: "#772fdd",
                }}
                // onClick={openModal}
              >
                삭제
              </Button>
            </>
          )}
          <Button
            className="write-btn"
            variant="outlined"
            onClick={() => props.history.goBack()}
            style={{ marginLeft: "20px", backgroundColor: "#9E38B4" }}
          >
            목록
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default withRouter(GalleryDetail);
