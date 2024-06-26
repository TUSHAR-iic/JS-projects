const passwordBox = document.getElementById('password');
const length = 8;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const symbols = '!@#$%^&*()_{}:"<>?,./;[]-=';
const num = '1234567890';


const allChars =upperCase + lowerCase + num + symbols

function createPassword(){
    let password ='';
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += symbols[Math.floor(Math.random()*symbols.length)];
    password += num[Math.floor(Math.random()*num.length)];
    while(length > password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value = password ;
}


// async function copyPassword(): This defines an asynchronous function named copyPassword. 
// The async keyword allows the use of await within the function, enabling asynchronous operations.
document.getElementById('img').addEventListener('click', async function copyPassword() {
    const password = passwordBox.value;
    // if (password): This checks if the password variable is not empty or null. 
    if (password) {
        try {
            await navigator.clipboard.writeText(password);
            alert('Password copied to clipboard');
            // await navigator.clipboard.writeText(password);: 
            // This line uses the Clipboard API to write the password text to 
            // the clipboard. The await keyword pauses the execution of the function 
            // until the writeText promise resolves
        } catch (err) {
            console.error('Failed to copy password: ', err);
        }
    }
});

