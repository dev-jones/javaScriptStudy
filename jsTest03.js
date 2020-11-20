// 1
var xhr = new XMLHttpRequest;   // 생성자표현식

// 2
xhr.open('GET', 'data/test.json', true);    // 요청준비. 파라미터는 3개

// 3
xhr.send('search=raspberry');   // 준비된 요청을 전달하는 함수. 추가 정보지정. 없으면 null


xhr.onload = function() {   // 4 응답받으면 onload 이벤트 발생.

    if(xhr.status === 20) {     // 5 익명함수는 xhr객체의 status값 조사후 응답이 정상인지 확인

        // 서버의 실행결과를 처리할 코드
    }
}