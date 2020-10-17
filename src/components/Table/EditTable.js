import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import Button from "../../components/CustomButtons/Button.js";
import { useSelector } from "react-redux";
import Divider from "@material-ui/core/Divider";
import axios from "axios";
import { Cookies } from "react-cookie";

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

const EditPost = (props) => {
  const classes = useStyles();
  let postId = props.match.params.id;
  // const post = useSelector(
  //   (state) => state.posts.filter((post) => post.id == postId)[0]
  // );
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    post: postId,
    content: "",
  });

  // const text = post.contents.split("\n").map((i, key) => {
  //   return <div key={key}>{i}</div>;
  // });

  const commentCall = () => {
    const commentApiUrl = `http://localhost:8000/api/board/${postId}/comment`;
    axios
      .get(commentApiUrl)
      .then((response) => {
        console.log("댓글:", response.data);
        setComments(response.data);
      })
      .catch((response) => {
        console.error(response);
      });
  };

  useEffect(() => {
    const postApiUrl = `http://localhost:8000/api/board/${postId}`;
    axios
      .get(postApiUrl)
      .then((response) => {
        console.log("조회목록데이터:", response.data);
        setPost(response.data);
      })
      .catch((response) => {
        console.error(response);
      });

    commentCall();
  }, []);

  const commentInputChange = (e) => {
    setNewComment({ ...newComment, content: e.target.value });
  };

  const commentSubmit = () => {
    let cookies = new Cookies();
    const userToken = cookies.get("usertoken");

    console.log("저장된 쿠키토큰값:", userToken);

    axios({
      method: "post",
      url: `http://localhost:8000/api/board/${postId}/comment/`,
      data: newComment,
      headers: {
        Authorization: `Token 	${userToken}`,
      },
    })
      .then(function (response) {
        console.log(response);
        setNewComment({ ...newComment, content: "" });
        commentCall();
      })
      .catch(function (response) {
        console.error(response);
      });
  };


  return (
    <div>
      <Paper>
        <CardContent>
          <Typography className={classes.pos1}>{post.header}</Typography>
          <Divider />
          <Typography className={classes.pos2} variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {String(post.created).substring(0, 10) + " " + post.username}
          </Typography>
          <Typography component="p">
            {post.content}
            <br />
            <br />
            <br />
          </Typography>
          <img src={post.img_path} className={classes.img} />

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

export default withRouter(EditPost);
