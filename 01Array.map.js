// Array.prototype.map()
// ㄴ map() 메소드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
// ㄴ 배열의 각 원소별로 지정된 함수를 실행한 결과로 구성된 새로운 배열을 반환
//
// MDN => https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const arr = [ 1, 4, 9, 22 ];
const newArray = arr.map( x => x * 2);
console.log(newArray);
// [2, 8, 18, 44]