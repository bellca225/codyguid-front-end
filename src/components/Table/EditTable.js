import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import Button from "../../components/CustomButtons/Button.js";
import { useSelector } from "react-redux";
import Divider from "@material-ui/core/Divider";

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
  const post = useSelector(
    (state) => state.posts.filter((post) => post.id == postId)[0]
  );
  const text = post.contents.split("\n").map((i, key) => {
    return <div key={key}>{i}</div>;
  });

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
            {post.regiDate} | {post.writer}
          </Typography>
          <Typography component="p">
            {text}
            <br />
            <br />
            <br />
            <br />
            <br />
          </Typography>
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
