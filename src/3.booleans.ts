/*
    This is verbose and very error prone.
    Let's make it more data-oriented and declarative
*/
export function discounted(isBirthday: boolean, isStudent: boolean, isRegular: boolean): number {
    if (isBirthday && isStudent && isRegular) {
        return 0.45;
    }

    if (isBirthday && isStudent) {
        return 0.65;
    }

    if (isBirthday && isRegular) {
        return 0.5;
    }

    if (isStudent && isRegular) {
        return 0.55;
    }

    if (isBirthday) {
        return 0.7;
    }

    if (isStudent) {
        return 0.8;
    }

    if (isRegular) {
        return 0.9;
    }

    return 1;
}