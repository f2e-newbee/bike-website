import jsSHA from "jssha";
import { store } from "../store/Store";
import { setError } from "../store/reducer/fetchReducer";

export const errorHandler = (err) => {
  if (
    err.response &&
    err.response.status >= 400 &&
    err.response.status <= 500
  ) {
    store.dispatch(
      setError(errorMapping[err.response.status] || "Unknown Error")
    );
  } else {
    return Promise.reject(err);
  }
};

/**
 * Header Authorization設定
 * @returns
 */
export const getAuthorizationHeader = () => {
  const AppID = "bdbebc0153784527916bfb36b23b04af";
  const AppKey = "6nyZwxsViiON7fFYoUxyGp0kwGw";

  let GMTString = new Date().toGMTString();
  let ShaObj = new jsSHA("SHA-1", "TEXT");

  ShaObj.setHMACKey(AppKey, "TEXT");
  ShaObj.update("x-date: " + GMTString);

  let HMAC = ShaObj.getHMAC("B64");
  let Authorization =
    'hmac username="' +
    AppID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"';
  return { Authorization: Authorization, "X-Date": GMTString };
};

// TODO:自訂錯誤訊息
export const errorMapping = {
  404: "Not Found",
  500: "伺服器出錯",
};



