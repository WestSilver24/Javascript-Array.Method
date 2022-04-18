// Array.prototype.forEach()
// ㄴ forEach() 메소드는 주어진 함수를 배열 요소 각각에 대해 실행한다.
// MDN => https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach


// 배열의 각 요소에 대해 오름차순으로 한 번 씩 실행: [2, 4, 6]
const arr = [1, 2, 3];
arr.forEach(value => console.log(value * 2));



// for 반복문을 forEach()로 바꾸기
const items = ['item1', 'item2', 'item3'];
const copy = [];

for (let i = 0; i < items.length; i++){
    copy.push(items[i]);
}

items.forEach(item => copy.push(item));