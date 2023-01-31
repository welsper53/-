let requestOptions1 = {
    method: 'GET',
    redirect: 'follow'
};
let requestOptions2 = {
        method: 'GET',
        redirect: 'follow'
};

const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";

// 제목을 클릭 시 다중 댓글 출력하기 위한 div 생성
const content = document.createElement("div");


// 뉴스 타이틀
fetch(NEWS_URL, requestOptions1)
    .then(response => response.json())   
    .then(result =>  {
        const news = result;
        const ul = document.createElement("ul");

        for (let i=0; i<10; i++) {
            const div = document.createElement("div");
            div.innerHTML = `
                <li>
                    <a href='#${news[i].id}'>
                        ${news[i].title}('350')
                    </a>
                </li>
            `;
            ul.appendChild(div.firstElementChild);
        }
        document.getElementById("root").appendChild(ul);
        document.getElementById("root").appendChild(content);
    })
    .catch(error => console.log('error', error));


window.addEventListener("hashchange", () => {
    const id = this.location.hash.substr(1);
    
    // 뉴스 내용
    // replace("변수", 파라미터)
    fetch(CONTENT_URL.replace("@id", id), requestOptions2)
    .then(response => response.json())
    .then(result => {
        // 계획: <div><h1>제목1</h1><h1>제목2</h1>...</div>
        const title = this.document.createElement("h1");
        title.innerHTML = result.title;
        
        // content 상수에 div태그 넣기
        content.appendChild(title);
    })
    .catch(error => console.log('error', error));
})