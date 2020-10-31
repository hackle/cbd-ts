import { discounted } from "./3.booleans";

describe('discounted', () => {
    [
        { isBirthday: true, isStudent: true, isRegular: true, expected: 0.45 },
        { isBirthday: true, isStudent: true, isRegular: false, expected: 0.65 },
        { isBirthday: true, isStudent: false, isRegular: true, expected: 0.5 },
        { isBirthday: true, isStudent: false, isRegular: false, expected: 0.7 },
        { isBirthday: false, isStudent: true, isRegular: true, expected: 0.55 },
        { isBirthday: false, isStudent: true, isRegular: false, expected: 0.8 },
        { isBirthday: false, isStudent: false, isRegular: true, expected: 0.9 },
        { isBirthday: false, isStudent: false, isRegular: false, expected: 1 },
    ].forEach(testcase => it(`${JSON.stringify(testcase)}`, () => {
        const actual = discounted(testcase.isBirthday, testcase.isStudent, testcase.isRegular);

        expect(actual).toEqual(testcase.expected);
    }));
});