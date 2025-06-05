import{question} from './question';
import{display,buy,refill} from './main';

console.log("1を入力してください")
console.log("2を入力してください")
console.log("3を入力してください")


async function main() {
    while(true){
const answer = await question("Hello>");
console.log(answer);

switch(answer){
    case "1":
    display();
    break;

}

if (answer == "exit"){
    console.log("Good Bye")
    break;
}
    }    
}

(async () =>{
await main();
})();


