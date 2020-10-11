// import { handleActions } from "redux-actions";
// import axios from "axios";
// import {
//   LATLON_SERACH,
//   LATLON_SERACH_SUCCESS,
//   LATLON_SERACH_FAILURE,
// } from "../actions/types";

// import {
//   GoogleMap,
//   useLoadScript,
//   Marker,
//   InfoWindow,
// } from "@react-google-maps/api";

// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";

// function GetAPI() {
//   const libraries = ["places"];

//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: "AIzaSyC54MBKa78_EDw3PV0QHVU77Bo4VfOp1R4",
//     libraries,
//   });
// }

// export const getSearch = () => async (dispatch) => {
//   dispatch({
//     type: LATLON_SERACH,
//   });

//   try {
//     const response = await GetAPI();
//     // const results = await getGeocode({ address });
//     // const { lat, lng } = await getLatLng(results[0]);
//     // console.log(lat, lng);
//     dispatch({
//       type: LATLON_SERACH_SUCCESS,
//       payload: response.data,
//     });
//   } catch (err) {
//     dispatch({
//       type: LATLON_SERACH_FAILURE,
//       payload: err,
//     });
//     throw err;
//   }
// };

// const initialState = {
//   pending: false,
//   error: false,
//   data: {
//     lat: 0,
//     lng: 0,
//   },
// };

// export default handleActions({
//   [LATLON_SERACH]: (state, action) => {
//     return {
//       ...state,
//       pending: true,
//       error: false,
//     };
//   },
//   [LATLON_SERACH_SUCCESS]: (state, action) => {
//     const results = getGeocode({ address });
//     const { lat, lng } = getLatLng(results[0]);
//   },
// });
