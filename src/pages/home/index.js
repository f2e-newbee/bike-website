import React from "react";
import { ReactComponent as BikeIcon } from "../../assets/img/bike.svg";
import { ReactComponent as RouteIcon } from "../../assets/img/route.svg";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { Stack } from "@material-ui/core";
import Block from "./block";

/**
 * 首頁
 */
export const Home = () => {
  return (
    <main className="h-full flex items-center justify-center max-w-800 mx-auto">
      <div className="main-block w-full mx-4 lg:mx-0 relative rounded-3xl shadow-md text-center py-32">
        <Logo className="text-center mx-auto"/>
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
    </main>
  );
};
