/**
 *  1. 함수 선언식
 */

function add(x,y) {
    return x+y;
}
console.log(add(2,3));

/**
 *  2. 함수 표현식
 */

var addStr = function(x,y){
    return x+y;
}
console.log(addStr("안녕", "하세요"));

/**
 *  2-1. 화살표 함수 표현식
 */

var add = (x,y) => {
    return x+y;
}
console.log(add(2,3));

/**
 *  3. 화살표 함수
 */

// 로직이 한 줄일때 return문 생략 가능
var add = function(x,y){
    return x+y;
}

var add = (x,y) => x+y;
var add = (x,y) => (x+y);

// 매개변수가 하나일 때  매개변수 소괄호 생략 가능
var square = function(X){
    return x*x;
}

var square = x => x*x;

// 객체를 리턴하고 로직이 한 줄일때는 소괄gh()로 감싸줘야함