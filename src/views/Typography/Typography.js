import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Quote from "components/Typography/Quote.js";
import Muted from "components/Typography/Muted.js";
import Primary from "components/Typography/Primary.js";
import Info from "components/Typography/Info.js";
import Success from "components/Typography/Success.js";
import Warning from "components/Typography/Warning.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import Image2 from "../../miniIcon/0101.png";
import Image from "../../miniIcon/0102.png";

const styles = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative",
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px",
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);
const div1 = {
  marginRight: "50px",
};
export default function TypographyPage() {
  const classes = useStyles();
  return (
    <>
      <hr style={{ opacity: "0.2", width: "100%" }} />
      <div style={{ height: "1px" }}></div>
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>World Weather Cody Guide</h4>
          <p className={classes.cardCategoryWhite}>
            코디 가이드의 사이트 소개입니다. 간단히 읽고 즐겁게 이용해주세요.
          </p>
        </CardHeader>
        <CardBody>
          {/* <div className={classes.typo}>
          <div className={classes.note}>사용 안내</div>
          <p>The Life of Material Dashboard</p>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>코디 가이드</div>
          <h2>The Life of Material Dashboard</h2>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>코디 갤러리</div>
          <h3>The Life of Material Dashboard</h3>
        </div> */}
          {/* <div className={classes.typo}>
          <div className={classes.note}>Header 4</div>
          <h4>The Life of Material Dashboard</h4>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Header 5</div>
          <h5>The Life of Material Dashboard</h5>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Header 6</div>
          <h6>The Life of Material Dashboard</h6>
        </div> */}
          <div style={div1} className={classes.typo}>
            <div className={classes.note}>소개</div>
            <p style={{ marginTop: "30px" }}>
              코디 가이드 사이트는 사용자가 원하는 장소의 날씨에 가장 알맞은
              코디를 안내해줍니다.
              <br /> 구글 지도를 이용해 사용자가 원하는 위치의 지역 날씨를
              불러와 날씨에 맞는 최적의 코디 가이드 라인을 제공하며, 커뮤니티와
              갤러리를 통해 다양한 지역의 사람들이 올린 코디를 확인할 수 있고,
              직접 올릴 수 있습니다
            </p>
          </div>
          <div style={div1} className={classes.typo}>
            <div className={classes.note}>사용 예시</div>
            <Quote
              text="
            
            "
              author=" 
            현재 위치로 이동하기 버튼 혹은 지도맵에 마커를 남겨 지역을 설정한 후 현재 날씨로 코디 설정을 누르면 자동으로 날씨에 맞는 코디와 추가로 챙겨야 할 팁을 안내해드립니다.
            "
            />
            <img style={{ width: "700px" }} src={Image} alt="이미지"></img>
          </div>

          <div style={div1} className={classes.typo}>
            <Primary>
              <div>코디 가이드</div>
            </Primary>

            <p>
              구글 지도를 이용해 사용자가 원하는 위치의 지역 날씨를 불러와
              날씨에 맞는 최적의 코디 가이드 라인을 제공하며, 커뮤니티와
              갤러리를 통해 다양한 지역의 사람들이 올린 코디를 확인할 수 있고,
              직접 올릴 수 있습니다
              {/* I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers... I will be the leader of a
            company that ends up being worth billions of dollars, because I got
            the answers. I understand culture. I am the nucleus. I think that’s
            a responsibility that I have, to push possibilities, to show people,
            this is the level that things could be at. */}
            </p>
          </div>

          <div style={div1} className={classes.typo}>
            <Info>
              <div>코디 커뮤니티</div>
            </Info>
            {/* <div className={classes.note}>코디 커뮤니티</div> */}
            <p>
              {/* I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers. I understand culture. I am
            the nucleus. I think that’s a responsibility that I have, to push
            possibilities, to show people, this is the level that things could
            be at. */}
              사이트를 이용하는 사용자들이 올리는 코디 팁을 공유하고, 자유롭게
              글을 올릴 수 있는 공간입니다.
            </p>
          </div>

          <div style={div1} className={classes.typo}>
            <Success>
              <div>코디 갤러리</div>
            </Success>
            {/* <div className={classes.note}>코디 갤러리</div> */}
            <p>
              사이트를 이용하는 사용자들이 코디를 진행한 사진을 올리는
              공간입니다
            </p>
          </div>

          <div style={div1} className={classes.typo}>
            {/* <div className={classes.note}>마이 페이지</div> */}
            <Warning>
              <div>마이 페이지</div>
            </Warning>

            <p>
              사용자의 정보를 수정하는 공간입니다
              {/* I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers. I understand culture. I am
            the nucleus. I think that’s a responsibility that I have, to push
            possibilities, to show people, this is the level that things could
            be at. */}
            </p>

            {/* <Muted>
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers...
          </Muted> */}
          </div>
          {/* <div className={classes.typo}>
          <div className={classes.note}>Primary Text</div>
          <Primary>
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers...
          </Primary>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Info Text</div>
          <Info>
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers...
          </Info>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Success Text</div>
          <Success>
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers...
          </Success>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Warning Text</div>
          <Warning>
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers...
          </Warning>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Danger Text</div>
          <Danger>
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers...
          </Danger>
        </div> */}
          {/* <div className={classes.typo}>
          <div className={classes.note}>Small Tag</div>
          <h2>
            Header with small subtitle
            <br />
            <small>
              Use {'"'}Small{'"'} tag for the headers
            </small>
          </h2>
        </div> */}
        </CardBody>
      </Card>
    </>
  );
}
