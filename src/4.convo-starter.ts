export type Person = {
    name: string,
    referAs: 'he' | 'she',
    age: number,
    feelsAge: number,
    appearsAge: number,
    favourite: {
        movie: 'frozen' | 'tenet' | 'godfather',
        sport: 'swimming' | 'bowling' | 'mountain biking'
    }
};

/*
    What are the patterns of the implementation?
    How would you express more succinctly the gathering of conversation starters?
*/
export function convoStarter(person: Person): string[] {
    let facts = [];

    if (person.age != person.feelsAge) {
        facts.push(`${person.name} is ${person.age}, but ${person.referAs} feels like ${person.feelsAge}`);
    }

    if (person.age != person.appearsAge) {
        facts.push(`${person.name} is ${person.age}, but looks like ${person.referAs} is ${person.appearsAge}`);
    }

    if (person.age > 80 && person.favourite.movie === 'frozen') {
        facts.push(`${person.name} is ${person.age} likes ${person.favourite.movie}, interesting!`);
    }

    if (person.age < 10 && person.favourite.sport === 'bowling') {
        facts.push(`${person.name} is only ${person.age} but already into ${person.favourite.sport}`);
    }

    return facts;
}


type FactMaker = { test: (person: Person) => boolean, make: (person: Person) => string };
const factMakers: FactMaker[] = [
    {
        test: (person: Person) => person.age != person.feelsAge,
        make: (person: Person) => `${person.name} is ${person.age}, but ${person.referAs} feels like ${person.feelsAge}`,
    },
    {
        test: (person: Person) => person.age != person.appearsAge,
        make: (person: Person) => `${person.name} is ${person.age}, but looks like ${person.referAs} is ${person.appearsAge}`,
    },
    {
        test: (person: Person) => person.age > 80 && person.favourite.movie === 'frozen',
        make: (person: Person) => `${person.name} is ${person.age} likes ${person.favourite.movie}, interesting!`
    },
    {
        test: (person: Person) => person.age < 10 && person.favourite.sport === 'bowling',
        make: (person: Person) => `${person.name} is only ${person.age} but already into ${person.favourite.sport}`
    }
];

export function convoStarter1(person: Person): string[] {
    return factMakers.filter(m => m.test(person))
                    .map(m => m.make(person));
}