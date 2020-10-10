// import React, { useRef, useCallback } from "react";
// import "./_reducers/latlon";

// const mapRef = React.useRef();
// const onMapLoad = React.useCallback((map) => {
//   mapRef.current = map;
// }, []);

// const panTo = React.useCallback(({ lat, lng }) => {
//   mapRef.current.panTo({ lat, lng });
//   mapRef.current.setZoom(16);
// }, []);

// function Locate({ panTo }) {
//   return (
//     <button
//       className="locate"
//       onClick={() => {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             console.log(position.coords.latitude, position.coords.longitude);

//             panTo({
//               lat: position.coords.latitude,
//               lng: position.coords.longitude,
//             });
//           },
//           () => null
//         );
//       }}
//     >
//       <img src="/compass.svg" alt="현재위치" />
//     </button>
//   );
// }
