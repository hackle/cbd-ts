/*
    given any letter, build a diamond shape.
    For example, with D
    ---D---
    --C-C--
    -B---B-
    A-----A
    -B---B-
    --C-C--
    ---A---
*/

import _ from 'lodash';

const codeA = 'A'.charCodeAt(0);
export function diamond(letter: string): string {
    const endCode = letter.charCodeAt(0);
    const half = _.range(codeA, )
            .map(code => makeLine(code, endCode));

    return half.concat(half.slice(1).reverse()).join('\n');
}

function makeLine(code: number, end: number): string {
    const half = _.range(codeA, end);
    const init = half.slice(1);
    return half.concat(init.reverse())
                .map(c => c === code ? String.fromCharCode(c) : ' ')
                .join('');
}