/*
    The current solution is imperative, and buggy.
    1) try to write a failing test
*/
export function fullname(
    firstname: string | undefined, 
    middlename: string | undefined, 
    lastname: string | undefined
): string {
    let fullname = '';
    if (firstname != null) {
        fullname += firstname;
    }

    if (middlename != null) {
        fullname += ' ' + middlename;
    }

    if (lastname != null) {
        fullname += ' ' + lastname;
    }

    return fullname;
}

/*
    full name is first, middle and last name put together,
    whichever exists, 
    and separated with a whitespace
*/
export function fullname1(
    firstname: string | undefined, 
    middlename: string | undefined, 
    lastname: string | undefined
): string {
    return '';
}