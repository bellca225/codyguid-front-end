import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../assets/css/WeatherIcons/css/WeatherIcons.css";
import "../../assets/css/WeatherIcons/css/WeatherIconsWind.css";
import "./currentweather.css";
import uvRays from "../../miniIcon/자외선.svg";
import humidity from "../../miniIcon/습도.svg";
import clouds from "../../miniIcon/구름양.svg";
import windowStrong from "../../miniIcon/바람세기.svg";
import temfeel from "../../miniIcon/체감온도.svg";
import tem from "../../miniIcon/현재온도.svg";
import now from "../../miniIcon/현재날씨.svg";

// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

const CurrentWeather = ({ data, error, loading, getWeatherData }) => {
  const nowCody = {
    backgroundColor: "#9E38B4",
    // backgroundColor: "linearGradient(60deg, #ab47bc, #8e24aa)",
    color: "#fff",
    fontWeight: "500",
    fontSize: "18px",
    padding: "8px 5px",
    borderRadius: "0 10px 0px 10px",
    width: "98%",
    boxShadow: "2px 2px 6px 2px rgba(0, 0, 0, .05)",
    textAlign: "center",
  };

  const box = {
    width: "90%",

    padding: "30px",
  };

  const titlefont = { color: "#888", fontSize: "1em", fontWeight: "300" };

  const vertical = {
    borderRadius: "10px",
    backgroundColor: "#fff",
    width: "45%",
    height: "130px",
    margin: "5% 5% 0 0",
    boxShadow: "2px 2px 6px 2px rgba(0, 0, 0, .05)",
    paddingTop: "10px",
    textAlign: "center",
    // padding: "40px 40px 0px 40px",
  };

  const vertical2 = {
    borderRadius: "10px",
    backgroundColor: "#00acc1",
    width: "45%",
    height: "130px",
    textAlign: "center",
    margin: "5% 0% 0 0",
    textAlign: "center",
    boxShadow: "2px 2px 6px 2px rgba(0, 0, 0, .05)",

    paddingTop: "10px",
    // padding: "40px 40px 0px 40px",
  };
  const vertical22 = {
    borderRadius: "10px",
    backgroundColor: "#00acc1",
    width: "45%",
    height: "120px",
    textAlign: "center",
    margin: "5% 0% 0 0",
    textAlign: "center",
    boxShadow: "2px 2px 6px 2px rgba(0, 0, 0, .05)",
    paddingTop: "25px",
    // padding: "40px 40px 0px 40px",
  };

  const vertical3 = {
    borderRadius: "10px",
    backgroundColor: "#fff",
    width: "45%",
    height: "130px",
    paddingTop: "10px",
    margin: "5% 5% 0 0",
    textAlign: "center",
    boxShadow: "2px 2px 6px 2px rgba(0, 0, 0, .05)",
  };

  const main3 = {
    fontSize: "2.5em",
    fontWeight: "500",
    color: "#00acc1",
    textAlign: "center",
    // alignCotent: "center",
  };

  const Countrytext = { fontSize: "1.5em", color: "#333" };
  const maintext = {
    marginTop: "10px",
    color: "#888",
    textAlign: "center",
    fontSize: "0.8em",
    fontWeight: "500",
  };
  const main = {
    fontSize: "2.5em",
    fontWeight: "500",
    color: "#00acc1",
    textAlign: "center",
  };

  const color = { color: "#00acc1" };

  const frameOne = {
    borderRadius: "10px",
    backgroundColor: "#fff",
    width: "45%",
    height: "130px",
    margin: "5% 0% 0 0",
    boxShadow: "2px 2px 6px 2px rgba(0, 0, 0, .05)",
    paddingTop: "10px",
    textAlign: "center",
  };

  const frameRight = {
    borderRadius: "10px",
    backgroundColor: "#fff",
    width: "45%",

    margin: "5% 0% 0 0",
    boxShadow: "2px 2px 6px 2px rgba(0, 0, 0, .05)",
    height: "130px",
    paddingTop: "10px",
    textAlign: "center",
  };

  const frameTop = {
    borderRadius: "10px",
    backgroundColor: "#fff",
    width: "45%",
    textAlign: "center",
    margin: "0% 5% 0 0",
    boxShadow: "2px 2px 6px 2px rgba(0, 0, 0, .05)",
    height: "130px",
    paddingTop: "10px",
    textAlign: "center",
  };

  const frameTopRight = {
    borderRadius: "10px",
    backgroundColor: "#fff",
    width: "45%",
    height: "130px",
    paddingTop: "10px",
    textAlign: "center",
    margin: "0% 0% 0 0",
    boxShadow: "2px 2px 6px 2px rgba(0, 0, 0, .05)",
    textAlign: "center",
  };

  // console.log(data.current.weather[0].main);

  return (
    <div>
      <button onClick={getWeatherData}>날씨 불러오기</button>
      <div style={box}>
        <h4 style={nowCody}>NOW WEATHER</h4>
        <div>
          {/* <h3 style={titlefont}> 현재 날씨</h3> */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexFlow: "row wrap",
              justifyContent: "center",
            }}
          >
            <div style={frameTop}>
              <img
                style={{ width: "20%" }}
                src={tem}
                alt="현재 온도"
                title="현재 온도"
              />
              <div style={main}>{data.temp}℃</div>
              <div style={maintext}>현재 온도</div>
            </div>
            <div style={frameTopRight}>
              <img
                style={{ width: "18%" }}
                src={temfeel}
                alt="체감 온도"
                title="체감 온도"
              />
              <div style={main}>
                {data.feels_like}℃
              </div>
              <div style={maintext}>체감온도 </div>
            </div>
            <div style={vertical}>
              <img
                style={{ width: "20%" }}
                src={humidity}
                alt="습도"
                title="습도"
              />
              <div style={main}>{data.humidity}% </div>
              <div style={maintext}>습도</div>
            </div>
            <div style={frameRight}>
              <img
                style={{ width: "20%" }}
                src={uvRays}
                alt="자외선"
                title="자외선"
              />
              <div style={main}>{data.uvi}</div>
              <div style={maintext}>자외선</div>
            </div>
            <div style={vertical}>
              <img
                style={{ width: "20%" }}
                src={clouds}
                alt="구름양"
                title="구름양"
              />
              <div style={main}>{data.clouds}</div>
              <div style={maintext}> 구름양</div>
            </div>
            <div style={frameRight}>
              <img
                style={{ width: "20%" }}
                src={windowStrong}
                alt="바람 속도"
                title="바람 속도"
              />
              <div style={main}>{data.wind_speed}</div>
              <div style={maintext}>바람 속도</div>
            </div>

            <div style={vertical3}>
              <img
                style={{ width: "20%" }}
                src={now}
                alt="현재 날씨"
                title="현재 날씨"
              />
              <div style={main3}>{data.weather} </div>
              <div style={maintext}>현재 날씨</div>
            </div>

            <div style={vertical22}>
              <div>
                <i
                  className="wi wi-cloud"
                  color="info"
                  style={{
                    fontSize: "90px",
                    color: "#fff",

                    // backgroundColor: "#00acc1",
                  }}
                ></i>
                {/* <div style={maintext}>
                  {data.current.weather[0].description}
                </div> */}
              </div>
            </div>
          </div>

          {/* <h3 style={titlefont}>위치 정보</h3>
          위도 : {data.lat} <br />
          경도 : {data.lon} <br />
          <span style={Countrytext}>{data.timezone} </span> */}
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
