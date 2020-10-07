import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../assets/css/WeatherIcons/css/WeatherIcons.css";
import "../../assets/css/WeatherIcons/css/WeatherIconsWind.css";

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
  const box = {
    width: "100%",
    float: "left",
    padding: "25px",
    flexDirection: "row",
  };
  const titlefont = { color: "#888", fontSize: "1em", fontWeight: "300" };
  const vertical = {
    flexDirection: "column",
    textAlign: "center",
    width: "180px",
    border: "1px solid black",
    padding: "20px",
  };
  const Countrytext = { fontSize: "1.5em", color: "#333" };
  const maintext = { marginTop: "15px", color: "#888" };
  const main = { fontSize: "2.5em", fontWeight: "500", color: "#00acc1" };
  const color = { color: "#00acc1" };

  console.log(data.current.weather[0].main);

  return (
    <div>
      <div style={box}>
        <div>
          <h3 style={titlefont}> 현재날씨</h3>
          <div style={vertical}>
            <div style={main}>{Math.round(data.current.temp - 273.15)}℃</div>
            <div style={maintext}>현재 온도</div>
          </div>
          <div style={vertical}>
            <div style={main}>
              {Math.round(data.current.feels_like - 273.15)}℃
            </div>
            <div style={maintext}>체감온도 </div>
          </div>
          <div style={vertical}>
            <div style={main}>{data.current.humidity}% </div>
            <div style={maintext}>습도</div>
          </div>
          <div style={vertical}>
            <div style={main}>{data.current.uvi}</div>
            <div style={maintext}>자외선</div>
          </div>
          <div style={vertical}>
            <div style={main}>{data.current.clouds}</div>
            <div style={maintext}> 구름양</div>
          </div>
          <div style={vertical}>
            <div style={main}>{data.current.wind_speed}</div>
            <div style={maintext}>바람 속도</div>
          </div>

          <div style={vertical}>
            <div style={main}>{data.current.weather[0].main} </div>
            <div style={maintext}>날씨</div>
          </div>

          <div style={vertical}>
            <i
              className="wi wi-cloud"
              style={{
                fontSize: "60px",
                margin: "",
                color: "rgba(255, 255, 255, .9)",
                backgroundColor: "#00acc1",
                padding: "15px",
                borderRadius: "5px",
                boxShadow: "5px 5px 5px  rgba(0, 0, 255, .2)",
              }}
            ></i>
            <div style={maintext}>{data.current.weather[0].description}</div>
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
