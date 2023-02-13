import { weatherKey } from "../../../apiKEY.js";

const getWeather = (local, callback) => {
   fetch(
      `https://api.openweathermap.org/data/2.5/weather?appid=${weatherKey}&q=${local}&units=metric`
   )
      .then((response) => response.json())
      .then((response) => {
         console.log(response);
         callback();
      });
};


// 콜백 지옥
getWeather("seoul", () => {
   console.log("서울 날씨 가져오기");

   getWeather("busan", () => {
      console.log("부산 날씨 가져오기");

      getWeather("incheon", () => {
         console.log("인천 날씨 가져오기");
      });
   });
});


