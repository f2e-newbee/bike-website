/**
 * 取得使用者當前經緯度
 */
const getGeoLocation = () =>
  new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject("瀏覽器不支援");
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        resolve({ latitude, longitude });
      },
      (error) => {
        reject("錯誤");
      }
    );
  });
export default getGeoLocation