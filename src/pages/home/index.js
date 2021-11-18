import React from "react";
import { ReactComponent as BikeIcon } from "../../assets/img/bike.svg";
import { ReactComponent as RouteIcon } from "../../assets/img/route.svg";
import { Stack } from "@material-ui/core";
import Block from "./block";

/**
 * 首頁
 */
export const Home = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="backdrop-filter backdrop-blur-2xl rounded-3xl shadow-md text-center min-w-90 md:min-w-3/4 pt-16 pb-32">
        <h1 className="text-text-dark font-bold mb-2 text-6xl">URideMap</h1>
        <h6 className="text-sm text-text-light  font-semibold  tracking-widest	mb-10">
          所有你需要的單車資訊
        </h6>
        <Stack direction="row" spacing={6} justifyContent="center">
          <Block
            label="路線查詢"
            icon={<RouteIcon />}
            link="/rent-bike-query"
          />
          <Block label="單車租借查詢" icon={<BikeIcon />} link="/route-query" />
        </Stack>
      </div>
    </div>
  );
};

export default Home;
