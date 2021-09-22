// 1. Given an array of numbers. Print frequency of each unique number. (Frequency is the count of particular element divided by the count of all elements)

function arrLength() {
  let length = +prompt("Enter Array Length");
  arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(+prompt("Enter Arrays"));
  }
  return arr;
}

function uniqueNum(arr) {
  let result = {};

  for (let i = 0; i < arr.length; i++) {
    if (!result[arr[i]]) {
      result[arr[i]] = 1;
    } else {
      result[arr[i]]++;
    }
  }

  for (const key in result) {
    console.log(`${key} ${result[key] / arr.length}`);
  }

  return result;
}

//debugger;
console.log(uniqueNum(arrLength()));

//2.	Write a function that accepts a string(a sentence) as a parameter and finds the longest 	word within the string․ If there are several words which are the longest ones, print the 	last word(words can be separated by space, comma or hyphen).

function findLargestWord(string) {
  let str = //prompt("Enter sentence");
    // "Which would be worse - to live as a monster, or to die as a good man?";
    "A revolution without dancing is a revolution not worth having.";

  let reg = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
  let newStr = string.split(reg).join(" ").split(" ");
  let largWord = [];

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i].length >= largWord.length) {
      largWord = newStr[i];
    }
  }
  let newString = string.lastIndexOf(largWord);

  return `The largest word in string is "${largWord}" in index ${newString}`;
}

console.log(findLargestWord(str));

// 3. Write a function to find longest substring in a given a string without repeating characters except space character. If there are several, return the last one. Consider that all letters are lowercase.

let str ='there are no two words in the english language more harmful than "good job"'; //prompt("Enter some String");

function sort(names) {
  let word = "".trim();
  let result = "";
  let str = names.toLowerCase();

  for (i = 0; i < str.length; i++) {
    word = "";
    for (j = i; j < str.length; j++) {
      if (word.includes(str[j])) break;
      else word = word + str[j].replace(" ", "");
    }
    if (result.length < word.length) {
      result = word;
    }
  }

  return result;
}

console.log(sort(str));

// 4.
//	Write a function to compute a new string from the given one by moving the first char to 	come after the next two chars, so "abc" yields "bca". Repeat this process for each 	subsequent group of 3 chars. Ignore any group of fewer than 3 chars at the end.

let str4 = "dfgjkloyp"; // aweyoolp // prompt('Enter some string')
function moveStr(str) {
  let newStr = str.slice();
  console.log(newStr);
  let result = "";

  for (let i = 0; i < newStr.length - 1; i += 3) {
    result = result + newStr.substring(i + 1, i + 3) + newStr.charAt(i);
  }

  return result;
}

console.log(moveStr(str4));

// 5. Write a JavaScript function to get all possible subsets of length 3 of the given array. Assume that all elements in the array are unique.

function someArr() {
  let length = +prompt("Enter Array Length");
  arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(+prompt("Enter Arrays"));
  }
  return arr;
}

function fn1(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        res.push([arr[i], arr[j], arr[k]]);
      }
    }
  }
  return res;
}

console.log(fn1(arr));
