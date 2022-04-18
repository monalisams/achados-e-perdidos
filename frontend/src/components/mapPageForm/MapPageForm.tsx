import React, { useEffect } from "react";
import {
  GoogleMap,
  Marker,
  LoadScript,
  StandaloneSearchBox,
} from "@react-google-maps/api";
import "./MapPageForm.css";
import { REACT_APP_GOOGLE_API_KEY } from "../../App";

const MapPage = (props: any) => {
  const { onLocationChange, latitude, longitude } = props;

  const [map, setMap] = React.useState<google.maps.Map>();
  const [location, setLocation] = React.useState({ lat: 0, lng: 0 });
  const [searchBox, setSearchBox] =
    React.useState<google.maps.places.SearchBox>();

  useEffect(() => {
    setLocation({ lat: Number(latitude), lng: Number(longitude) });
  }, [latitude, longitude]);

  useEffect(() => {
    map?.panTo(location);
  }, [location]);

  const onMapLoad = (map: google.maps.Map) => {
    setMap(map);
  };

  const onLoad = (ref: google.maps.places.SearchBox) => {
    setSearchBox(ref);
  };

  const onPlacesChanged = () => {
    const places = searchBox!.getPlaces();
    const place = places![0];

    const location = {
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0,
    };

    setLocation(location);
    onLocationChange(location);
  };

  return (
    <div className="map-form">
      <LoadScript
        googleMapsApiKey={REACT_APP_GOOGLE_API_KEY}
        libraries={["places"]}
      >
        <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged}>
          <input
            className="addressField"
            placeholder="Digite o endereço onde o item foi encontrado"
          />
        </StandaloneSearchBox>
        <GoogleMap
          center={location}
          mapContainerStyle={{ width: "100%", height: "300px" }}
          zoom={15}
          onLoad={onMapLoad}
        >
          <Marker position={location} options={{}} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default React.memo(MapPage);
