import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf8',
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

let manUnitedWins = 0;

for (let match of matches) {
  if (
    (match[1] === 'Man United' && match[5] === 'H') ||
    (match[2] === 'Man United' && match[5] === 'A')
  ) {
    manUnitedWins++;
  }
}

console.log(`Manchester United won ${manUnitedWins} games.`);
