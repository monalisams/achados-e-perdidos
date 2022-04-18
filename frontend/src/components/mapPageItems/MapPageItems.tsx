import React, { useEffect } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import "./MapPage.css";
import { REACT_APP_GOOGLE_API_KEY } from "../../App";

const MapPageItems = (props: any) => {
  const { locations } = props;

  const [map, setMap] = React.useState<google.maps.Map>();

  useEffect(() => {
    if (map) {
      const bounds = new google.maps.LatLngBounds();
      locations.forEach((l: any) => {
        bounds.extend(
          new google.maps.LatLng(Number(l.latitude), Number(l.longitude))
        );
      });
      map?.fitBounds(bounds);
    }
  }, [locations, map]);

  const onMapLoad = (map: google.maps.Map) => {
    setMap(map);
  };

  return (
    <div className="map">
      <LoadScript googleMapsApiKey={REACT_APP_GOOGLE_API_KEY}>
        <GoogleMap
          center={{
            lat: Number(locations[0]?.latitude),
            lng: Number(locations[0]?.longitude),
          }}
          mapContainerStyle={{ width: "100%", height: "300px" }}
          zoom={15}
          onLoad={onMapLoad}
        >
          {locations.map((location: any) => (
            <Marker
              key={"marker" + location.id}
              position={{
                lat: Number(location.latitude),
                lng: Number(location.longitude),
              }}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default React.memo(MapPageItems);
