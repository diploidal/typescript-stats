import { MatchResult } from './matchResult';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';

const csvFileReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (
    (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) ||
    (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
  ) {
    manUnitedWins++;
  }
}

console.log(`Manchester United won ${manUnitedWins} games.`);
