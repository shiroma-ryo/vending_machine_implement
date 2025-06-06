import { question } from './question';
import { display, buy, refill } from './main';

console.log("1を入力: 商品情報を表示")
console.log("2を入力: 購入画面を表示")
console.log("3を入力: 補充画面を表示")
console.log("exitを入力: 終了します")


async function main() {
    while (true) {
        const answer = await question("機能を選択>");
        console.log(answer);

        switch (answer) {
            case "1":
                display();
                break;

            case "2":
                console.log("商品名を入力してください")
                const answer = await question("商品名>");
                console.log(answer);
                console.log("金額を入力してください")
                const answer1 = await question("金額>");
                console.log(answer1);
                buy(String(answer), Number(answer1));
                break;

            case "3":
                while (true) {
                    const answer2 = await question("商品名>");
                    console.log(answer2);
                    console.log("個数を入力してください")
                    const answer3 = await question("個数>");
                    console.log(answer3);
                    refill([{ name: String(answer2), qty: Number(answer3) }]);
                    const answer4 = await question("続けますか？ Yes or No>");





                    
                    if (answer4 == "No") {
                        break;

                    }
                    else {
                        continue;
                    }
                }

        }

        if (answer == "exit") {
            console.log("Good Bye")
            break;
        }
    }
}

(async () => {
    await main();
})();


