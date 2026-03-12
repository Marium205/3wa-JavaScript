export function computeAverage(numbers) {
  let sum = 0;

  numbers.forEach((n) => {
    sum += n;
  });

  let average = sum / numbers.length;
  console.log(average);
}