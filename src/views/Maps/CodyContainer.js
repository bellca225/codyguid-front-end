import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Coordi from "./Coordi1";
import { getWeather } from "../../_reducers/weather_reducer";

const Cody = () => {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector(({ weather }) => ({
    data: weather.data,
    loading: weather.loading,
    error: weather.error,
  }));

  // const getCodyData = () => {
  //   dispatch(getWeather());
  // };

  return (
    <Coordi
      data={data}
      error={error}
      loading={loading}
      // getWeatherData={getCodyData}
    />
  );
};

export default Cody;
