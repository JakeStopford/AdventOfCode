import { readFileSync } from 'fs';

let count = 0;
let previousNum = 0;

const data = readFileSync('./data.txt', 'utf8', (err, data) => {
    if (err) throw err;
    return data;
});

const dataArray = data.split('\n');

dataArray.forEach(num => {
    if(num > previousNum) {
        count++
    }
    previousNum = num;
});

console.log(count);