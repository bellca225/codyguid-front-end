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
<<<<<<< HEAD

import avatar from "assets/img/faces/camila.png";
=======
import axios from "axios";
import avatar from "assets/img/faces/marc.jpg";
import { Cookies } from "react-cookie";
>>>>>>> db339869a55a33565c771b7f0cff6859bda830ad

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

export default function UserProfile() {
  const classes = useStyles();

  const [mypage, setMypage] = useState({})

  const userApiCall = () => {
    // 로그인 유저 정보 불러오기
    let cookies = new Cookies();
    const userToken = cookies.get("usertoken");
    const apiUrl = `http://127.0.0.1:8000/api/myinfo/`;
    axios
      .get(apiUrl, { headers: { Authorization: `Token ${userToken}` } })
      .then((response) => {
        setMypage(response.data[0]);
        console.log("로그인 유저", response.data);
      })
      .catch((response) => {
        console.error(response);
      });
  };

  useEffect(() => {
    userApiCall();
  }, []);

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>마이 프로필</h4>
              <p className={classes.cardCategoryWhite}>
                당신의 프로필을 꾸며보세요
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
                    labelText="nickname"
                    id="username"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Email"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
<<<<<<< HEAD
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="First Name"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Last Name"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Country"
                    id="country"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Postal Code"
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <div style={{ height: "50px" }}></div>
              <GridContainer>
=======
>>>>>>> db339869a55a33565c771b7f0cff6859bda830ad
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
<<<<<<< HEAD
                    labelText="당신에 대한 소개를 남겨주세요."
                    id="about-me"
=======
                    labelText="password"
                    id="password"
>>>>>>> db339869a55a33565c771b7f0cff6859bda830ad
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary">프로필 저장하기gallerydetail</Button>
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
