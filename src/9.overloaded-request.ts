type Car = { category: 'car', make: string, model: string };
type House = { category: 'house', area: number, address: string };
type CreateRequest = Car | House;

/*
    CreateRequest is "opaque" as it contains unnecessary information for each scenario.
    Try to refactor it so each branch has only information that's required
*/
export function handleRequest(request: CreateRequest): string {
    if (request.category === 'car') {
        return `Requested a ${request.make}-${request.model} car`;
    } else if (request.category === 'house') {
        return `Requested a house of ${request.area}sqm at ${request.address}`;
    }

    return undefined;
}

/*
    Again tester-doer or map would do, this is a map
*/
export function handleRequest1(request: CreateRequest): string {
    return {
        'car': () => handleCar(request as Car),
        'house': () => handleHouse(request as House)
    }[request.category]();
}

function handleCar(car: Car): string {
    return `Requested a ${car.make}-${car.model} car`;
}

function handleHouse(house: House): string {
    return `Requested a house of ${house.area}sqm at ${house.address}`;
}