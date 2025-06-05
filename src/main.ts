// const display = () =>{
//     console.log("# Display drinks #\n",
//         "Milk | 120 | \n"
//         ,"Cola | 150 | sold out\n",
//         "Beer | 220 |"
//     );
// };
// display();



const drink: any[] = [
    { name: "Milk", price: 120, qty: 0 },
    { name: "Cola", price: 150, qty: 0 },
    { name: "Beer", price: 220, qty: 0 }
];

const display = () => {
    for (let i = 0; i < drink.length; i++) {
        let drinkpick = drink[i];
        console.log(drinkpick.name, "|", drinkpick.price, "|", drinkpick.qty)

        // console.log(drinkpick[0].name ,"|",drinkpick[0].price,"|",drinkpick[0].qty);
    }
    // console.log(drink[0].name ,"|",drink[0].price,"|",drink[0].qty);
    // console.log(drink[1].name,"|",drink[1].price,"|",drink[1].qty);
    // console.log(drink[2].name,"|",drink[2].price,"|",drink[2].qty);
}
display()

const choise = "Sake"
const choiseprice = 200
const buy = () => {
    let hantei:boolean = false;
    for (let i = 0; i < drink.length; i++) {
        if (drink[i] == choise) {
            hantei = true;
        }
    }
    if (! hantei) {
        console.log("NG", "|", choise, "is not registered")
        return;
    }

    for (let i = 0; i < drink.length; i++) {
        let drinkpick = drink[i];
        if (choise == drinkpick.name) {
            if (drinkpick.qty == 0) {
                console.log("NG", "|", drinkpick.name, "is sold out")
                return
            }
            if (drinkpick.price > choiseprice) {
                console.log("NG", "|", "Not enough paymentAmount for", drinkpick.name,)
                return
            }
            console.log("OK", "|", drinkpick.name, "purchased")
        }
    }
}
buy()

const addstock: any[] = [
    { name: "Beer", qty: 3 },
    { name: "Milk", qty: 2 },
    { name: "Beer", qty: 3 },
    { name: "Cola", qty: 3 }
];

const refill = () => {
    for (let i = 0; i < addstock.length; i++) {
        let drinkpick = addstock[i];
        for (let j = 0; j < drink.length; j++) {

            if (drinkpick.name == drink[j].name) {
                drink[j].qty = drink[j].qty + drinkpick.qty;
            }
        }
        // Milk の補充
        // if (drinkpick.name == drink[0].name) {
        //     drink[0].qty = drink[0].qty + drinkpick.qty;
        // }
        // if (drinkpick.name == drink[1].name) {
        //     drink[1].qty = drink[1].qty + drinkpick.qty;
        // }
        // if (drinkpick.name == drink[2].name) {
        //     drink[2].qty = drink[2].qty + drinkpick.qty;
        // }
    }

}
refill()

display()

//     if (choise == drink[0].name){

//  console.log("OK","|","Milk purchased")
//     }
//     if (choise == drink[1].name){

//  console.log("OK","|","Cola purchased")
//     }
//     if (choise == drink[2].name){

//  console.log("OK","|","Beer purchased")
//     }