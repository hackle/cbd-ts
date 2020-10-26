import { allowedNodeEnvironmentFlags } from "process";

type CreateRequest = {
    category: 'house' | 'car';
    area: number;
    address: string;
    make: string;
    model: string;
};

export function handleRequest(request: CreateRequest): string {
    if (request.category === 'car') {
        return `Requested a ${request.make}-${request.model} car`;
    } else if (request.category === 'house') {
        return `Requested a house of ${request.area}sqm at ${request.area}`;
    }

    return undefined;
}