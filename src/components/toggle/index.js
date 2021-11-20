import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as BikeIcon } from "../../assets/img/bike.svg";
import { ReactComponent as RouteIcon } from "../../assets/img/route.svg";
import { Stack } from "@material-ui/core";

const Toggle = () => {
  return (
    <div className="bg-white border-2 border-primary rounded-3xl w-96 mx-auto">
      <div className="grid grid-cols-2">
        <NavLink
          to="/rent-bike-query"
          className={({ isActive }) =>
            isActive ? "text-white bg-primary rounded-l-3xl " : "text-primary"
          }
        >
          <Stack className="py-2" direction="row" spacing={1} justifyContent="center">
            <BikeIcon className="w-6 h-6" />
            <span>單車租借查詢</span>
          </Stack>
        </NavLink>
        <NavLink
          to="/route-query"
          className={({ isActive }) =>
            isActive ? "text-white bg-primary  rounded-r-3xl" : "text-primary"
          }
        >
          <Stack className="py-2" direction="row" spacing={1} justifyContent="center">
            <RouteIcon className="w-6 h-6 " />
            <span>路線查詢</span>
          </Stack>
        </NavLink>
      </div>
    </div>
  );
};

export default Toggle;
