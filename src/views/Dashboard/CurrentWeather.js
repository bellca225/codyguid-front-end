import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../assets/css/WeatherIcons/css/WeatherIcons.css";
import "../../assets/css/WeatherIcons/css/WeatherIconsWind.css";
import "./currentweather.css";

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

const api2 = {
  key: "d63c7d503cfb0a45ff09fe5274c4d2ea",
  base: "https://api.openweathermap.org/data/2.5/onecall",
};

const CurrentWeather = () => {
  const [data, setData] = useState(null); // 결과물 관리
  const [loading, setLoading] = useState(false); //로딩중 관리, 현재 api가 요청중인지 아닌지 알려주는 값
  const [error, setError] = useState(null); //에러 관리, 에러가 발행하면 이 상태에 에러가 담김

  let Lat = "37.4652876"; //추후 변경 예정
  let Lon = "126.900341";

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        setData(null);
        setError(null);
        setLoading(true);
        const res = await axios.get(
          `${api2.base}?lat=${Lat}&lon=${Lon}&appid=${api2.key}`
        );
        setData(res.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchDatas();
  }, []); //컴포넌트가 처음 렌더링 될 때 어떤 작업을 하겠다, 일단 비어있는 배열을 집어넣음

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return <div>data가 아닙니다</div>;

  const nowCody = {
    backgroundColor: "#9E38B4",
    // backgroundColor: "linearGradient(60deg, #ab47bc, #8e24aa)",
    color: "#fff",
    fontWeight: "500",
    fontSize: "18px",
    padding: "5px",
    borderRadius: "0 10px 0px 10px",
    width: "98%",
    boxShadow: "2px 2px 6px 2px rgba(0, 0, 0, .05)",
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
    height: "110px",
    margin: "5% 5% 0 0",
    boxShadow: "2px 2px 6px 2px rgba(0, 0, 0, .05)",
    // padding: "40px 40px 0px 40px",
  };

  const vertical2 = {
    borderRadius: "10px",
    backgroundColor: "#00acc1",
    width: "45%",
    height: "80px",
    margin: "5% 5% 0 0",
    boxShadow: "2px 2px 6px 2px rgba(0, 0, 0, .05)",
    // padding: "40px 40px 0px 40px",
  };

  const Countrytext = { fontSize: "1.5em", color: "#333" };
  const maintext = { marginTop: "15px", color: "#888" };
  const main = { fontSize: "2.5em", fontWeight: "500", color: "#00acc1" };
  const color = { color: "#00acc1" };

  console.log(data.current.weather[0].main);

  return (
    <div>
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
            <div style={vertical} className="ver1">
              <div style={main}>{Math.round(data.current.temp - 273.15)}℃</div>
              <div style={maintext}>현재 온도</div>
            </div>
            <div style={vertical} className="ver1">
              <div style={main}>
                {Math.round(data.current.feels_like - 273.15)}℃
              </div>
              <div style={maintext}>체감온도 </div>
            </div>
            <div style={vertical} className="ver">
              <div style={main}>{data.current.humidity}% </div>
              <div style={maintext}>습도</div>
            </div>
            <div style={vertical} className="ver">
              <div style={main}>{data.current.uvi}</div>
              <div style={maintext}>자외선</div>
            </div>
            <div style={vertical} className="ver">
              <div style={main}>{data.current.clouds}</div>
              <div style={maintext}> 구름양</div>
            </div>
            <div style={vertical} className="ver">
              <div style={main}>{data.current.wind_speed}</div>
              <div style={maintext}>바람 속도</div>
            </div>

            <div style={vertical} className="ver">
              <div style={main}>{data.current.weather[0].main} </div>
              <div style={maintext}>날씨</div>
            </div>

            <div style={vertical2} className="ver">
              <i
                className="wi wi-cloud"
                color="info"
                style={{
                  fontSize: "60px",
                  color: "#fff",
                  // backgroundColor: "#00acc1",
                }}
              ></i>
              <div style={maintext}>{data.current.weather[0].description}</div>
            </div>
          </div>

          <h3 style={titlefont}>위치 정보</h3>
          {/* 위도 : {data.lat} <br />
        경도 : {data.lon} <br /> */}
          <span style={Countrytext}>{data.timezone} </span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
