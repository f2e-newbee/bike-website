import React, { useEffect, useState } from "react";
import { fetchApi } from "../../service/Service";
import Toggle from "../../components/toggle";
export const RouteQuery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchApi("v2/Bike/Station/Taichung", {
      $top: 30,
      $format: "JSON",
    }).then((response) => {
      console.log(response);
      setData(response.data);
    });
  }, []);

  return (
    <div>
      <Toggle />
      路線查詢
      {data &&
        data.map((item) => {
          return (
            <div key={item.StationID}>
              <div>{item.StationName.Zh_tw}</div>
              <div>{item.StationAddress.Zh_tw}</div>
            </div>
          );
        })}
    </div>
  );
};
