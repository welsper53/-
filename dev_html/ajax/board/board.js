const xhrObject = null;

function createRequest() {
    try {
        xhrObject = new XMLHttpRequest();
    } catch (trymicrosoft) {
        try {
            // MS의 IE사용자 위한 객체 생성
            xhrObject = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (error) {
            // xhrObject = null;
        }
    }

    if (xhrObject == null) {
        alert("비동기 통신 객체 생성 에러")
    } 
} // end of createRequest
function createRequest2() {
    try {
        xhrObject = new XMLHttpRequest(); // constuctor: 생성자
    } catch (trymicrosoft) {
        try {
            // MS의 IE사용자 위한 객체 생성
            xhrObject = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (error) {
            // xhrObject = null;
        }
    }

    if (xhrObject == null) {
        alert("비동기 통신 객체 생성 에러")
    } 
    return xhrObject
} // end of createRequest2


//span태그가 가지고 있는 텍스트 노드값을 읽어오기
function getText(el){
    var text="";
    if(el!=null){
        if(el.childNodes){
            for(var i=0;i<el.childNodes.length;i++){
                var childNode = el.childNodes[i];
                //너 텍스트 노드니?
                if(childNode.nodeValue !=null){
                    text = text+childNode.nodeValue;
                }		
            }
        }
    }
    return text;
}

//기존 TextNode의 값을 다른 문자열로 바꾸기
/***********************************************
param1 :document.getElementById("boardSold")
param2 :xhrObject. 
************************************************/
function replaceText(el, value){
    if(el !=null){
        clearText(el);//기존에 있던 10을 지워주세요.
        //새로운 텍스트 노드 15를 생성하기
        var newNode = document.createTextNode(value);//15
        //위에서 생성한 텍스트 노드 값을 el에 붙이는 함수 호출하기
        el.appendChild(newNode);
    }
}

//기존 태그안에 문자열 지우는 함수 구현
function clearText(el){
    if(el !=null){
        if(el.childNodes){
            for(var i=0;i<el.childNodes.length;i++){
                var childNode = el.childNodes[i];
                el.removeChild(childNode);
            }
        }
    }
}