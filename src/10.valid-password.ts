import _ from 'lodash';
import { exit } from 'process';
import { createInterface } from 'readline';

/*
    This is imperative - see if you can express it more succinctly
*/
export async function getValidPassword() {
    let password: string;
    let isValid = false;
    do {
        password = await question('Please input a password: ');
        isValid = password.length > 8 && /[a-z]/i.test(password) && /[0-9]/.test(password);
        console.log(`"${password}" is valid? ${isValid}`);
    } while (!isValid);

    return password;
}

async function getValidPassword1(): Promise<string> {
    return await Array(10).fill(0)
            .reduce<Promise<string>>(
                async pass => {
                    const p = await pass;
                    return p == null ? await getOnce() : p;
                },
                Promise.resolve(null)
            );
}

async function getOnce(): Promise<string> {
    const password = await question('Please input a password: ');
    const isValid = password.length > 8 && /[a-z]/i.test(password) && /[0-9]/.test(password);
    console.log(`"${password}" is valid? ${isValid}`);
    return isValid ? password : null;
}

let reader = createInterface(process.stdin, process.stdout);
function question(q: string): Promise<string> {
    return new Promise(resolve => {
        reader.question(q, resolve);
    });
}

getValidPassword1().then(p => {
    console.log(`Password is "${p}"`);

    exit(0);
});

// to execute, run: ts-node 10.valid-password.ts