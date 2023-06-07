function isPowerOfThree(num) {
  if (num <= 0) {
    return false;
  }

  while (num % 3 === 0) {
    num /= 3;
  }

  return num === 1;
}

const userInput = +prompt("Введіть число:");
const result = isPowerOfThree(userInput);

if (result) {
  alert("Число можна представити у степені числа 3.");
} else {
  alert("Число не можна представити у степені числа 3.");
}

function isPrime(num) {
  for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

const randomNumber = +prompt("ведіть число,що провірити чи є воно простим?");
alert(`Is ${isPrime(randomNumber)} prime `);

function calculateCostInUAH() {
  const dol = 40;
  const results = [];

  for (let uan = 10; uan <= 100; uan += 10) {
    const result = uan * dol;
    results.push(`usd:${uan} in uan: ${result}`); 
  }

  const message = results.join("\n"); 

  alert(message); 
}

calculateCostInUAH();
