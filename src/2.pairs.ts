/*
    this is OK but can be more data-oriented than code-oriented
*/
export function pairs(open: string): string {
    return {
        '{': '}',
        '[': ']',
        '<': '>',
        '(': ')',
        '"': '"',
        '\'': '\''
    }[open] ?? '';
}