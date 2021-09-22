//  1. Write a JavaScript function to get all possible subsets of given length of the given array.
//   Assume that all elements in the array are unique.

let arr = [1, 2, 3, 4, 5];

function combine(a, min) {
  function fn(n, src, newArr, all) {
    if (n === 0) {
      if (newArr.length === min) {
        all[all.length] = newArr;
      }

      return newArr;
    }
    for (let j = 0; j < src.length; j++) {
      fn(n - 1, src.slice(j + 1), newArr.concat([src[j]]), all);
    }
    return;
  }
  let all = [];

  for (let i = min; i < a.length; i++) {
    fn(i, a, [], all);
  }
  all.push(a);
  return all;
}

console.log(combine(arr, 3));
