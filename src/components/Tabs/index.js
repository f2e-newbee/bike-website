import React, { useEffect, useState } from "react";
import { ReactComponent as BikeIcon } from "../../assets/img/bike.svg";
import { ReactComponent as RouteIcon } from "../../assets/img/route.svg";
import { Paper , Stack, Tabs ,Tab } from "@material-ui/core";


const TabPanel = (props) =>{
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>
          {children}
        </div>      
        )}
    </div>
  );
}

const CustomTabs = ({data}) => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dataNum = data?.length ? data.length : 0;

  return (
    <>
    <Tabs value={value} onChange={handleChange} centered className="w-full rounded-t-3xl -mb-4">
      <Tab label="列表模式" />
      <Tab label="地圖模式" />
    </Tabs>
     <div className="relative bg-red-50 row-span-6 rounded-b-3xl overflow-y-scroll sm:hidden grid">
     <TabPanel value={value} index={0} className="p-5">
      <p>共 <span className="font-bold text-primary">{dataNum}</span>筆資料</p>
       {
         data && data.map((item,index)=> { 
          return <Paper className="w-full min-h-24 my-2 p-4" elevation={2} key={`${item.RouteName}${index}`}>
            <div className="flex justify-between	h-full"> 
              <div>
                <h3 className="font-bold text-gray-500">{item.RouteName}</h3>
                <p className="text-gray-400 text-sm">起點: {item.RoadSectionStart}</p>
                <p className="text-gray-400 text-sm	">終點: {item.RoadSectionEnd}</p>
                {
                  item.CyclingLength > 1000 ? 
                  <p className="text-primary text-sm	">全長: {Math.round(item.CyclingLength / 100, -1)} 公里</p>
                  :
                  <p className="text-green text-sm	">全長: <span className="text-green-400">{item.CyclingLength}</span>公尺</p>
                }
              </div>
            </div>
          </Paper>
         })
       }
     </TabPanel>
     <TabPanel value={value} index={1} className="h-full -mt-4">
       <div className="bg-gray-100 min-h-full h-96 rounded-3xl block">
         
       </div>
     </TabPanel>
   </div>
   </>
  );
};

export default CustomTabs;
