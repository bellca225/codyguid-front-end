import React from "react";
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useN01TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n01";
import { withRouter } from "react-router-dom";
import { Column, Row } from "@mui-treasury/components/flex";
import Button from "../../components/CustomButtons/Button.js";

import { useSelector } from "react-redux";

const EditPost = (props) => {
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
          <TextInfoContent
            useStyles={useN01TextInfoContentStyles}
            overline={post.regiDate}
            heading={`${post.header} ${post.title}`}
            body={text}
          />
        </CardContent>
        <Column gap={2}>
          <Row mt={2} alignItems={"center"}></Row>
          <Row mt={2} alignItems={"center"}></Row>
          <Row mt={2} alignItems={"center"}></Row>
          <Row mt={2} alignItems={"center"}></Row>
        </Column>
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
