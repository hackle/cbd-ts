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