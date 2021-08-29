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
~(
  // 1. Given an array. Write a recursive function that removes the first element and returns the given array. (without using arr.unshift(),assign second element to first, third element to second...)

  function addArr() {
    let length = +prompt("Enter Array Length");
    arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(+prompt("Enter Arrays"));
    }
    return arr;
  }
);

//-----------------

function remFirstArr(arr) {
  let res = [];
  debugger;
  if (arr.length < 2) {
    return res;
  } else {
    res.push(arr[1]);
  }
  let b = remFirstArr(arr.slice(1));

  return res.concat(b);
}
console.log(remFirstArr(addArr()));

// 2. 	Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function that concats arrays).

let arr = [5, [3, 4, [1, 2]], 10];

function flateArr(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(flateArr(arr[i]));
    } else {
      res.push(arr[i]);
    }
  }
  console.log(res);
  return res;
}

console.log(flateArr(arr));


// 3. Given a number. Write a function that calculates its sum of the digits and if that sum has more than 1 digit find the sum of digits of that number. Repeat that process if needed and return the result.

et num = 99999;

function ff(n) {
  let res = n.toString();
  let a = 0;

  for (let i = 0; i < res.length; i++) {
    a += +res[i];
  }
  return a;
}

function fn(num) {
  let lastD = num % 10;
  let sum = 0;
  let number = (num - lastD) / 10;
  if (num < 10) {
    return (sum += number + lastD);
  } else {
    sum = fn(ff(num));
  }

  return sum;
}


console.log(fn(num));



// 4. Given an object. Invert it (keys become values and values become keys). If there is more than key for that given value create an array.

let obj = {
  a: "1",
  b: "2",
  c: "2",
  d: "1",
  e: "3",
  f: "4",
  g: "3",
};

function invertObj(obj) {
  let res = {};
  let keys = Object.keys(obj);
  let values = Object.values(obj);

  for (let k in obj) {
    let val = obj[k];
    let arr = [];

    values.filter(function (el, ind) {
      if (val == el) {
        arr.push(keys[ind]);
      }
    });
    if (arr.length > 1) {
      res[val] = arr;
    } else {
      res[val] = k;
    }
  }
  return res;
}

console.log(invertObj(obj));


// 5.  Create a function that builds a tree like object given an array with object which contains parent and id properties.

let treeNodes = [
  { parent: null, id: 0 },
  { parent: 0, id: 1 },
  { parent: 0, id: 2 },
  { parent: 1, id: 3 },
  { parent: 1, id: 4 },
  { parent: 2, id: 5 },
  { parent: 4, id: 6 },
];


function tree(arr, num = null) {
  //debugger
  let obj = {};

  arr.forEach((el) => {
    if (num === el.parent ) {
      let tmp = tree(arr, el.id);
      obj[el.id] = tmp;
    }
  });
  return obj;
}

console.log(tree(treeNodes));


function tree(arr, num = null) {
  let obj = {};

  arr.forEach((el) => {
    if (num === el.parent) {
      let tmp = tree(arr, el.id);
      obj[el.id] = tmp;
    }
  });
  return obj;
}

console.log(tree(treeNodes));
