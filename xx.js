//1. Учитывая массив.Напишите рекурсивную функцию, которая удаляет
// Первый элемент и возвращает данный массив.(без использования
// arr.unshift (), назначить второй элемент для первого третьего элемента
//	второй...)

let x = [6, 78, "n", 0, 1];

function removeArr(arr) {
  //debugger;
  let res = [];
  let i = 0;
  let tmp = [];
  if (arr.length < 2) {
    return;
  } else {
    arr[i] = arr[i + 1];
  }
  res.push(arr[i]);

  removeArr(arr.slice(1));
  return res;
}
console.log(removeArr(x));

//let res = [];

//for (let i = 0; i < arr.length; i++) {
//	if (arr[i] === undefined) {
//		break;
//	} else {
//		arr[i] = arr[i + 1];
//		res.push(arr[i]);
//	}
//}
//arr = res.pop();
//return res;
~