// 1.Write a function which receives an array and a number as arguments and returns a new array from the elements of the given array which are larger than the given number.

function getArr() {
  let arrLength = +prompt("Enter Array Length");

  let res = [];
  for (let i = 0; i < arrLength; i++) {
    res.push(+prompt("Enter Array's"));
  }
  return res;
}

function getLargeArr(array, num) {
  let result = [];
  num = +prompt("Given number is not larger");

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
    return 1;
  } else if (temp <= 0) {
    return false;
  } else {
    return isOdd(sum) % 2 !== 0;
  }
}

console.log(isOdd(num));
