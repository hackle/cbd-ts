import _ from 'lodash';

/*
    See spec file for problem statement
    Maybe there is a useful function from lodash here https://lodash.com/docs/4.17.15
*/
export function pass(players: string[]): string[] {
    const [ first, ...rest] = players;

    return _(players)
        .zipWith(rest.concat(first), (p1, p2) => `${p1} passes the ball to ${p2}`)
        .value();
}