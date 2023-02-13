import {
    getAuth,
    signInWithPopup,
    GithubAuthProvider,
    GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

class AuthLogic {   // 객체 선언 - JS에서는 오버로드X
    constructor() {     // 익명생성자
        this.firebaseAuth = getAuth();      // 구글에서 객체 주입
        this.googleProvider = new GoogleAuthProvider(); // 구글 지원객체
        this.githubProvider = new GithubAuthProvider(); // 구글 github지원 객체
    }

    login(providerName) {   // 로그인 함수
        console.log('providerName : '+ providerName);
        const authProvider = this.getProvider(providerName);    // 구글or깃험인지 문자열 정보 가져온다
        console.log('authProvider : '+ authProvider);
        console.log('this.firebaseAuth : '+ this.firebaseAuth);
        //return signInWithPopup(this.firebaseAuth, authProvider);
        return signInWithPopup(this.firebaseAuth, authProvider);
    }

    // 로그아웃 버튼이 눌리면 호출
    // 그런데 굳이 export로 선언하는 이유가 무엇일까?
    // 리액트에서는 한 페이지를 모듈화 시켜서 재사용성을 높이는 방식이므로
    // 어떤 컴포넌트에서든지 호출이 가능하도록 설계하는 것이 좋다
    logout() {
        this.firebaseAuth.signOut();
    }

    // 호출되면 파라미터값에 따라서 
    onAuthChange(onUserChanged) {
        // 구글에서 제공하는 함수 - onAuthStateChanged
        this.firebaseAuth.onAuthStateChanged((user) => {
        onUserChanged(user);
        });
    }

    // 아래 파라미터로 Google or Github
    getProvider(providerName) { // Google google에러 발생
        switch (providerName) {
        case "Google":
            return this.googleProvider;
        case "Github":
            return this.githubProvider;
        default:
            throw new Error(`not supported provider: ${providerName}`);
        }
    }
}

export default AuthLogic;       // 이렇게 해야 외부에서 사용가능

/* 
package.json에는 의존관계 라이브러리 등록
(개발자 의존 -D <-실제 운영서버에는 미배포, 배포)
외부 스크립트 사용 방법
1. commonjs 
: 디폴트(생략가능)
: package.json -> 'npm init -y'
: const http = requires('http')

2. module
: import {...} from "~~~.js"
: 리액트 수업 공통 사항
: authLogic.js <- 리액트 수업 활용
: export - 여러개 가능 {}
: export default - 하나만 가능 


호이스팅 대상
: var i
: 함수 선언
: import 문
: 가장 먼저 실행된다 - 가장 먼저 읽는다 - 먼저 스캔된다
: 이것을 미루는 예약어
: => defer (다운로드 끝나고 브라우저가 DOM Tree를 그린다)
: -> DOM Tree가 완성되면 DOM API 사용가능
: -> document.querySelector(), document.querySelectorALl() (<- 배열)
: -> 브라우저는 같은 이름이 두 개 이상이면 자동으로 배열 전환이 된다


JSON
: 배열 - 데이터셋과 직결 -> json
: const temp = JSON.stringify(response.json())  [객체 -> 문자열]
: const jsonDoc = JSON.parse(temp)      [문자열 -> 배열]
: jsonDoc[].~~~


동기, 비동기
: 외부서버의 API를 내려받으려면 시간이 걸린다 -> 비동기처리 발생
: 각각 처리하다가 먼저 처리가 되면 -> then(() => {})


mime type
: text/javascript   <- require, import error
: text/module       <- import
: text/common       <- require
: 서로 호환되지 않는다
*/