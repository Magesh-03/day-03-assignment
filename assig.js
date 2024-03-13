a.Print odd numbers in an array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = numbers.filter(num => num % 2 !== 0);

console.log("Odd numbers in the array:", oddNumbers);

b.Convert all the strings to title caps in a string array

const stringArray = ["hello world", "good morning", "have a nice day"];

const titleCaseArray = stringArray.map(str => {
    return str.toLowerCase().split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
});

console.log("Strings converted to title case:", titleCaseArray);

c.Sum of all numbers in an array

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, num) => total + num, 0);

console.log("Sum of all numbers:", sum);

d.Return all the prime numbers in an array

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = num => {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
};

const primeNumbers = numbers.filter(num => isPrime(num));

console.log("Prime numbers:", primeNumbers);

e.Return all the palindromes in an array

const strings = ["level", "noon", "hello", "world", "radar", "racecar"];

const isPalindrome = str => {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
};

const palindromes = strings.filter(str => isPalindrome(str));

console.log("Palindromes:", palindromes);