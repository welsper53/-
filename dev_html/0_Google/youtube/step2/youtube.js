const ajax = new XMLHttpRequest();  //비동기통신
// 문자열 처리하는 경우가 훨씬 더 직관적이다 <- 정적 - 고정
// but, 배열은 덜 하다 - 뚝뚝 끊어지니까... <- 동적
//
const videoList = [];

const key = 'AIzaSyApRV2JyPcJUTEbJs4pmzJuT4pSmMIsovY';
const MOST_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${key}`;

ajax.open('GET', MOST_URL, false);
ajax.send();

const most = JSON.parse(ajax.response);
const items = most.items;
console.log(items);
console.log(items.length);    // 25

videoList.push(`<ul class="videos">`)
for (let i = 0; i < items.length; i++) {
  videoList.push(`<li class="container">`);
  videoList.push(`<div class="video">`);
  videoList.push(`<img  class="thumbnail" src="${items[i].snippet.thumbnails.medium.url}"/>`);
  videoList.push(`<div>`);
  videoList.push(`<p class="title">${items[i].snippet.title} </p>`);
  videoList.push(`<p class="channelTitle">${items[i].snippet.channelTitle} </p>`);
  videoList.push(`</div>`);
  videoList.push(`</div>`);
  videoList.push(`</li>`);
}
videoList.push(`</ul>`);

document.querySelector('#root').innerHTML = videoList.join();
