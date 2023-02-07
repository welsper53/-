const xhr = new XMLHttpRequest();
const NEWS = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT = "https://api.hnpwa.com/v0/item/@id.json"
const divContent = document.createElement("div");  // 제목에 대한 상세내용

// 아래 함수의 사용처는 두 군데 임
// 요청 URL마나 바뀌고 나머지는 그대로인 상태 -> 파라미터: url
function getData(url) {
    xhr.open("GET", url, false);
    xhr.send();

    return JSON.parse(xhr.responseText)
}

const news = getData(NEWS);
const ul = document.createElement("ul")

// const title = document.querySelector("#title");
// console.log(news);

// 해시이벤트처리 추가
// 해시값이 변경되면 호출된다
window.addEventListener('hashchange', () => {
    console.log("해시가 변경됨");
    console.log(location.hash); //#34577246
    
    const id = this.location.hash.substring(1);
    
    const newsContent = getData(CONTENT.replace("@id", id))
    const h1 = this.document.createElement("h1");
    console.log(newsContent.title);

    h1.innerHTML = newsContent.title;
    divContent.appendChild(h1);
});

for (let i = 0; i < 10; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    
    a.href = `#${news[i].id}`;
    a.innerHTML = `${news[i].title}  (${news[i].comments_count}${news[i].id})`
    
    li.appendChild(a);
    ul.appendChild(li);
}; // end of for

document.querySelector('#title').appendChild(ul);
document.querySelector("#title").appendChild(divContent);
