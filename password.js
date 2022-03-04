console.log("Welcome to the password validator tool");
console.log("Password must be 10 characters");
console.log("Can you guess my exact Password?");
//did not know how to take inputs in JS, found on codecademy
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
const myPass = 'alex1234567';
var usrPass;
let goOn = false;

    goOn = true;
    readline.question('Enter Password ' ,usrPass => {
        console.log(`You entered :  ${usrPass}`);
        readline.close();

        if(usrPass.length < 10){
            console.log(`Password must be at least 10 characters ${usrPass} is only ${usrPass.length} characters`);
            goOn = false;
        }else{
            let comp = myPass.localeCompare(usrPass);
            switch (comp){
                case 0:
                    console.log("You guessed my password!")
                    break;
                default:
                    console.log("Not my exact password. My password is 'alex1234567'");
                    break;
            }

        }
    })




