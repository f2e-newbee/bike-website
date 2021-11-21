/**
 * 取得使用者當前經緯度
 * @returns 
 */
export default function getGeoLocation() {
  if (!navigator.geolocation) {
    alert("瀏覽器不支援");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      return { latitude, longitude };
    },
    (error) => {
      alert("錯誤");
    }
  );
}
