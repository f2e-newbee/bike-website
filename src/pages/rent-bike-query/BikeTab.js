import React, { useState } from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

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

const BikeTab = ({ data }) => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dataNum = data?.length ? data.length : 0;

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        className="w-full rounded-t-3xl -mb-4"
      >
        <Tab label="列表模式" />
        <Tab label="地圖模式" />
      </Tabs>
      <div className="relative bg-red-50 row-span-6 rounded-b-3xl overflow-y-scroll sm:hidden grid">
        <TabPanel value={value} index={0} className="p-5">
          <p>
            共 <span className="font-bold text-primary">{dataNum}</span>筆資料
          </p>
          {data &&
            data.map((item, index) => {
              return (
                <Paper
                  className="w-full min-h-24 my-2 p-4"
                  elevation={2}
                  key={`${item.RouteName}${index}`}
                >
                  <div className="flex justify-between	h-full">
                    <div>
                      <h3 className="font-bold text-gray-500">
                        {item.StationName.Zh_tw}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        更新時間：{item.UpdateTime}
                      </p>
                    </div>

                    <div className="grid">
                      <button className="bg-primary bg-opacity-80 text-white rounded-2xl py-1 w-20 text-xs mb-1">
                        可借：{item.AvailableRentBikes}
                      </button>
                      <button className="bg-secondary bg-opacity-80 text-white rounded-2xl py-1 w-20 text-xs">
                        可停：{item.AvailableReturnBikes}
                      </button>
                    </div>
                  </div>
                </Paper>
              );
            })}
        </TabPanel>
        <TabPanel value={value} index={1} className="h-full -mt-4">
          <div className="bg-gray-100 min-h-full h-96 rounded-3xl block"></div>
        </TabPanel>
      </div>
    </>
  );
};

export default BikeTab;
