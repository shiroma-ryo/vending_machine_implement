import{question} from './question';

async function main() {
    while(true){
const answer = await question("Hello>");
console.log(answer);

if (answer == "exit"){
    console.log("Good Bye")
    break;
}
    }    
}

(async () =>{
await main();
})();


