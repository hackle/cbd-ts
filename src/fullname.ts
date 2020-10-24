export function fullname(
    firstname: string | undefined, 
    middlename: string | undefined, 
    lastname: string | undefined,
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