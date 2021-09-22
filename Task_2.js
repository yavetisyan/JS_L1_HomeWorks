// 1

function getArr() {
  let arrLength = +prompt("Enter Array Length");

  let res = [];
  for (let i = 0; i < arrLength; i++) {
    res.push(+prompt("Enter Array's"));
  }
  return res;
}

function getLargeArr(array) {
  let result = [];
  let num = +prompt("Given number is not larger");

  array.forEach((val) => {
    if (val > num) {
      result.push(val);
    }
  });

  if (!result.length) {
    return "Such values do not exist.";
  }
  return result;
}

console.log(getLargeArr(getArr()));

// 2. 	Write a function, which receives two numbers as arguments and finds all numbers between them such that each digit of the number is even. The numbers obtained should be printed in a comma-separated sequence on a single line.

function evenNum() {
  let num1 = +prompt("Enter number a");
  let num2 = +prompt("Enter number b");
  let result = [];

  for (let i = num1; i <= num2; i++) {
    let res;
    let isTrue = true;

    if (i % 2 === 0) {
      res = i;

      while (res > 0) {
        let temp;
        temp = res % 10;
        res = (res - temp) / 10;

        if (temp % 2 !== 0) {
          isTrue = false;
          break;
        }
      }
      if (isTrue) {
        result.push(i);
      }
    }
  }
  if (!result.length) {
    return "Such numbers does not exist.";
  }
  return result.join(", ");
}

console.log(evenNum());

// 3 .Write a recursive function to determine whether all digits of the number are odd or not.

let num = +prompt("Enter number");

function isOdd(n) {
  let temp;
  let sum;

  temp = n % 10;
  sum = (n - temp) / 10;
  if (temp % 2 === 0) {
    return false;
  } else if (temp <= 0) {
    return false;
  } else {
    return isOdd(sum) % 2 !== 0;
  }
}

console.log(isOdd(num));

//4. Given an array of numbers. Write a recursive function to find its minimal positive element. (if such element does not exist, return -1)․

//  Add array
function addArr() {
  let arrLength = +prompt("Enter array length");
  let res = [];

  for (let i = 0; i < arrLength; i++) {
    res.push(+prompt('Enter Array"a'));
  }
  return res;
}

//---------------

function minArr(arr, i = 0) {
  let result = -1;

  if (arr.length === 0 || arr[i] === undefined) {
    return result;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1] && arr[i] >= 0) {
      result = arr[i];
    }
  }
  arr.shift();
  return result < minArr(arr) ? -1 : result;
}

console.log(minArr(addArr()));

//--------filter----------/-

function minArr(arr) {
  let res = [];

  arr.filter((el) => {
    if (el >= 0) {
      res.push(el);
    }
  });
  return Math.min.apply(arr, res);
}

// 5. Given an array of numbers which is almost sorted in ascending order.  Find the index where sorting order is violated.

//  Add array
function addArr() {
  let arrLength = +prompt("Enter array length");
  let res = [];

  for (let i = 0; i < arrLength; i++) {
    res.push(+prompt('Enter Array"a'));
  }
  return res;
}

//---------------

function fn2(arr) {
  let res;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= arr[i + 1]) {
      continue;
    } else {
      res = arr[i + 1];
      break;
    }
  }

  return arr.indexOf(res);
}

console.log(fn2(addArr()));
