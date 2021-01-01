// 1. Create an array named numbers and store 5 number values in it
let numbers = [21, 5, 3, 78, 45];

// 2. Calculate the sum of array items and print it to the console using console.log()
let sum = 0;
for(let number of numbers) {
    sum += number;
}
console.log(`Sum: ${sum}`);

// 3. Calculate the average of array items and print it to the console using console.log()
let avg = 0;
for(let number of numbers) {
    avg += number;
}
console.log(`Avg: ${sum/(numbers.length)}`);

// 4. Find the highest number in the array and print it to the console using console.log()
let highest = numbers[0];
for(let number of numbers) {
    if(number > highest) {
        highest = number;
    }
}
console.log(`Highest: ${highest}`);

// 5. Find the lowest number in the array and print it to the console using console.log()
let lowest = numbers[0];
for(let number of numbers) {
    if(number < lowest) {
        lowest = number;
    }
}
console.log(`Lowest: ${lowest}`);

// 6. Find the even numbers in the array and print them to the console using console.log()
console.log('Even numbers in array:')
for(let number of numbers) {
    if(number % 2 === 0) {
        console.log(number)
    }
}

// 7. Find the odd numbers in the array and print them to the console using console.log()
console.log('Odd numbers in array:')
for(let number of numbers) {
    if(number % 2 !== 0) {
        console.log(number)
    }
}

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
console.log('Numbers divisible by 5:')
for(let number of numbers) {
    if(number % 5 === 0) {
        console.log(number);
    }
}

// 9. Log all the element of the array one by one
console.log('Elements in array:')
for(let number of numbers) {
    console.log(number);
}

// 10. Find all the number in the array that is divisible by 3
console.log('Numbers divisible by 3:')
for(let number of numbers) {
    if(number % 3 === 0) {
        console.log(number);
    }
}