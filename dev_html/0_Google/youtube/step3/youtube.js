// input textfield에 입력한 후 엔터 쳤을 때 잡아내는 함수
const keyword = document.querySelector("#keyword");

keyword.addEventListener('keypress', (event) => {
  console.log("onkeypress가 엔터인지? 아닌지" + event.keyCode);   // 결과값은 아스키 코드
  handleSearch();
})

//사용자가 입력한 검색어 읽어오기
const handleSearch = () => {
  const user = document.querySelector("#keyword").value;  // 입력한 문자열
  console.log("사용자가 입력한 검색어 ===> " + user);
  search(user);
}

//사용자가 입력한 검색어로 조건 검색 구현하기
const search = (query) => {
  console.log('사용자가 입력한 bts 받음:' + query);

  const ajax = new XMLHttpRequest();
  const videoList = [];
  const key = "AIzaSyB1vNvFxiP1ksmLzPiSoPq85nQhG0ljHwU";
  const SEARCH_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${key}`;

  ajax.open("GET", SEARCH_URL, false);
  ajax.send();
  
  const sear = JSON.parse(ajax.response);
  const items = sear.items;
  console.log(items);
  console.log(items.length);    // 25

  // 검색 결과 body태그에 출력
  videoList.push(`<ul class="videos">`);
  for (let i = 0; i < items.length; i++) {
    //25번 반복 - 25개의 li
    videoList.push(`<li class="container">`);
    videoList.push(`<div class="video">`);
    videoList.push(
      `<img class="thumbnail" src='${items[i].snippet.thumbnails.medium.url}'/>`
    );
    videoList.push(`<div>`);
    videoList.push(`<p class="title">${items[i].snippet.title}</p>`);
    videoList.push(
      `<p class="channelTitle">${items[i].snippet.channelTitle}</p>`
    );
    videoList.push(`</div>`);
    videoList.push(`</div>`);
    videoList.push(`</li>`);
  }
  videoList.push(`</ul>`);

  document.querySelector("#root").innerHTML = videoList.join("");
} // end of search
