import React from "react";
// react plugin for creating charts

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import AccessTime from "@material-ui/icons/AccessTime";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";


import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
// import CurrentWeather from "./CurrentWeather";
import CurrentWeather from "./WeatherContainer";
import Mycomonent from "Mycomponent";
import Coordi from "views/Maps/CodyContainer";

let today = new Date();

let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1; // 월
let date = today.getDate(); // 날짜
let day = today.getDay(); // 요일

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div>


      <Mycomonent />

      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CurrentWeather />

            <CardBody style={{ padding: "0 20px" }}>
              <h4
                className={classes.cardTitle}
                style={{ display: "inline" }}
              ></h4>
              <p className={classes.cardCategory} style={{ display: "inline" }}>
                <span className={classes.successText}>
                  {/* <ArrowUpward className={classes.upArrowCardCategory} /> */}
                </span>
              </p>
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <Coordi />
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> 현재 위치 및 시각 기준 :
                <span style={{ color: "#00acc1" }}>
                  {year}.{month}.{date}
                </span>
              </div>
            </CardFooter>
          </Card>
        </GridItem>

      </GridContainer>
      <GridContainer>
      
        <GridItem xs={12} sm={12} md={12}></GridItem>
      </GridContainer>
      <GridContainer>
       
      </GridContainer>
    </div>
  );
}
