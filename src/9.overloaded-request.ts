type CreateRequest = {
    category: 'house' | 'car';
    area: number;
    address: string;
    make: string;
    model: string;
};

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

type Car = { make: string, model: string };
type House = { area: number, }
export function handleCar(car: Car): string {

}