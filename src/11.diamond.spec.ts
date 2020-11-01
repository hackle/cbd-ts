import { diamond } from "./11.diamond";

describe('diamond', () => {
    [
        {
            letter: 'D',
            expected: 
`---A---
--B-B--
-C---C-
D-----D
-C---C-
--B-B--
---A---`
        }
    ].forEach(testcase => it(testcase.letter, () => {
        const actual = diamond(testcase.letter);
        expect(actual).toEqual(testcase.expected);
    }));
});