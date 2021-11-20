import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as BikeIcon } from "../../assets/img/bike.svg";
import { ReactComponent as RouteIcon } from "../../assets/img/route.svg";
import { Stack } from "@material-ui/core";

const MobileBottomNav = () => {
  return (
    <div className="bg-white absolute bottom-0 left-0 right-0 block sm:hidden rounded-t-2xl shadow-md">
      <div className="grid grid-cols-2">
        <NavLink
          to="/route-query"
          className={({ isActive }) =>
            isActive
              ? "border-b-4 border-primary "
              : "border-b-4 border-transparent"
          }
        >
          <Stack
            alignItems="center"
            justifyContent="center"
            className="text-primary h-full py-2"
          >
            <RouteIcon className="w-6 h-6" />
            <span className="font-semibold">路線查詢</span>
          </Stack>
        </NavLink>
        <NavLink
          to="/rent-bike-query"
          className={({ isActive }) =>
            isActive ? "border-b-4 border-primary " : "border-b-4 border-transparent"
          }
        >
          <Stack
            alignItems="center"
            justifyContent="center"
            className="text-primary h-full py-2"
          >
            <BikeIcon className="w-6 h-6" />
            <span className="font-semibold">單車租借查詢</span>
          </Stack>
        </NavLink>
      </div>
    </div>
  );
};

export default MobileBottomNav;
