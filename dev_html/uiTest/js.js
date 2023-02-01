join = () => {
    /* 		console.log("arrow Join") */
    const frm = document.querySelector("#f_join")
    frm.submit()
}



const fileBtn = document.querySelector("#fileBtn")
console.log(fileBtn);

fileBtn.addEventListener("click", () => {
    console.log("파일 업로드");
});


const insBtn = document.querySelector("#insBtn")
console.log(insBtn);

insBtn.addEventListener("click", () => {
    console.log("가입버튼");
});