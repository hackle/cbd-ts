type Person = {
    name: string,
    referAs: 'he' | 'she',
    age: number,
    feelsAge: number,
    appearsAge: number,
    favourite: {
        movie: 'frozen' | 'tenet' | 'god father',
        sport: 'swimming' | 'bowling' | 'mountain biking'
    }
};

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