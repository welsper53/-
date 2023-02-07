const xhr = new XMLHttpRequest();
const NEWS = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT = "https://api.hnpwa.com/v0/item/@id.json"
const container = document.querySelector('#title')

const divContent = document.createElement("div");  // 제목에 대한 상세내용

// 아래 함수의 사용처는 두 군데 임
// 요청 URL마나 바뀌고 나머지는 그대로인 상태 -> 파라미터: url
function getData(url) {
    xhr.open("GET", url, false);
    xhr.send();

    return JSON.parse(xhr.responseText)
}

// 뉴스 목록 가져오기
function newsList() {
    const news = getData(NEWS);

    // 가져온 뉴스 API 정보 보기
    console.log(news);

    // li태그를 담을 배열 선언하기
    const getList = []

    // li태그 담기전에 ul태그 먼저 담기
    getList.push('<ul>')

    for (let i = 0; i < 10; i++) {
        const div = document.createElement("div");
        getList.push(`
            <li>
                <a href='#${news[i].id}'>
                    ${news[i].title} | 댓글수(${news[i].comments_count})
                </a>
            </li>
        `);
    }; // end of for
    getList.push("</ul>");

    console.log(getList.join(""));

    // 빈문자열 주면 구부낯 없는 하나의 합쳐진 HTML문자열을 얻음
    container.innerHTML = getList.join("")
} // end of newsList

// 뉴스 상세 내용보기
function newsDetail() {
    console.log("해시가 변경됨");
    console.log(location.hash); //#34577246
    
    const id = this.location.hash.substring(1); // this = window
    
    const newsContent = getData(CONTENT.replace("@id", id))
    container.innerHTML = `
        <h1>${newsContent.title}</h1>
        <div>
            <a href="#">목록으로</a>
        </div>
    `;
    // console.log(newsContent.title);
}

// 라우터에서 화면 전환하기
function router() {
    // 글 목록의 링크는 #.그러면 location.href에 #이 들어왔을 텐데
    // 왜 이게 참일까? location.href에 #만 들어오면 빈값을 반환
    // 그래서 이 코드가 작동하는 것임
    const routerPath = location.hash
    
    // 첫 진입 일 때는 newsList를 호출한다
    if (routerPath == "") {
        newsList(); 
    } else {
        newsDetail();
    }
} // end of router

window.addEventListener("hashchange", router);
router();
// newsList();