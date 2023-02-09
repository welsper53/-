const ajax = new XMLHttpRequest();
let content = "";
const key = "AIzaSyApRV2JyPcJUTEbJs4pmzJuT4pSmMIsovY";
const MOST_URL =
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=${key}`;

ajax.open("GET", MOST_URL, false);
ajax.send();

const most = JSON.parse(ajax.response);
const items = most.items;
console.log(items);
console.log(items.length);          //25
constent = `<ul class="videos">`
for(let i=0;i<items.length;i++){    //25번 반복 - 25개의 li
    console.log(items[i].snippet.tumbnails);
    // console.log(items[i].snippet.tumbnails.medium.url);
    console.log("내용" + items[i].snippet.description);
    console.log("제목" + items[i].snippet.title);
}
constent = `</ul>`
