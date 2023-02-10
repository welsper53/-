// 검색할 문자열
const inputText = "elden ring"

// 유튜브API 받아오기
const xmlYTube = (query) => {
    console.log("검색 ===> " + query);

    const ajax = new XMLHttpRequest();
    const videoList = [];
    const KEY = "AIzaSyBFLQr3dtiya-AK4YKNDUg-svEPb3Z9O9Q";
    const SEARCH_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=${KEY}&q=${query}`;

    ajax.open("GET", SEARCH_URL, false);    // GET방식, url, 동기방식
    ajax.send();        // 서버로 질의

    const xmlResult = JSON.parse(ajax.response);    // 받아온 json형식을 js 맞게 수정(문자열, 배열 등)
    console.log("json ===> ");
    console.log(xmlResult);             // 받아온 json 정보 (Object)

    const list1 = xmlResult.items;
    let list2 = xmlResult.items.map((item) => ({
        ...item, id: item.id.videoId
    }));

    list2.map((video) => {
        console.log("영상제목: " + video.snippet.title);
        console.log("채널명: " + video.snippet.channelTitle);
        console.log("설명: " + video.snippet.description);

    })

}


xmlYTube(inputText);