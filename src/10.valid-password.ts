import _ from 'lodash';
import { exit } from 'process';
import Prompt from 'prompt-sync';

/*
    This is imperative - see if you can express it more succinctly
*/
export function getValidPassword() {
    let password: string;
    let isValid = false;
    do {
        password = Prompt()('Please input a password: ');
        isValid = password.length > 8 && /[a-z]/i.test(password) && /[0-9]/.test(password);
        console.log(`"${password}" is valid? ${isValid}`);
    } while (!isValid);

    return password;
}

function getValidPassword1(): string {
    return _(_.range(0, 100))
            .map(_ => getOnce())
            .find(p => p != null);
}

function getOnce(): string {
    const password = Prompt()('Please input a password: ');
    const isValid = password.length > 8 && /[a-z]/i.test(password) && /[0-9]/.test(password);
    console.log(`"${password}" is valid? ${isValid}`);
    return isValid ? password : null;
}

console.log(`Password is "${getValidPassword1()}"`);
exit(0);

// may need to install ts-node globally first
// to execute, run: ts-node 10.valid-password.ts
