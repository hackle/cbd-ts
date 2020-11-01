import { inflatedAmount } from "./7.inflation";

describe('Inflation', () => {
    it('Snowballs', () => {
        const annualIncome = [
            50000, // current year, no inflation
            40000, // a year before
            30000, // 2 years before
        ];

        const actual = inflatedAmount(annualIncome, 0.02);

        // disclaimer: not to be taken seriously
        // current year, no inflation yet
        // 50000 + 40000 * 1.02 + 30000 * 1.02 * 1.02
        expect(actual).toEqual(122012);
    });
});