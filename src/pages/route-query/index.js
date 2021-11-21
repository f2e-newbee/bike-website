import React, { useEffect, useState, useCallback } from "react";
import { fetchApi } from "../../service/Service";
import { ReactComponent as RouteIcon } from "../../assets/img/route.svg";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { Paper, Stack } from "@material-ui/core";
import Toggle from "../../components/toggle";
import SearchBar from "../../components/searchBar/SearchBar";
import CustomTabs from "../../components/Tabs";
import SelectCity from "../../components/SelectCity";

export const RouteQuery = () => {
  /** 偵測螢幕寬度 */
  let screenWidth = Number(document.body.clientWidth);
  window.addEventListener("resize", function (event) {});

  const [routeData, setRouteData] = useState(null);
  const [keyWord, setKeyWord] = useState("");
  const [city, setCity] = useState("Taipei");
  const [list, setList] = useState([]);

  // 依照關鍵字搜尋的list
  const [filterList, setFilterList] = useState([]);

  const getCity = useCallback(() => {
    if (city) {
      fetchApi(`/v2/Cycling/Shape/${city}?format=JSON`).then((response) => {
        if (response && response.status === 200) {
          setRouteData(response.data);
        }
      });
      setKeyWord("");
    }
  }, [city]);
  useEffect(() => {
    getCity();
  }, [city, getCity]);

  useEffect(() => {
    if (routeData) {
      setList(routeData);
      setFilterList(routeData);
    }
  }, [routeData]);

  useEffect(() => {
    if (!keyWord || !keyWord.trim()) {
      setFilterList(list);
    }
  }, [keyWord, list]);

  function handleSearch() {
    if (keyWord && keyWord.trim() && city) {
      const filter = list.filter((item) => {
        return item.RouteName.includes(keyWord);
      });
      setFilterList(filter);
    }
  }

  return (
    <>
      <div className="z-10 relative px-4">
        <Logo className="absolute w-36 md:hidden block top-0" />
        <div className="w-full h-screen relative z-10">
          <section
            className="
        mx-auto w-full max-w-screen-xl md:min-h-notebook h-5/6	sm:bg-white sm:shadow-xl border-gray-200	sm:border
        top-2/4 left-2/4  absolute transform -translate-y-2/4 -translate-x-2/4 rounded-3xl md:pb-8 pb-0"
          >
            <div className="md:h-1/5 h-auto pt-10 relative lg:px-20 md:px-12 sm:px-10 px-6 sm:block hidden">
              <Logo className="absolute w-36 md:block hidden" />
              <Toggle />
            </div>
            <div
              className="md:h-4/5 sm:h-5/6 h-full w-full grid  md:grid-rows-9 md:grid-cols-2  grid-cols-1 gap-4 
              lg:px-20 md:px-12 sm:px-10 px-0 md:py-0 sm:py-6 py-4 pt-0"
            >
              <div className="bg-tertiary-dark	row-span-3 rounded-3xl md:text-base text-sm	lg:p-8 p-4 lg:py-4">
                <Stack
                  className="text-white md:text-lg text-base mb-2 font-bold"
                  direction="row"
                  spacing={1}
                  justifyContent="center"
                >
                  <RouteIcon className="w-6 h-6" />
                  <span>路線查詢</span>
                </Stack>
                <div className="flex mb-4">
                  {/* <button className="bg-purple-custom sm:px-6 px-2 sm:py-2 py-1 rounded-3xl text-white font-bold  sm:w-28 w-24">離我最近</button> */}
                  <div className="sm:w-32 w-28 flex">
                    <SelectCity city={city} setCity={setCity} />
                  </div>
                  {city ? null : (
                    <p className="text-red-500 ml-4">**請選擇縣市**</p>
                  )}
                </div>
                <SearchBar
                  setKeyWord={setKeyWord}
                  keyWord={keyWord}
                  handleSearch={handleSearch}
                />
              </div>
              <div className="bg-gray-100  row-span-9  rounded-3xl hidden md:block"></div>
              <div className="bg-red-50 row-span-6  rounded-3xl p-5 h-full overflow-y-scroll sm:grid hidden">
                <p>
                  共{" "}
                  <span className="font-bold text-primary">
                    {filterList.length}{" "}
                  </span>
                  筆資料
                </p>
                {filterList && filterList.length > 0
                  ? filterList.map((item, index) => {
                      return (
                        <RouteDataCard
                          data={item}
                          key={`${item.RouteName}${index}`}
                        />
                      );
                    })
                  : "查無資料QAQ"}
              </div>
              {screenWidth < 480 ? <CustomTabs data={filterList} /> : null}
            </div>
          </section>
        </div>
      </div>
      <div className="w-full h-screen opacity-50 top-0 left-0 bg-white absolute"></div>
    </>
  );
};

const RouteDataCard = ({ data }) => {
  return (
    <Paper className="w-full min-h-24 my-2 p-4" elevation={2}>
      <div className="flex justify-between	h-full">
        <div>
          <h3 className="font-bold text-gray-500">{data.RouteName}</h3>
          <p className="text-gray-400 text-sm">起點: {data.RoadSectionStart}</p>
          <p className="text-gray-400 text-sm	">終點: {data.RoadSectionEnd}</p>
          {data.CyclingLength > 1000 ? (
            <p className="text-primary text-sm	">
              全長: {Math.round(data.CyclingLength / 100, -1)} 公里
            </p>
          ) : (
            <p className="text-green text-sm	">
              全長: <span className="text-green-400">{data.CyclingLength}</span>
              公尺
            </p>
          )}
        </div>
      </div>
    </Paper>
  );
};
