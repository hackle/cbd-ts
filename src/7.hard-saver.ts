/*
    Calculate total income over the years in regards to interest
    Presumed interest rate is constant
    See spec for example
    Tip: you'll need the reduce function
*/
export function allIncomeWithInterest(annualIncome: number[], interestRate: number): number {
    return annualIncome
            .reverse()
            .reduce((tot, cur) => tot * (1 + interestRate) + cur, 0);
}