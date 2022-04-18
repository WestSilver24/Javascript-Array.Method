// Array.prototype.map()
// ㄴ map() 메소드는 배열의 모든 요소 각각에 주어진 함수를 호출한 결과로 구성된 새로운 배열을 반환한다.
// MDN => https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// 새로운 배열을 반환: [2, 5, 10, 23]
const arr = [ 1, 4, 9, 22 ];
const newArr = arr.map( x => x + 1);
console.log(newArr);



let elements = [
  'West',
  'Silver',
  'Cho',
  'Developer'
];

// 1. 일반함수: [8, 12, 6, 18]
elements.map(function(element) {
    return element.length * 2;
});

// 2. 화살표함수
elements.map((element) => {
    return element.length * 2;
});

// 파라미터가 하나만 있을 때는 주변괄호 '()' 생략 가능
elements.map(element => {
    return element.length * 2;
});

// 화살표 함수의 유일한 문장이 'return'일때 'return'과 
// 중괄호 '{}' 생략 가능
elements.map(element => element.length * 2);

// 3. destructing 매개변수 사용 : 속성이 하나 일때
// length = 속성, lengthFooArX = 변수명
elements.map(({ length: lengthFooArX }) => lengthFooArX * 2);
// destructing 파라미터 할당
// 리터럴 이름은 꺼내오고 싶은 속성이름 자체로 사용
elements.map(({ length }) => length * 2);
