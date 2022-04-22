// Array.prototype.splice()
// splice(index, 제거할 요소 개수, 배열에 추가 될 요소)
// ㄴ splice() 메소드는 배열의 특정 위치에 요소를 추가하거나 삭제하여 배열의 내용을 변경한다.
// MDN => https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// 1. 배열의 요소 추가
// 앞에 추가: ['a', 'b', 1, 2, 3]
const arr1 = [1, 2, 3];
arr1.splice(0, 0, 'a', 'b');

// 뒤에 추가: [1, 2, 3, 4, 5]
const arr2 = [1, 2, 3];
arr2.splice(arr2.length, 0, '4', '5');
// 중간에 추가: [1, 'a', 'b', 2, 3]
const arr3 = [1, 2, 3,];
arr3.splice(1, 0, 'a', 'b');


// 2. 배열의 요소 삭제
// 앞에서 2개 원소 삭제
const arr4 = ['a', 'b', 1, 2, 3];
arr4.splice(0, 2);

// 마지막 원소 삭제
const arr5 = [1, 2, 3, 'a'];
arr5.splice(arr5.length - 1, 1);

//