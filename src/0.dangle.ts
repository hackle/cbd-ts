/* 
    Solution: 
    if my score is more than opponent's score, then *set* result to "Win",
    if my score is less than opponent's score, then *set* result to "Loss",
    otherwise, set result to "Tie",
    finally, return the result
    ...
*/
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

/* 
    Let's be less imperative.
    if my score is more than opponent's score, then result is "Win",
    if my score is less than opponent's score, then result is "Loss",
    otherwise, result is "Tie"
    ...
*/
export function matchResultNoAssign(myScore: number, opponentScore: number): string {
    return undefined;
}

/* 
    Given my score and opponent score, 
    the result must be one of the possibilities: a win, a loss or a tie
*/
export function matchResultMap(myScore: number, opponentScore: number): string {
    return undefined;
}

/*
    Given my score and opponent score, 
    and the methods Win, Loss and Tie are determined,
    the result can be found by trying the methods until success
*/
export function matchResultList(myScore: number, opponentScore: number): string {
    return undefined;
}