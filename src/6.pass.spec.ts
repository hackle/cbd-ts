import { pass } from "./6.pass";

describe('Pass', () => {
    it('Goes around', () => {
        const actual = pass([ 'Adam', 'Bela', 'Charles', 'Diane' ]);

        expect(actual).toEqual([
            'Adam passes the ball to Bela',
            'Bela passes the ball to Charles',
            'Charles passes the ball to Diane',
            'Diane passes the ball to Adam'
        ]);
    });
});