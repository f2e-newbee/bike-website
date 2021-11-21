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

const CustomTabs = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Tabs value={value} onChange={handleChange} centered className="w-full rounded-t-3xl -mb-4">
      <Tab label="列表模式" />
      <Tab label="地圖模式" />
    </Tabs>
     <div className="relative bg-red-50 row-span-6 rounded-b-3xl overflow-y-scroll sm:hidden grid">
     <TabPanel value={value} index={0} className="p-5">
       <Paper className="w-full h-24 my-2 p-4" elevation={2} >
         <div className="flex justify-between	h-full"> 
           <div>
             <h3 className="font-bold text-gray-500">站點名稱</h3>
             <p className="text-gray-400 text-sm	">全長:100km</p>
           </div>
           <div className="grid">
             <button className="bg-primary bg-opacity-80 text-white rounded-2xl py-1 w-20 text-xs mb-1">可借</button>
             <button className="bg-secondary bg-opacity-80 text-white rounded-2xl py-1 w-20 text-xs">可停</button>
           </div>
         </div>
       </Paper>
       <Paper className="w-full h-24 my-2 p-4" elevation={2} >
         <div className="flex justify-between	h-full"> 
           <div>
             <h3 className="font-bold text-gray-500">站點名稱</h3>
             <p className="text-gray-400 text-sm	">全長:100km</p>
           </div>
           <div className="grid">
             <button className="bg-primary bg-opacity-80 text-white rounded-2xl py-1 w-20 text-xs mb-1">可借</button>
             <button className="bg-secondary bg-opacity-80 text-white rounded-2xl py-1 w-20 text-xs">可停</button>
           </div>
         </div>
       </Paper>
       <Paper className="w-full h-24 my-2 p-4" elevation={2} >
         <div className="flex justify-between	h-full"> 
           <div>
             <h3 className="font-bold text-gray-500">站點名稱</h3>
             <p className="text-gray-400 text-sm	">全長:100km</p>
           </div>
           <div className="grid">
             <button className="bg-primary bg-opacity-80 text-white rounded-2xl py-1 w-20 text-xs mb-1">可借</button>
             <button className="bg-secondary bg-opacity-80 text-white rounded-2xl py-1 w-20 text-xs">可停</button>
           </div>
         </div>
       </Paper>
       <Paper className="w-full h-24 my-2 p-4" elevation={2} >
         <div className="flex justify-between	h-full"> 
           <div>
             <h3 className="font-bold text-gray-500">站點名稱</h3>
             <p className="text-gray-400 text-sm	">全長:100km</p>
           </div>
           <div className="grid">
             <button className="bg-primary bg-opacity-80 text-white rounded-2xl py-1 w-20 text-xs mb-1">可借</button>
             <button className="bg-secondary bg-opacity-80 text-white rounded-2xl py-1 w-20 text-xs">可停</button>
           </div>
         </div>
       </Paper>   
       <Paper className="w-full h-24 my-2 p-4" elevation={2} >
         <div className="flex justify-between	h-full"> 
           <div>
             <h3 className="font-bold text-gray-500">站點名稱</h3>
             <p className="text-gray-400 text-sm	">全長:100km</p>
           </div>
           <div className="grid">
             <button className="bg-primary bg-opacity-80 text-white rounded-2xl py-1 w-20 text-xs mb-1">可借</button>
             <button className="bg-secondary bg-opacity-80 text-white rounded-2xl py-1 w-20 text-xs">可停</button>
           </div>
         </div>
       </Paper> 
       <Paper className="w-full h-24 my-2 p-4" elevation={2} >
         <div className="flex justify-between	h-full"> 
           <div>
             <h3 className="font-bold text-gray-500">站點名稱</h3>
             <p className="text-gray-400 text-sm	">全長:100km</p>
           </div>
           <div className="grid">
             <button className="bg-primary bg-opacity-80 text-white rounded-2xl py-1 w-20 text-xs mb-1">可借</button>
             <button className="bg-secondary bg-opacity-80 text-white rounded-2xl py-1 w-20 text-xs">可停</button>
           </div>
         </div>
       </Paper>  
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
