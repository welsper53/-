import { weatherKey } from "../../../apiKEY.js";

// Promise 방식
const getWeather = (local, callback) => {
   return new Promise((resolve, reject) => {
      fetch(
         `https://api.openweathermap.org/data/2.5/weather?appid=${weatherKey}&q=${local}&units=metric`
      )
         .then((response) => response.json())
         .then((response) => {
            // console.log(response);
            console.log(response.name + ", " + response.weather[0].description);
            resolve();
         });
   })
};


// Promise 방식
getWeather("seoul")
   .then(() => {
      console.log("서울 날씨 가져오기");
      return getWeather("seoul");
   })
.then(() => {
      console.log("부산 날씨 가져오기");
      return getWeather("busan");
   })
.then(() => {
      console.log("인천 날씨 가져오기");
      return getWeather("incheon");
   });



