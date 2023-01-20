const requestOptions = {
  method: "GET",
  redirect: "follow",
};
// var 사용하지 않습니다 - 호이스팅
fetch(
  "http://192.168.10.72:9000/chat221228/member/jsonMyBatisMemberList.jsp", requestOptions)
  .then((response) => response.text())
  // .then((result) => console.log(result))

  .then((result) => {
    const jsonDoc = JSON.parse(result);
    
    // 쿼리 결과 갯수를 출력
    console.log(jsonDoc.length);
    
    for (let i=0; i<jsonDoc.length; i++) {
      document.write(`번호 : ${jsonDoc[i].MEM_NO} 아이디 : ${jsonDoc[i].MEM_ID}`)
    }
  })
  .catch((error) => console.log("error", error));
