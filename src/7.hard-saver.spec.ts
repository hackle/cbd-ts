import { allIncomeWithInterest } from "./7.hard-saver";

/*
    See spec for problem statement
    Presumed interest rate is constant
*/
describe('interest', () => {
    it('Snowballs', () => {
        const annualIncome = [
            50000, // current year, no interest
            40000, // a year before
            30000, // 2 years before
        ];

        const actual = allIncomeWithInterest(annualIncome, 0.02);

        // disclaimer: not to be taken seriously
        // current year, no interest yet
        // 50000 + 40000 * 1.02 + 30000 * 1.02 * 1.02
        expect(actual).toEqual(122012);
    });
});