import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import axios from "axios";
import avatar from "assets/img/faces/camila.png";
import { Cookies } from "react-cookie";

const styles = {
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

export default function UserProfile(props) {
  const classes = useStyles();
  let id = props.match.params.id;

  const [mypage, setMypage] = useState({});

  const mypageUrl = () => {
    let cookies = new Cookies();
    const userToken = cookies.get("usertoken");
    const mypageApi = `http://localhost:8000/api/mypage/`;
    axios
      .get(mypageApi, { headers: { Authorization: `Token ${userToken}` } })
      .then((response) => {
        setMypage(response.data[0]);
        console.log("로그인 유저", response.data);
      })
      .catch((response) => {
        console.error(response);
      });
  };

  let cookies = new Cookies();
  const userToken = cookies.get("usertoken");

  useEffect(() => {
    mypageUrl();
  }, []);

  const deleteUrl = () => {
    let cookies = new Cookies();
    const userToken = cookies.get("usertoken");
    const deleteApi = `http://localhost:8000/api/mypage/${id}/`;

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
      <hr style={{ opacity: "0.2", width: "100%" }} />

      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>회원정보</h4>
              <p className={classes.cardCategoryWhite}>
                당신의 회원정보를 수정할 수 있습니다
              </p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                {/* <GridItem xs={12} sm={12} md={5}>
                <CustomInput
                    labelText="Company (disabled)"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true
                    }}
                  />
                </GridItem> */}
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText={mypage.username}
                    id="username"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText={mypage.email}
                    id="email-address"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    // labelText={mypage.password}
                    labelText="password"
                    id="password"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary">수정 저장하기</Button>
              <div style={{ float: "right", marginTop: "20px" }}>
                <Button
                  color="white"
                  // onClick={deleteUrl}
                  >
                  회원 탈퇴
                </Button>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              {/* <h6 className={classes.cardCategory}>Taylor Swift</h6> */}
              <h4 className={classes.cardTitle}>Taylor Swift</h4>
              <p className={classes.description}>
                I stay out too late, got nothin' in my brain That's what people
                say, that's what people say,
                <br /> I go on too many dates, but I can't make 'em stay At
                least that's what people say,
                {/* that's what people say */}
                {/* 'Cause the players gonna play, play, play, play, play And the
                haters gonna hate, hate, hate, hate, hate Baby, I'm just gonna
                shake, shake, shake, shake, shake I shake it off, I shake it off */}
                <br />
                {/* Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is... */}
              </p>
              <Button color="primary" round>
                Follow
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
