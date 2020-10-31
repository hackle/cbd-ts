import { exit } from 'process';
import { createInterface } from 'readline';

async function getValidPassword() {
    let password: string;
    let isValid = false;
    do {
        password = await question('Please input a password: ');
        isValid = password.length > 8 && /[a-z]/i.test(password) && /[0-9]/.test(password);
        console.log(`"${password}" is valid? ${isValid}`);
    } while (!isValid);

    return password;
}

let reader = createInterface(process.stdin, process.stdout);
function question(q: string): Promise<string> {
    return new Promise(resolve => {
        reader.question(q, resolve);
    });
}

getValidPassword().then(p => {
    console.log(`Password is "${p}"`);

    exit(0);
});