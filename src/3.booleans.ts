/*
    This is verbose and very error prone.
    Let's make it more data-oriented and declarative
*/
export function discounted(isBirthday: boolean, isStudent: boolean, isRegular: boolean): number {
    return [
    { isBirthday: true,     isStudent: true,    isRegular: true,    final: 0.45 },
    { isBirthday: true,     isStudent: true,    isRegular: false,   final: 0.65 },
    { isBirthday: true,     isStudent: false,   isRegular: true,    final: 0.5 },
    { isBirthday: true,     isStudent: false,   isRegular: false,   final: 0.7 },
    { isBirthday: false,    isStudent: true,    isRegular: true,    final: 0.55 },
    { isBirthday: false,    isStudent: true,    isRegular: false,   final: 0.8 },
    { isBirthday: false,    isStudent: false,   isRegular: true,    final: 0.9 },
    { isBirthday: false,    isStudent: false,   isRegular: false,   final: 1 },
    ].find(scenario => scenario.isBirthday === isBirthday && 
                        scenario.isStudent === isStudent &&
                        scenario.isRegular === isRegular
    ).final;
}