import { convoStarter1 as convoStarter, Person } from "./4.convo-starter";

describe('Convo starter', () => {
    [
        {
            scenario: 'Feels very young!',
            person: <Person>{
                name: 'George',
                referAs: 'he',
                age: 80,
                feelsAge: 25,
                appearsAge: 79,
                favourite: {
                    movie: 'godfather',
                    sport: 'bowling',
                },
            },
            expected: [
                'George is 80, but he feels like 25',
                'George is 80, but looks like he is 79'
            ]
        }
    ].forEach(testcase => it(testcase.scenario, () => {
        const actual = convoStarter(testcase.person);

        expect(actual).toEqual(testcase.expected);
    }));
});