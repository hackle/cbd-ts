/*
    The current solution is imperative, and buggy.
    1) try to break the tests
    2) try to come up with a solution that's described succinctly
        A full name is ...
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