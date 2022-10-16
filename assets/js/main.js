//- Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….)
let numbers = '';
for (let stepNumber = 20; stepNumber <= 30; stepNumber += 0.5){
  numbers = `${numbers} ${stepNumber}`;
}
console.log(numbers);

//- Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів
let dollar = 27;
let result = '';
for (let num = 10; num <= 100; num += 10) {
  result = `${result} ${num * dollar}`;
}
console.log(result);

//- Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N
let firstInteger = +prompt('Enter integer number');
let firstIntegerResult = '';
for (let num = 1; num <= 100; num += 1) {
  if (num ** 2 <= firstInteger) {
    firstIntegerResult = `${firstIntegerResult} ${num}`
  } else {
    break;
  }
}
console.log(firstIntegerResult);

//- Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

const numberPrime = parseInt(prompt("Enter a positive number: "));
let isPrime = true;
if (numberPrime <= 1) {
  console.log("1 is neither prime nor composite number.");
}
else if (numberPrime > 1) {
  for (let i = 2; i < numberPrime; i++) {
    if (numberPrime % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`${numberPrime} is a prime number`);
  } else {
    console.log(`${numberPrime} is a not prime number`);
  }
}

//- Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна)
let someNumber = +prompt('Enter number');
let numberThree = 3;
let isDegree = 0;
for (let degree = 1; degree <= someNumber; degree += 1) {
  if (numberThree ** degree === someNumber) {
    isDegree = 1;
    break;
  }
}
if (isDegree === 1) {
  console.log('Это число можно получить, если возводить 3 в степень')
} else {
  console.log('Это число нельзя получить, если возводить 3 в степень')
}

