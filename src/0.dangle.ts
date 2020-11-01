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
    if (myScore > opponentScore) {
        return 'Win';
    }
    
    if (myScore < opponentScore) {
        return 'Loss';
    } 
        return 'Tie';
}

/* 
    Given my score and opponent score, 
    the result must be one of the possibilities: a win, a loss or a tie
*/
export function matchResult1(myScore: number, opponentScore: number): string {
    const scenarios = {
        'Win': myScore > opponentScore,
        'Loss': myScore < opponentScore,
        'Tie': myScore == opponentScore,
    };
    return scenarios.Win ? 'Win' :
            scenarios.Loss ? 'Loss' :
            'Tie';
}

/*
    Given my score and opponent score, 
    and the methods Win, Loss and Tie are calculated,
    the result can be found by trying all methods until success
*/
export function matchResult2(myScore: number, opponentScore: number): string {
    const possibilities = [
        myScore > opponentScore ? 'Win' : null,
        myScore < opponentScore ? 'Loss' : null,
        'Tie'
    ];

    return possibilities.find(p => p != null);
}