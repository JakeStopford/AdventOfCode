import { readFileSync } from 'fs';

const file = readFileSync(`${__dirname}\\data.txt`, 'utf-8');

describe('Day One', () => {
  it('Part one', () => {
    let count = 0;
    let previousNum = 0;

    const dataArray = file.split('\n');

    dataArray.forEach((num) => {
      if (num > previousNum) {
        count++;
      }
      previousNum = num;
    });

    expect(count).toBe(1559);
  });
});
