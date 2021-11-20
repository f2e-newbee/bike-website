import React, { useEffect, useState } from "react";
import { fetchApi } from "../../service/Service";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { Paper } from "@material-ui/core";
import Toggle from "../../components/toggle";
import SearchBar from "../../components/searchBar/SearchBar";

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
    <div className="z-10 relative">
      <div className="w-full h-screen opacity-50 bg-white absolute"></div>
      <div className="w-full h-screen relative z-10">
        <section className="
        mx-auto w-full max-w-screen-xl min-h-4/5	h-4/5	bg-white pb-4 shadow-xl border-gray-200	border 
        top-2/4 left-2/4  absolute transform -translate-y-2/4 -translate-x-2/4 rounded-3xl">
         <div className="h-1/5 pt-10 px-20 relative">
          <Logo className="absolute w-36"/>
          <Toggle />
          </div>
          <div className="h-4/5 w-full grid  grid-rows-9 grid-cols-2 gap-4 px-20 pb-10">
            <div className="bg-purple-custom	row-span-3 rounded-3xl p-8">
              <div className="flex mb-4">
                <button className="bg-tertiary px-6 py-2 rounded-3xl text-white font-bold  w-28">離我最近</button>
                <button className="bg-gray-50 px-6 py-2 rounded-3xl text-gray-700 font-bold ml-4 w-32">下拉式選單</button>
              </div>
              <SearchBar />
            </div>
            <div className="bg-gray-100  row-span-9  rounded-3xl">
            </div>
            <div className="bg-red-50 row-span-6  rounded-3xl p-5 overflow-y-scroll">
              <Paper className="w-full h-24 my-2 p-4" elevation={2} >
                <h3 className="font-bold text-gray-500">路線名稱</h3>
                <p className="text-gray-400 text-sm	">全長:100km</p>
              </Paper>
              <Paper className="w-full h-24 my-2 p-4" elevation={2} >
                <h3 className="font-bold text-gray-500">路線名稱</h3>
                <p className="text-gray-400 text-sm	">全長:100km</p>
              </Paper>
              <Paper className="w-full h-24 my-2 p-4" elevation={2} >
                <h3 className="font-bold text-gray-500">路線名稱</h3>
                <p className="text-gray-400 text-sm	">全長:100km</p>
              </Paper>
              <Paper className="w-full h-24 my-2 p-4" elevation={2} >
                <h3 className="font-bold text-gray-500">路線名稱</h3>
                <p className="text-gray-400 text-sm	">全長:100km</p>
              </Paper>
            </div>
          </div>
          </section>
      </div>
    </div>
  );
};
