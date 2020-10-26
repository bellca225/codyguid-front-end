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
import "../CoordiGallery/gallery.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// const theme = createMuiTheme({
//   overrides: {
//     palette: {
//       primary: { main: "#9E38B4" },
//       secondary: {
//         // light: "#0066ff",
//         main: "#0044ff",
//         // dark: will be calculated from palette.secondary.main,
//         // contrastText: "#ffcc00",
//       },
//       neutral: {
//         main: "#5c6ac4",
//       },
//     },

//     contrastText: "#fff",
//     MuiIconButton: {
//       root: {
//         "&:hover": {
//           color: "#00acc1",
//         },
//       },
//     },
//   },
// });

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#11cb5f",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
});

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
    marginTop: 15,
    marginBottom: 10,
    fontWeight: "600",
    fontSize: 20,
    // color: "#666",
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
  const [mypage, setMypage] = useState({});

  // const text = post.contents.split("\n").map((i, key) => {
  //   return <div key={key}>{i}</div>;
  // });

  const postUrl = () => {
    const postApi = `http://localhost:8000/api/board/${postId}`;
    axios
      .get(postApi)
      .then((response) => {
        console.log("조회목록데이터:", response.data);
        setPost(response.data);
      })
      .catch((response) => {
        console.error(response);
      });
  };

  const mypageUrl = () => {
    // 로그인 유저 정보 불러오기
    let cookies = new Cookies();
    const userToken = cookies.get("usertoken");
    const mypageApi = `http://127.0.0.1:8000/api/mypage/`;
    axios
      .get(mypageApi, { headers: { Authorization: `Token ${userToken}` } })
      .then((response) => {
        setMypage(response.data[0]);
        // console.log("로그인 유저", response.data[0]);
      })
      .catch((response) => {
        console.error(response);
      });
  };

  useEffect(() => {
    postUrl();
    mypageUrl();
  }, []);

  const ModifyUrl = () => {
    let cookies = new Cookies();
    const userToken = cookies.get("usertoken");
    const saveApiUrl = `http://localhost:8000/api/board/${postId}/update/`;

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

  const deleteUrl = () => {
    let cookies = new Cookies();
    const userToken = cookies.get("usertoken");
    const deleteApi = `http://localhost:8000/api/board/${postId}/`;

    axios
      .delete(deleteApi, {
        headers: { Authorization: `Token ${userToken}` },
      })
      .then((response) => {
        console.log(response);
        alert("삭제완료");
        props.history.push("/admin/table");
      })
      .catch((response) => {
        console.error(response);
        alert("삭제실패");
      });
  };

  return (
    <div>
      <Paper>
        <MuiThemeProvider theme={theme}>
          <CardContent>
            <div className="flex01">
              <div className="font-category">{post.category}</div>
              <div>
                {String(post.created).substring(0, 10) +
                  "  |  " +
                  post.username}
              </div>
            </div>
            <Divider />
            <div className={classes.pos2} variant="h5" component="h2">
              {post.title}
              <br />
            </div>
            <div
              className={classes.title}
              color="textSecondary"
              gutterBottom
            ></div>
            <Typography component="p" className="font-content">
              <br />

              {post.content}
              <br />
              <br />
            </Typography>

            <div className="width-space-detail">
              <img src={post.img_path} className={classes.img} />
            </div>
          </CardContent>

          <div style={{ float: "right", marginTop: "20px" }}>
            {/* <Button
              variant="contained"
              color="primary"
              style={{ marginRight: "15px" }}
              color="white"
              disabled
            >
              수정
            </Button> */}
            {/* <Button
              variant="contained"
              color="primary"
              onClick={deleteUrl}
              style={{
                backgroundColor: "#772fdd",
              }}
            >
              삭제
            </Button> */}

            {post.username == mypage.username && (
              <>
                <Button
                  className={classes.btn}
                  variant="outlined"
                  color="white"
                  onClick={ModifyUrl}
                  disabled
                  style={{
                    marginRight: "15px",
                  }}
                >
                  수정
                </Button>
                <Button
                  className={classes.btn}
                  variant="contained"
                  color="secondary"
                  onClick={deleteUrl}
                  // onClick={openModal}
                  style={{
                    backgroundColor: "#772fdd",
                  }}
                >
                  삭제
                </Button>
              </>
            )}
            <Button
              className="write-btn"
              variant="outlined"
              onClick={() => props.history.goBack()}
              style={{ marginLeft: "15px", backgroundColor: "#9E38B4" }}
            >
              목록
            </Button>
          </div>
        </MuiThemeProvider>
      </Paper>
    </div>
  );
};

export default withRouter(EditPost);
