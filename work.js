a.print odd number in an Array

var arr = [1,2,3,4,5,6,7,8,9]
var odd = arr.filter(number => {
    return number % 2===0;
});
console.log(odd);

b.Convert all the strings to title caps in a string array

(function() {
    var stringArray = ["apple", "banana", "orange", "grape"];
    
    for (var i = 0; i < stringArray.length; i++) {
        stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
    }

    console.log(stringArray);
})();

c .Sum of all numbers in an array

(function() {
    var numbers = [1, 2, 3, 4, 5];

    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    console.log("Sum of all numbers:", sum);
})();

d.Return all the prime numbers in an array

var numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

var primeNumbers = (function(arr) {
    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;

        if (num % 2 === 0 || num % 3 === 0) return false;

        for (var i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }

        return true;
    }

    return arr.filter(function(num) {
        return isPrime(num);
    });
})(numbers);

console.log("Prime numbers:", primeNumbers);

e.Return all the palindromes in an array

(function() {
    var strings = ["level", "noon", "hello", "world", "radar", "racecar"];

    function isPalindrome(str) {
        var reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
    }

    var palindromes = strings.filter(function(str) {
        return isPalindrome(str);
    });

    console.log("Palindromes:", palindromes);
})()

f.Return median of two sorted arrays of the same size.

(function() {
    var arr1 = [1, 3, 5];
    var arr2 = [2, 4, 6];

    var median = (function(arr1, arr2) {
        var merged = arr1.concat(arr2).sort((a, b) => a - b);
        var length = merged.length;
        var midIndex = Math.floor(length / 2);
        
        if (length % 2 === 0) {
            return (merged[midIndex - 1] + merged[midIndex]) / 2;
        } else {
            return merged[midIndex];
        }
    })(arr1, arr2);

    console.log("Median:", median);
})();

g.Remove duplicates from an array

function removeDuplicates(array) {
    return Array.from(new Set(array));
}

const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
console.log("Array without duplicates:", arrayWithoutDuplicates);

h.Rotate an array by k times

(function() {
    var arr = [1, 2, 3, 4, 5];
    var k = 2;

    var rotatedArray = (function(arr, k) {
        const n = arr.length;
        const rotations = k % n;
        return arr.slice(rotations).concat(arr.slice(0, rotations));
    })(arr, k);

    console.log("Rotated array:", rotatedArray);
})();