import { diamond } from "./diamond";

describe('diamond', () => {
    [
        {
            letter: 'D',
            expected: 
`---D---
--C-C--
-B---B-
A-----A
-B---B-
--C-C--
---A---`
        }
    ].forEach(testcase => it(testcase.letter, () => {
        const actual = diamond(testcase.letter);
        expect(actual).toEqual(testcase.expected);
    }));
});