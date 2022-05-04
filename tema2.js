// *** ex.1 ***
calculateEven = (num) => (Math.abs(num % 2) === 1) ? num * 2 : num - 2
// console.log(calculateEven(-82));

// *** ex.2 ***
const startArrEx2 = [-1, -89, -8, 7, 8, 3, 55, 3, 4];

function generatePrimes (max) {
    let allPrimes = [1, 2, 3];
    for (let i = 4; i <= max; i++) {
        let j = 0
        let isPrime = true
        for (let j = 1; j < allPrimes.length; j++) {
            if ((i % allPrimes[j]) === 0) {
                isPrime = false;
                j = allPrimes.length;
            }
        }
        if (isPrime) {
            allPrimes.push(i)
            };
    }
    return allPrimes;
}

const savePrimes = function (arr) {
    const min = Math.min(Infinity, ...arr);
    const max = Math.max(-Infinity, Math.abs(min), ...arr);
    const primeNums = generatePrimes(max);
    let saves = [];
    for (let i=0; i < arr.length; i++) {
        if ((primeNums.includes(Math.abs(arr[i]))) && !(saves.includes(Math.abs(arr[i])))) {
            saves.push(arr[i]);
        }
    }
    return saves;
}

//console.log(savePrimes(startArrEx2));

// *** ex.3 ***
const startArrEx3 = [`1`,`2`,`3`,`4`,1,`salut`,2,6,true,`true`];

const saveStrings = function (arr) {
    const saves = [];
    arr.forEach((el) => ((typeof el) === `string`) ? saves.push(el) : null);
    return saves;
}

// console.log(saveStrings(startArrEx3));

// *** ex.4 ***
const numAsString = `83275421`;
const sumOdd = function (num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        (Number(num[i]) % 2 === 1) ? sum += Number(num[i]) : null;
    }
    return sum;
}

// console.log(sumOdd(numAsString));

// *** ex.5 ***
// const currentMonth = new Date().getMonth();

const currentMonth = 0;

switch (currentMonth) {
    case 2:
        console.log(`Hello, Spring!`);
        break;
    case 3:
    case 4:
        console.log("It`s the blooming season.");
        break;
    case 5:
        console.log(`Hello, Summer!`);
        break;
    case 6:
    case 7:
        console.log(`Hot hot hot`);
        break;
    case 8:
        console.log(`The fruits are almost ripe!`);
        break;
    case 9:
    case 10:
        console.log(`Om nom nom`);
        break;
    case 11:
        console.log(`Winter season, yay!`);
        break;
    case 0:
    case 1:
        console.log(`Brrr... nope...`);
        break;
    default:
        console.log(`Is that even a month?`)
}