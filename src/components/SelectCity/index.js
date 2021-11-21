import * as React from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";

/**
 * 選擇縣市下拉選單
 */
export default function SelectCity({ city, setCity }) {
  // const [city, setCity] = React.useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };
  return (
    <FormControl fullWidth>
      <InputLabel
        id="demo-simple-select-label"
        sx={{
          color: "#3B494B",
          fontWeight: "700",
        }}
      >
        選擇縣市
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={city}
        label="City"
        onChange={handleChange}
        sx={{
          fontWeight: "700",
          borderRadius: "1.5rem",
          color: "#3B494B",
          backgroundColor: "white",
        }}
      >
        <MenuItem value=''>請選擇</MenuItem>
        {cityList.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

const cityList = [
  {
    label: "臺中市",
    value: "Taichung",
  },
  {
    label: "新竹市",
    value: "Hsinchu",
  },
  {
    label: "苗栗縣",
    value: "MiaoliCounty",
  },
  {
    label: "新北市",
    value: "NewTaipei",
  },
  {
    label: "屏東縣",
    value: "PingtungCounty",
  },
  {
    label: "金門縣",
    value: "KinmenCounty",
  },
  {
    label: "桃園市",
    value: "Taoyuan",
  },
  {
    label: "臺北市",
    value: "Taipei",
  },
  {
    label: "高雄市",
    value: "Kaohsiung",
  },
  {
    label: "臺南市",
    value: "Tainan",
  },
  {
    label: "嘉義市",
    value: "Chiayi",
  },
];
