// input textfield에 입력한 후 엔터 쳤을 때 잡아내는 함수
const keyword = document.querySelector("#keyword");

keyword.addEventListener("keypress", (event) => {
  console.log("onkeypress가 엔터인지? 아닌지" + event.keyCode); // 결과값은 아스키 코드
  handleSearch();
});

//사용자가 입력한 검색어 읽어오기
const handleSearch = () => {
  const user = document.querySelector("#keyword").value; // 입력한 문자열
  console.log("사용자가 입력한 검색어 ===> " + user);
  search(user);
};

// 아니 그냥 video로 받아와서 구조분해 해서 사용하면 안되나?
// => 리액트에서는 가능하지만, 바닐라에서는 불가능하다(덩어리(item)로 받아오기)
let videoItem;
const videoShow = (id, title, description, channelTitle) => {
  videoItem = `
    <section class="detail">
      <iframe id="player" type="text/html" width="640" height="360"
      src="http://www.youtube.com/embed/${id}"
      frameborder="0"></iframe>
      <h2>${title}</h2>
      <h3>${channelTitle}</h3>
      <pre class="description">
        ${description}
      </pre>
      <div>
        <a href="./youtube.html">이전페이지</a>
        &nbsp;
        <a href="javascript:search('손흥민')">이전페이지2</a>
      </div>
    </section>
  `;
  document.querySelector("#root").innerHTML = videoItem;
};

//사용자가 입력한 검색어로 조건 검색 구현하기
const search = (query) => {
  console.log("사용자가 입력한 bts 받음:" + query);

  const ajax = new XMLHttpRequest();
  const videoList = [];
  const key = "AIzaSyB1vNvFxiP1ksmLzPiSoPq85nQhG0ljHwU";
  // const SEARCH_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${key}`;
  const SEARCH_URL = "./sample.json";
  // const SEARCH_URL =
  //   "http://192.168.10.47:5500/google/youtube/step4/sample.json";

  ajax.open("GET", SEARCH_URL, false);
  ajax.send();

  const most = JSON.parse(ajax.response);
  const items = most.items;
  let items2;

  items2 = most.items.map((item) => ({ ...item, id: item.id.videoId }));

  console.log(items);
  console.log(items.length); // 25

  // 검색 결과 body태그에 출력
  videoList.push(`<ul class="videos">`);
  // for (let i = 0; i < items.length; i++) {
  items2.map((video) => {
    //25번 반복 - 25개의 li
    // 자바스크립트에서는 파라미터로 값을 넘길 때 
    // 반드시 싱글쿼테이션 or 더블쿼테이션을 붙여야 값(문자열)으로 인정한다
    // 붙이지 않을 경우 "~~ is not defined"라고 나온다 -> 결론은 변수 취급

    // 비디오 제목의 경우 특수문자(괄호 등) 배제하는 정규식을 이용하기
    const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
    const strTitle = video.snippet.title.replace(reg,'');

    videoList.push(`<li class="container" onclick="videoShow('${video.id}', '${strTitle}', '${video.snippet.description}', '${video.snippet.channelTitle}')">`);
    
    videoList.push(`<div class="video">`);
    videoList.push(
      `<img class="thumbnail" src='${video.snippet.thumbnails.medium.url}'/>`
    );
    videoList.push(`<div>`);
    videoList.push(`<p class="title">${video.snippet.title}</p>`);
    videoList.push(`<p class="channelTitle">${video.snippet.channelTitle}</p>`);
    videoList.push(`</div>`);
    videoList.push(`</div>`);
    videoList.push(`</li>`);
  }); // end of map
  videoList.push(`</ul>`);

  document.querySelector("#root").innerHTML = videoList.join("");
}; // end of search
