let cards =[]
let sum =0
let hasBlackJack = false
let isAlive = false

console.log (cards)

let message =""

let messageEl =
document.getElementById("message-el")
console.log (messageEl)

function getRandomCard() {
  let randomCard = Math.floor( Math.random() *13)+1
  
  if (randomCard > 10) 
  {return 10} 
  else if (randomCard ===1 )
  {return 11}
 
  else 
  { return randomCard }
  
}


let cardsEl = document.getElementById("cards-el")
console.log(cardsEl)

let sumEl= 
//document.getElementById("sum-el")
document.querySelector ("#sum-el")
console.log (sumEl)

function startgame() {
  let isAlive = true
  let firstCard = getRandomCard()
let secondCard = getRandomCard()
cards = [firstCard, secondCard]
sum = firstCard + secondCard

  rendergame()
}

function rendergame() {
 console.log (sum)
sumEl.textContent= "Sum: "+ sum


cardsEl.textContent = "Cards: " 
for (let i=0; i< cards.length; i++){
  console.log (cards[i])
  cardsEl.textContent += cards[i]+" "
}
if (sum < 21) {
message ="do you like to draw a Card?"
}
else if (sum === 21) {
message ="you have Black Jack!"
  hasBlackJack = true
}
else  {
  message ="you're out of the game!"
  isAlive = false
}
console.log (hasBlackJack)
console.log (isAlive)

messageEl.textContent= message

}

function newCard() {
 let newCard = getRandomCard()
 sum += newCard
 cards.push(newCard)
  
  rendergame()
  console.log (cards)
  
}