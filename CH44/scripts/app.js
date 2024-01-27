function sayHello(name, lastName) {
  console.log("hello there!");
}

function sum(num1, num2) {
  const res = num1 + num2;
  return res;
}

function printNumbers() {
  //print numbers from 1 to 20
  //except 7 and 13
  let sum = 0;
  let count = 0;
  let i = 0;

  let numbers = [
    12, 4, 123, 4567, 234, 56, 12, 87, 124, 865, 233, 788, 43, 91, 544, 782,
    653, 845,
  ];

  for (let i = 1; i < 21; i++) {
    if (i != 7 && i != 13) {
      console.log(i);
    }
  }
  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    console.log(num);

    //sum numbers
    sum += num;
    //only greater numbers
    if (num > 500) count += 1;
  }
  console.log("the sum of the numbners is: " + sum);
  console.log("there are " + count + "numbers bigger than 500");
}

function init() {
  console.log("hellow world");
  const x = "Adrian";
  sayHello(x, "Aguinaga");
  sayHello("John", "Doe");
  const result = sum(21 + 21);
  console.log(result);
}

window.onload = init;
