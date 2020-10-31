/*
    this is OK but can be more data-oriented than code-oriented
*/
export function pairs(open: string): string {
    switch (open) {
        case '{': return '}';
        case '[': return ']';
        case '<': return '>';
        case '(': return ')';
        case '"': return '"';
        case '\'': return '\'';
    }

    return '';
}