class Card {
  constructor(suit, rank) {
    this.suit = suit; //string
    this.rank = rank; //numeric
  }
  compareTo(card) {
    //returns true if argument is lower
    if (this.rank > card.rank) {
      return true;
    }
    return false;
  }
}

class Deck {
  constructor() {
    this.cards = [];
  }
  createFull() {
    //function to create a full deck of 52  cards
    if (this.cards.length > 0) {
      throw new Error("You can only make a full deck from an empty one!");
    }
    for (let rankPos = 0; rankPos < 13; rankPos++) {
      const newClub = new Card("Club", rankPos + 1);
      const newHeart = new Card("Heart", rankPos + 1);
      const newDiamond = new Card("Diamond", rankPos + 1);
      const newSpade = new Card("Spade", rankPos + 1);

      this.cards.push(newClub);
      this.cards.push(newHeart);
      this.cards.push(newDiamond);
      this.cards.push(newSpade);
    }
  }
  shuffle() {
    //randomizes the deck
    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }
  split(player1, player2) {
    player1.deck = this.cards.slice(0, this.cards.length / 2);
    player2.deck = this.cards.slice(this.cards.length / 2);
  }
}

class Player {
  constructor() {
    this.deck = null;
    this.score = 0;
  }
}

const newDeck = new Deck();
newDeck.createFull();
newDeck.shuffle();
const player1 = new Player();
const player2 = new Player();
newDeck.split(player1, player2);
console.log(player1.deck.length);
console.log(player1.deck);
console.log(player2.deck.length);
console.log(player2.deck);

/*
    Card 
        member : should have a suit (symbol)
        member : should have a rank (number value)
        function : compare two cards by rank then suit [2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A ]13 suits shouldnt be compared [clubs, diamonds, hearts, spades]4
    Deck
        member : array of cards[]
        function : create a new deck
        function : shuffle the deck
        function : split deck into two
    Player 
        member : a deck
        member : a score

    who should be in charge of splitting decks

    HOW THE GAME WORKS
        (deck) shuffle main deck
        split deck into two
        assign half decks to players
        top cards are revealed
        cards are compared
        
        if cards are different
            player with greater rank wins
        if cards are the same
            neither player wins
*/
