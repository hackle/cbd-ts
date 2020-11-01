/*
    given any letter, build a diamond shape.
    For example, with D
    ---A---
    --B-B--
    -C---C-
    D-----D
    -C---C-
    --B-B--
    ---A---
*/

import _ from 'lodash';

const codeA = 'A'.charCodeAt(0);
export function diamond(letter: string): string {
    const endCode = letter.charCodeAt(0);
    // end is exclusive
    const half = _.range(codeA, endCode + 1)
            .map(code => makeLine(code, endCode));

    return half.concat(half.slice(0, -1).reverse()).join('\n');
}

function makeLine(code: number, end: number): string {
    const half = _.range(codeA, end + 1);
    const init = half.slice(1);
    return init.reverse().concat(half)
                .map(c => c === code ? String.fromCharCode(c) : '-')
                .join('');
}