let fibNumbers = 0;
process.argv.forEach((value, index, array) => {
  if (index === 2) fibNumbers = Number(value);
});

function fibs(n) {
  let array = [0, 1];
  if (n < 2) return array.slice(0, n + 1);

  for (let i = 2; i <= n; i++) {
    array[i] = array[i - 1] + array[i - 2];
  }
  return array;
}

function fibsRec(n, array = [0, 1]) {
  if (n < array.length) return array.slice(0, n + 1);

  return fibsRec(n, [...array, array.at(-1) + array.at(-2)]);
}

console.log(fibs(fibNumbers));
console.log(fibsRec(fibNumbers));
