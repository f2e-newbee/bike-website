import React, { useRef, useState } from "react";
import GoogleMapReact from "google-map-react";
import { API_KEY } from "../../BikeKey";
import useSupercluster from "use-supercluster";
import { ReactComponent as BikeIcon } from "../../assets/img/bike.svg";

const Map = ({ center, list }) => {
  const mapRef = useRef();
  // get map bounds
  const [bounds, setBounds] = useState(null);
  const [zoom, setZoom] = useState(10);

  const points = list.map((item) => ({
    type: "Feature",
    properties: {
      cluster: false,
      id: item.StationUID,
      name: item.StationName.Zh_tw,
      address: item.StationAddress.Zh_tw,
      showDetail: false,
    },
    geometry: {
      type: "Point",
      coordinates: [
        item.StationPosition.PositionLon,
        item.StationPosition.PositionLat,
      ],
    },
  }));
  const Marker = ({ children }) => children;

  let { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 },
  });

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={{ lat: center.latitude, lng: center.longitude }}
        defaultZoom={15}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map;
        }}
        onChange={({ zoom, bounds }) => {
          setZoom(zoom);
          setBounds([
            bounds.nw.lng,
            bounds.se.lat,
            bounds.se.lng,
            bounds.nw.lat,
          ]);
        }}
      >
        {/* markers here */}
        {clusters.map((cluster) => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const { cluster: isCluster, point_count: pointCount } =
            cluster.properties;

          if (isCluster) {
            return (
              <Marker
                key={`cluster-${cluster.id}`}
                lat={latitude}
                lng={longitude}
              >
                <div
                  className="text-white rounded-full bg-blue-600 flex items-center justify-center p-3"
                  style={{
                    width: `${10 + (pointCount / points.length) * 20}px`,
                    height: `${10 + (pointCount / points.length) * 20}px`,
                  }}
                  onClick={() => {
                    const expansionZoom = Math.min(
                      supercluster.getClusterExpansionZoom(cluster.id),
                      20
                    );
                    mapRef.current.setZoom(expansionZoom);
                    mapRef.current.panTo({ lat: latitude, lng: longitude });
                  }}
                >
                  {pointCount}
                </div>
              </Marker>
            );
          }

          return (
            <Marker key={cluster.properties.id} lat={latitude} lng={longitude}>
              <div>{cluster.properties.showDetail}</div>
              <button
                className="bg-text-dark rounded-full p-1.5 opacity-80 w-8 h-8"
                onClick={() =>
                  alert(cluster.properties.name, cluster.properties.address)
                }
              >
                <BikeIcon className="w-full h-full text-white" />
              </button>
            </Marker>
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
