import React, { useEffect, useState } from "react";
import { fetchApi } from "../../service/Service";
import { ReactComponent as BikeIcon } from "../../assets/img/bike.svg";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { Paper, Stack, Tabs, Tab } from "@material-ui/core";
import Toggle from "../../components/toggle";
import SearchBar from "../../components/searchBar/SearchBar";
import getGeoLocation from "../../service/GeolocationService";

/** TabPanel */
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
};

export const RentBikeQuery = () => {
  // 常數
  const DISTANCE = 500;
  /** Tab切換設定 */
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [location, setLocation] = useState(null);
  const [stationData, setStationData] = useState(null);
  const [availability, setAvailability] = useState(null);
  // 兩支api資料結合List
  const [list, setList] = useState([]);
  // 依照關鍵字搜尋的list
  const [filterList, setFilterList] = useState([]);
  const [keyWord, setKeyWord] = useState("");
  // 一進頁面先取得使用者地理位置
  useEffect(() => {
    getGeoLocation().then(
      (location) => {
        setLocation(location);
      },
      (error) => {
        alert(error);
      }
    );
  }, []);

  useEffect(() => {
    if (location) {
      fetchApi(
        `/v2/Bike/Station/NearBy?$top=10&$spatialFilter=nearby(${location.latitude}, ${location.longitude}, ${DISTANCE})&$format=JSON`
      ).then((response) => {
        if (response && response.status === 200) {
          setStationData(response.data);
        }
      });
      fetchApi(
        `/v2/Bike/Availability/NearBy?$top=10&$spatialFilter=nearby(${location.latitude}, ${location.longitude}, ${DISTANCE})&$format=JSON`
      ).then((response) => {
        if (response && response.status === 200) {
          setAvailability(response.data);
        }
      });
    }
  }, [location]);

  useEffect(() => {
    if (availability && stationData) {
      const combineList = stationData.map((item) => {
        const matchData = availability.find(
          (data) => data.StationUID === item.StationUID
        );
        return {
          ...item,
          ...matchData,
        };
      });
      setList(combineList);
      setFilterList(combineList);
    }
  }, [availability, stationData]);

  useEffect(() => {
    if (!keyWord || !keyWord.trim()) {
      setFilterList(list);
    }
  }, [keyWord, list]);

  function handleSearch() {
    if (keyWord && keyWord.trim()) {
      const filter = list.filter((item) => {
        return item.StationName.Zh_tw.includes(keyWord);
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
              <div className="bg-purple-custom	row-span-3 rounded-3xl md:text-base text-sm	lg:p-8 p-4 lg:py-4">
                <Stack
                  className="text-white md:text-lg text-base mb-2 font-bold"
                  direction="row"
                  spacing={1}
                  justifyContent="center"
                >
                  <BikeIcon className="w-6 h-6" />
                  <span>單車租借查詢</span>
                </Stack>
                <div className="flex mb-4">
                  <button className="bg-tertiary sm:px-6 px-2 sm:py-2 py-1 rounded-3xl text-white font-bold  sm:w-28 w-24">
                    離我最近
                  </button>
                  <button className="bg-gray-50 sm:px-6 px-2 sm:py-2 py-1 rounded-3xl text-gray-700 font-bold ml-4 sm:w-32 w-28">
                    下拉式選單
                  </button>
                </div>
                <SearchBar
                  setKeyWord={setKeyWord}
                  keyWord={keyWord}
                  handleSearch={handleSearch}
                />
              </div>
              <div className="bg-gray-100  row-span-9  rounded-3xl hidden md:block"></div>
              <div className="bg-yellow-custom row-span-6  rounded-3xl p-5 h-full overflow-y-scroll sm:grid hidden">
                {filterList && filterList.length > 0
                  ? filterList.map((item) => (
                      <RentBikeCard data={item} key={item.StationUID} />
                    ))
                  : "查無資料QAQ"}
              </div>

              <Tabs
                value={value}
                onChange={handleChange}
                centered
                className="w-full rounded-t-3xl -mb-4"
              >
                <Tab label="列表模式" />
                <Tab label="地圖模式" />
              </Tabs>
              <div className="relative bg-yellow-custom row-span-6 rounded-b-3xl overflow-y-scroll sm:hidden grid">
                <TabPanel value={value} index={0} className="p-5">
                  <Paper className="w-full h-24 my-2 p-4" elevation={2}>
                    <div className="flex justify-between	h-full">
                      <div>
                        <h3 className="font-bold text-gray-500">站點名稱</h3>
                        <p className="text-gray-400 text-sm	">全長:100km</p>
                      </div>
                      <div className="grid">
                        <button className="bg-primary bg-opacity-80 text-white rounded-2xl py-1 w-20 text-xs mb-1">
                          可借
                        </button>
                        <button className="bg-secondary bg-opacity-80 text-white rounded-2xl py-1 w-20 text-xs">
                          可停
                        </button>
                      </div>
                    </div>
                  </Paper>
                  <Paper className="w-full h-24 my-2 p-4" elevation={2}>
                    <div className="flex justify-between	h-full">
                      <div>
                        <h3 className="font-bold text-gray-500">站點名稱</h3>
                        <p className="text-gray-400 text-sm	">全長:100km</p>
                      </div>
                      <div className="grid">
                        <button className="bg-primary bg-opacity-80 text-white rounded-2xl py-1 w-20 text-xs mb-1">
                          可借
                        </button>
                        <button className="bg-secondary bg-opacity-80 text-white rounded-2xl py-1 w-20 text-xs">
                          可停
                        </button>
                      </div>
                    </div>
                  </Paper>
                  <Paper className="w-full h-24 my-2 p-4" elevation={2}>
                    <div className="flex justify-between	h-full">
                      <div>
                        <h3 className="font-bold text-gray-500">站點名稱</h3>
                        <p className="text-gray-400 text-sm	">全長:100km</p>
                      </div>
                      <div className="grid">
                        <button className="bg-primary bg-opacity-80 text-white rounded-2xl py-1 w-20 text-xs mb-1">
                          可借
                        </button>
                        <button className="bg-secondary bg-opacity-80 text-white rounded-2xl py-1 w-20 text-xs">
                          可停
                        </button>
                      </div>
                    </div>
                  </Paper>
                  <Paper className="w-full h-24 my-2 p-4" elevation={2}>
                    <div className="flex justify-between	h-full">
                      <div>
                        <h3 className="font-bold text-gray-500">站點名稱</h3>
                        <p className="text-gray-400 text-sm	">全長:100km</p>
                      </div>
                      <div className="grid">
                        <button className="bg-primary bg-opacity-80 text-white rounded-2xl py-1 w-20 text-xs mb-1">
                          可借
                        </button>
                        <button className="bg-secondary bg-opacity-80 text-white rounded-2xl py-1 w-20 text-xs">
                          可停
                        </button>
                      </div>
                    </div>
                  </Paper>
                  <Paper className="w-full h-24 my-2 p-4" elevation={2}>
                    <div className="flex justify-between	h-full">
                      <div>
                        <h3 className="font-bold text-gray-500">站點名稱</h3>
                        <p className="text-gray-400 text-sm	">全長:100km</p>
                      </div>
                      <div className="grid">
                        <button className="bg-primary bg-opacity-80 text-white rounded-2xl py-1 w-20 text-xs mb-1">
                          可借
                        </button>
                        <button className="bg-secondary bg-opacity-80 text-white rounded-2xl py-1 w-20 text-xs">
                          可停
                        </button>
                      </div>
                    </div>
                  </Paper>
                  <Paper className="w-full h-24 my-2 p-4" elevation={2}>
                    <div className="flex justify-between	h-full">
                      <div>
                        <h3 className="font-bold text-gray-500">站點名稱</h3>
                        <p className="text-gray-400 text-sm	">全長:100km</p>
                      </div>
                      <div className="grid">
                        <button className="bg-primary bg-opacity-80 text-white rounded-2xl py-1 w-20 text-xs mb-1">
                          可借
                        </button>
                        <button className="bg-secondary bg-opacity-80 text-white rounded-2xl py-1 w-20 text-xs">
                          可停
                        </button>
                      </div>
                    </div>
                  </Paper>
                </TabPanel>
                <TabPanel value={value} index={1} className="h-full -mt-4">
                  <div className="bg-gray-100 min-h-full h-96 rounded-3xl block"></div>
                </TabPanel>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="w-full h-screen opacity-50 top-0 left-0 bg-white absolute"></div>
    </>
  );
};

const RentBikeCard = ({ data }) => {
  return (
    <Paper className="w-full h-24 my-2 p-4" elevation={2}>
      <div className="flex justify-between	h-full">
        <div>
          <h3 className="font-bold text-gray-500">{data.StationName.Zh_tw}</h3>
          <p className="text-gray-400 text-sm	">全長:100km</p>
        </div>
        <div className="grid">
          <button className="bg-primary bg-opacity-80 text-white rounded-2xl py-1 w-20 text-xs mb-1">
            可借：{data.AvailableRentBikes}
          </button>
          <button className="bg-secondary bg-opacity-80 text-white rounded-2xl py-1 w-20 text-xs">
            可停：{data.AvailableReturnBikes}
          </button>
        </div>
      </div>
    </Paper>
  );
};
