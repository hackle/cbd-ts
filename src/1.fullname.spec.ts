import { fullname } from "./1.fullname";

describe('full name', () => {
    [
        { firstname: 'Hux', middlename: undefined, lastname: 'Wan', expected: 'Hux Wan' },
        { firstname: 'Hux', middlename: 'Mango', lastname: 'Wan', expected: 'Hux Mango Wan' },
    ].forEach(testcase => it(JSON.stringify(testcase), () => {
        const actual = fullname(testcase.firstname, testcase.middlename, testcase.lastname);

        expect(actual).toEqual(testcase.expected);
    }));
});