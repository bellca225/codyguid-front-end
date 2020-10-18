import { handleActions } from "redux-actions";
import {
  GET_WEATHER_PENDING,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILURE,
} from "../actions/types";
import axios from "axios";
import React, { useEffect, useState } from "react";

function getAPI() {
  let Lat = "37.4652876"; //추후 변경 예정
  let Lon = "126.900341";

  const api2 = {
    key: "d63c7d503cfb0a45ff09fe5274c4d2ea",
    base: "https://api.openweathermap.org/data/2.5/onecall",
  };
  return axios.get(
    `${api2.base}?lat=${Lat}&lon=${Lon}&lang=kr&appid=${api2.key}`
  );
}

export const getWeather = () => async (dispatch) => {
  dispatch({
    type: GET_WEATHER_PENDING,
  });

  try {
    const response = await getAPI();
    dispatch({
      type: GET_WEATHER_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: GET_WEATHER_FAILURE,
      payload: err,
    });
    throw err;
  }
};

const initialState = {
  pending: false,
  error: false,
  data: {
    temp: 18,
    feels_like: 15,
    humidity: 72,
    uvi: 5.21,
    clouds: 40,
    wind_speed: 1.94,
    weather: "Sunny",
    timezone: "Asia/Seoul",
    icon: "01d",
  },
};

export default handleActions(
  {
    [GET_WEATHER_PENDING]: (state, action) => {
      return {
        ...state,
        pendiong: true,
        error: false,
      };
    },
    [GET_WEATHER_SUCCESS]: (state, action) => {
      const temp = Math.round(action.payload.current.temp - 273.15);
      const feels_like = Math.round(action.payload.current.feels_like - 273.15);
      const humidity = action.payload.current.humidity;
      const uvi = action.payload.current.uvi;
      const clouds = action.payload.current.clouds;
      const wind_speed = action.payload.current.wind_speed;
      const weather = action.payload.current.weather[0].main;
      const timezone = action.payload.timezone;
      const icon = action.payload.current.weather[0].icon;

      return {
        ...state,
        pending: false,
        data: {
          temp: temp,
          feels_like: feels_like,
          humidity: humidity,
          uvi: uvi,
          clouds: clouds,
          wind_speed: wind_speed,
          weather: weather,
          timezone: timezone,
          icon: icon,
        },
      };
    },
    [GET_WEATHER_FAILURE]: (state, action) => {
      return {
        ...state,
        pending: false,
        error: true,
      };
    },
  },
  initialState
);
