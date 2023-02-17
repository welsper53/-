import { weatherKey } from "../../../apiKEY.js";

// Promise 방식
const getWeather = (local, callback) => {
   return new Promise((resolve, reject) => {
      fetch(
         `https://api.openweathermap.org/data/2.5/weather?appid=${weatherKey}&q=${local}&units=metric`
      )
         .then((response) => response.json())
         .then((response) => {
            console.log(response);
            resolve();
         });
   })
};


// Promise 방식
getWeather("seoul").then(() => {
   console.log("서울 날씨 가져오기");
})
getWeather("busan").then(() => {
   console.log("부산 날씨 가져오기");
})
getWeather("incheon").then(() => {
   console.log("인천 날씨 가져오기");
});



/* 
   Seoul, clear sky
   서울 날씨 가져오기
   Seoul, clear sky
   부산 날씨 가져오기
   Busan, broken clouds
   인천 날씨 가져오기
   Incheon, clear sky
*/