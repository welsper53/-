const xhr = new XMLHttpRequest();
const NEWS = "https://api.hnpwa.com/v0/news/1.json";

xhr.open("GET", NEWS, false);
xhr.send();

// console.log(xhr.responseText);


// document는 index.html 전체를 받는 객체이므로 js에서 사용불가
// document.write(xhr.responseText)
//=> div HTMLElement 받기
const title = document.querySelector("#title");
// console.log(title);
// title.innerText = xhr.responseText;


// 요청으로 반환되는 타입은 이미 문자열이므로 JSON.stringify는 불필요
// 이미 문자열이므로 JSON.parse 사용하여 구조를 분해하면 된다
const news = JSON.parse(xhr.responseText);
console.log(news);
// for (let i = 0; i < news.length; i++) {
//     console.log(news[i].title);
// }


// html 태그 생성하기
//let element = document.createElement(tagName[, options]);
const ul = document.createElement("ul")
for (let i = 0; i < 10; i++) {
    // const ul의 ul태그 안에 li태그를 배열길이 만큼 반복
    const li = document.createElement("li")
    // li.innerHTML = `${news[i].title}  (${news[i].comments_count})`

    //제목을 클릭하면 상세페이지 이동하기 위한 링크 추가
    const a = document.createElement("a")
    a.href = `${news[i].url}`
    a.innerHTML = `${news[i].title}  (${news[i].comments_count})`
    li.appendChild(a)

    // const li는 ul태그 하위태그로 붙임 -> appendChild
    //    var aChild = element.appendChild(aChild);
    ul.appendChild(li)
} // end of for
// console.log(ul);

document.querySelector('#title').appendChild(ul)

