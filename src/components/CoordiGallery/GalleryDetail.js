import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import Button from "../../components/CustomButtons/Button.js";
import axios from "axios";
import { Cookies } from "react-cookie";
import { makeStyles } from "@material-ui/core/styles";

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

  useEffect(() => {
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
  }, []);

  return (
    <div>
      <Paper>
        <CardContent>
          <Typography className={classes.pos2}>{gallery.title}</Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
          ></Typography>

          <Typography component="p">
            {gallery.content}
            <br />
            <br />
            <br />
          </Typography>
          <div className="width-space-detail">
            <img src={gallery.img_path} className={gallery.img} />
          </div>
        </CardContent>

        <div style={{ float: "right" }}>
          <Button variant="contained" color="primary">
            수정
          </Button>
          <Button
            className="write-btn"
            variant="outlined"
            color="white"
            onClick={() => props.history.goBack()}
          >
            뒤로가기
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default withRouter(GalleryDetail);
