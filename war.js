//Deal 26 Cards to two Players from a Deck.
//Iterate through the turns where each Player plays a Card
//The Player who played the higher card is awarded a point
//Ties result in zero points for either Player
//After all cards have been played, display the score.
//Write a Unit Test using Mocha and Chai for at least one of the functions you write.
const suits = ["♠", "♣", "♥", "♦"]
const cardNumbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
const cardNumberValues = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "J": 11,
    "Q": 12,
    "K": 13,
    "A": 14,
}


class Deck {
    constructor(cards = makeDeck()) {
        this.cards = cards;
    }
    get numberOfCards() {
        return this.cards.length;
    }
    shuffle() {
        for (let i = this.numberOfCards - 1; i > 0; i--) {
          const newIndex = Math.floor(Math.random() * (i + 1))
          const oldValue = this.cards[newIndex]
          this.cards[newIndex] = this.cards[i]
          this.cards[i] = oldValue
        }
    }
 } 


class Cards {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
    describe() {
        return `${this.value} of ${this.suit}'s`
    }
} 

//combines suits with card numbers
function makeDeck() {
    return suits.flatMap(suit => {
        return cardNumbers.map(value => {
            return new Cards(suit, value)
        })
    })
}

class Players {
    constructor(name) { 
        this.name = name; // this gets set with a prompt
        this.hand = []; // 1/2 the deck will get pushed to this array
        this.score = 0;
    }
   
    incrementScore() {  
        return this.score++; 
    }

    playCard() {
        return this.hand.pop();
    }
} 



function startGame(){
    const deck = new Deck; 
    deck.shuffle()
    const player1 = new Players(prompt("Player 1 name: "));
    const player2 = new Players(prompt("Player 2 name: "));
    const halfOfDeck = Math.ceil(deck.numberOfCards / 2 );
    player1.hand = deck.cards.slice(0, halfOfDeck);
    player2.hand = deck.cards.slice(halfOfDeck, deck.numberOfCards)
    alert(`${player1.name} vs. ${player2.name}
    Lets start a war!!! Click ok to start the game.`)
    for ( let i = 0; i < 26; i++ ) {
        flipCards(player1, player2);
        console.log(`Current Score - ${player1.name}: ${player1.score} | ${player2.name}: ${player2.score}`);
    }
    
    declareWinner(player1, player2);
} 

function declareWinner(p1, p2) {
    p1.score > p2.score ? console.log(`${p1.name} wins the game! Final Score: ${p1.name}: ${p1.score} | ${p2.name}: ${p2.score}`) : console.log(`${p2.name} wins the game! Final Score: ${p2.name}: ${p2.score} | ${p1.name}: ${p1.score}`)
}

function flipCards(player1, player2){
    
    let card1 = player1.playCard();
    let card2 = player2.playCard();
    let card1ToString = card1.describe();
    let card2ToString = card2.describe();
    console.log(`${player1.name}'s card: ${card1ToString}. ${player2.name}'s Card: ${card2ToString}`)
     if ( card1.value > card2.value ) {
        console.log(`${player1.name} won this round.`)
        player1.incrementScore();
      } else if (card1.value < card2.value) {
        console.log(`${player2.name} won this round.`)
        player2.incrementScore()
      } else {
        console.log("It's a tie.")
      }
      
} 

startGame(); 











