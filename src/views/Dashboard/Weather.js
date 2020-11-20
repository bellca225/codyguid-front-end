import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../assets/css/WeatherIcons/css/WeatherIcons.css";
import "../../assets/css/WeatherIcons/css/WeatherIconsWind.css";
import uvRays from "../../miniIcon/자외선.svg";
import humidity from "../../miniIcon/습도.svg";
import clouds from "../../miniIcon/구름양.svg";
import windowStrong from "../../miniIcon/바람세기.svg";
import temfeel from "../../miniIcon/체감온도.svg";
import tem from "../../miniIcon/현재온도.svg";
import now from "../../miniIcon/현재날씨.svg";



const CurrentWeather = ({ data, error, loading, getWeatherData }) => {
  const nowCody = {
    backgroundColor: "#9E38B4",
    color: "#fff",
    fontWeight: "500",
    fontSize: "18px",
    padding: "8px 5px",
    borderRadius: "0 10px 0px 10px",
    width: "98%",
    boxShadow: "2px 2px 6px 2px rgba(0, 0, 0, .05)",
    textAlign: "center",
    marginTop: "45px",
  };

  const box = {
    width: "90%",
    padding: "5%",
  };

  const vertical = {
    borderRadius: "10px",
    backgroundColor: "#fff",
    width: "45%",
    height: "130px",
    margin: "5% 5% 0 0",
    boxShadow: "2px 2px 6px 2px rgba(0, 0, 0, .05)",
    paddingTop: "10px",
    textAlign: "center",

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

  };


  const vertical3 = {
    borderRadius: "10px",
    width: "50%",
    height: "130px",

    textAlign: "center",
  };

  const vertical33 = {
    borderRadius: "10px",
    width: "45%",
    height: "130px",
    textAlign: "center",
  };

  const vertical4 = {
    borderRadius: "10px",
    backgroundColor: "#fff",
    width: "95%",
    height: "130px",
    paddingTop: "10px",
    margin: "5% 0 5% 0",
    textAlign: "center",
    boxShadow: "2px 2px 6px 2px rgba(0, 0, 0, .05)",
    display: "flex",
  };

  const main3 = {
    fontSize: "2.5em",
    fontWeight: "500",
    color: "#00acc1",
    textAlign: "center",
  };


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

  const icons = `http://openweathermap.org/img/wn/${data.icon}@2x.png`;



  return (
    <div>
      <div style={box}>
        <h4 style={nowCody}>NOW WEATHER</h4>
        <div>
     
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
              <div style={main}>{data.feels_like}℃</div>
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

            <div style={vertical4}>
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

              <div style={vertical33}>
                <div>
              
                  <img
                    src={icons}
                    alt="날씨 아이콘"
                    style={{ width: "110px" }}
                  />
     
                </div>
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
