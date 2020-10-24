export function matchResult(myScore: number, opponentScore: number): string {
    let result: string;

    if (myScore > opponentScore) {
        result = 'Win';
    } else if (myScore < opponentScore) {
        result = 'Loss';
    } else {
        result = 'Tie';
    }

    return result;
}

export function matchResultNoAssign(myScore: number, opponentScore: number): string {
    return undefined;
}

export function matchResultTestAndDo(myScore: number, opponentScore: number): string {
    return undefined;
}

export function matchResultMap(myScore: number, opponentScore: number): string {
    return undefined;
}