import { matchResult2 as matchResult } from "./0.dangle";

describe('match result', () => {
    [
        { myScore: 10, opponentScore: 20, result: 'Loss' },
        { myScore: 20, opponentScore: 10, result: 'Win' },
        { myScore: 20, opponentScore: 20, result: 'Tie' },
    ].forEach(testcase => it(testcase.result, () => {
        const actual = matchResult(testcase.myScore, testcase.opponentScore);

        expect(actual).toEqual(testcase.result);
    }));
});