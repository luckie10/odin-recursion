const merge = (left, right) => {
  let i = 0;
  let j = 0;
  let arr = [];

  while (i < left.length && j < right.length) {
    left[i] < right[j] ? arr.push(left[i++]) : arr.push(right[j++]);
  }

  while (i < left.length) arr.push(left[i++]);
  while (j < right.length) arr.push(right[j++]);

  return arr;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const mid = arr.length / 2;
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

console.log(mergeSort([]));
console.log(mergeSort([7, 4, 1, 3, 8, 6, 9, 0, 2, 5]));
