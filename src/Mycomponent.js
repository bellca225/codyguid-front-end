import React, { useReducer } from "react";
import "./_reducers/latlon";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

import "@reach/combobox/styles.css";
// import mapStyles from "./mapStyles";

import "mycomponent.css";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "400px",
  margin: "0 auto",
};
const options = {
  // 0s: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
// const center = {
//   lat: 37.47979,
//   lng: 126.88394,
// };

export default function Mycomonent() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyC54MBKa78_EDw3PV0QHVU77Bo4VfOp1R4",
    libraries,
  });
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);

  const onMapClick = React.useCallback((e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(16);
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <Locate panTo={panTo} />
      <Search panTo={panTo} />

      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={16}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map((marker) => (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
          />
        ))}

        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <p>
                {selected.lat} {selected.lng}
              </p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}

// function reducer(state, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// }
// const [number, dispatch] = useReducer(reducer, 0);
// dispatch({ type: "INCREMENT" });

const center = {
  lat: 37.47979,
  lng: 126.88394,
};

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
//

function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => -3.745, lng: () => -38.523 },
      radius: 100 * 1000,
    },
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      console.log(lat, lng); // 검색 위도, 경도
      panTo({ lat, lng });
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div>
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          className="search search-bar"
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search your location"
        />

        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }, index) => (
                <ComboboxOption key={index} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}

function Locate({ panTo }) {
  return (
    <button
      className="locate"
      style={{ backgroundColor: "#fff", border: "none" }}
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            console.log(pos.coords.latitude, pos.coords.longitude);

            panTo({
              lat: pos.coords.latitude,
              lng: pos.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      현재 위치로 이동하기
    </button>
  );
}
