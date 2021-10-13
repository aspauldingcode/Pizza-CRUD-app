
//implement html text replacements
let orderID  = document.getElementById('ID')
let pizzaSize = document.getElementById('size')
let pizzaSauce = document.getElementById('sauce')
let pizzaMeat = document.getElementById('meat')
let pizzaVeggies = document.getElementById('veggies')
let pizzaPrice = document.getElementById('price')

// Order ID

// let changeID = (e) => {
//   console.log(e);
//   let size = e.innerText
//   console.log("replaced size text")
//   pizzaSize.innerHTML = size
//   return 'Small';
// }

// pizza Size
let selectSize = (e) => {
  console.log(e);
  let size = e.innerText
  console.log("Selected Pizza Size")
  pizzaSize.innerHTML = size
}

// pizza Sauce
let selectSauce = (e) => {
  console.log(e);
  let sauce = e.innerText
  console.log("Selected Sauce Type")
  pizzaSauce.innerHTML = sauce
}

// meat Toppings
let selectMeat = (e) => {
  console.log(e);
  let meat = e.innerText
  console.log("Selected Meat Toppings")
  pizzaMeat.innerHTML = meat
}

// veggie Toppings
let selectVeggies = (e) => {
  console.log(e);
  let veggies = e.innerText
  console.log("Selected Meat Toppings")
  pizzaVeggies.innerHTML = veggies
}
// pizza Price


console.log(size);
// console.log(orderID);
// console.log(orderID.value);

// getRandomCards = () => {
// let myCard = myRandomCard();
// let enemyCard = enemyRandomCard();
 
//   if(myCard > enemyCard) {
//   console.log('I win')
//   } else {
 
//   }
// }

// // Order ID
// orderID = () => {
//   let array = ['Ace', 'King', 'Queen', 'Jack', 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
//   let arrayLocation = Math.floor(Math.random(0, 14) * 10)
//   let outputCard = array[arrayLocation]
//   console.log(outputCard)
//   myOutput.innerHTML = array[arrayLocation]
//   return outputCard;
// }

// // pizza Size
// enemyRandomCard = () => {
//   let array = ['Ace', 'King', 'Queen', 'Jack', 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
//   let arrayLocation = Math.floor(Math.random(0, 14) * 10)
//   let outputCard = array[arrayLocation]
//   console.log(outputCard)
//   enemyOutput.innerHTML = array[arrayLocation]
//   return outputCard;
// }