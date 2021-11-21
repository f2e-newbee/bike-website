import React from "react";
import { ReactComponent as RouteIcon } from "../../assets/img/route.svg";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { ReactComponent as LeftArrow } from "../../assets/img/left-arrow.svg";

import { Stack } from "@material-ui/core";
import { Link } from "react-router-dom";
import Toggle from "../../components/toggle";



export const RouteDetail = () => {
  return (
    <>
    <div className="z-10 relative px-4">
    <Logo className="absolute w-36 md:hidden block top-0"/>
      <div className="w-full h-screen relative z-10">
        <section className="
        mx-auto w-full max-w-screen-xl md:min-h-notebook h-5/6	sm:bg-white sm:shadow-xl border-gray-200	sm:border
        top-2/4 left-2/4  absolute transform -translate-y-2/4 -translate-x-2/4 rounded-3xl md:pb-8 pb-0">
          <div className="md:h-1/5 h-auto pt-10 relative lg:px-20 md:px-12 sm:px-10 px-6 sm:block hidden">
            <Logo className="absolute w-36 md:block hidden"/>
            <Toggle />
          </div>
          <div className="md:h-4/5 sm:h-5/6 h-full w-full grid  md:grid-rows-9 md:grid-cols-2  grid-cols-1 gap-4 
              lg:px-20 md:px-12 sm:px-10 px-0 md:py-0 sm:py-6 py-4 pt-0">
            <div className="bg-tertiary-dark row-span-9 rounded-3xl md:text-base text-sm	lg:p-4 p-4 lg:py-4">
              <Link to="/route-query">
                <div className="w-6 h-auto cursor-pointer">
                  <LeftArrow />
                </div>
              </Link>
              <Stack className="text-white md:text-lg text-base mb-2 font-bold" direction="row" spacing={1} justifyContent="center">
                <RouteIcon className="w-6 h-6" />
                <span>路線資料</span>
              </Stack>
              <div>

              </div>
            </div>
            <div className="bg-gray-100  row-span-9  rounded-3xl hidden md:block">
            </div>
            {/* {
              screenWidth < 480 ?  <CustomTabs data={filterList}/> : null
            } */}
            </div>
          </section>
      </div>
    </div>
    <div className="w-full h-screen opacity-50 top-0 left-0 bg-white absolute"></div>
  </>
  );
};


