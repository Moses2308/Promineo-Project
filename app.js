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
    //assigns half of the deck to each player
    player1.deck.cards = this.cards.slice(0, this.cards.length / 2);
    player2.deck.cards = this.cards.slice(this.cards.length / 2);
  }
}

class Player {
  constructor() {
    this.deck = new Deck();
    this.score = 0;
  }
}

const newDeck = new Deck();
newDeck.createFull();
newDeck.shuffle();
const player1 = new Player();
const player2 = new Player();
newDeck.split(player1, player2);

const p1Cards = player1.deck.cards;
const p2Cards = player2.deck.cards;

let counter = 1;
while (p1Cards.length > 0 && p2Cards.length > 0) {
  if (p1Cards[p1Cards.length - 1].compareTo(p2Cards[p2Cards.length - 1])) {
    console.log(`
    Turn ${counter};
    Player One : ${p1Cards[p1Cards.length - 1].suit} - ${
      p1Cards[p1Cards.length - 1].rank
    };
    Player Two : ${p2Cards[p2Cards.length - 1].suit} - ${
      p2Cards[p2Cards.length - 1].rank
    };
    Point awarded to Player One
    `);
    player1.score++;
  } else if (
    p2Cards[p2Cards.length - 1].compareTo(p1Cards[p1Cards.length - 1])
  ) {
    console.log(`
    Turn ${counter};
    Player One : ${p1Cards[p1Cards.length - 1].suit} - ${
      p1Cards[p1Cards.length - 1].rank
    };
    Player Two : ${p2Cards[p2Cards.length - 1].suit} - ${
      p2Cards[p2Cards.length - 1].rank
    };
    Point awarded to Player Two
    `);
    player2.score++;
  } else {
    console.log(`
    Turn ${counter};
    Player One : ${p1Cards[p1Cards.length - 1].suit} - ${
      p1Cards[p1Cards.length - 1].rank
    };
    Player Two : ${p2Cards[p2Cards.length - 1].suit} - ${
      p2Cards[p2Cards.length - 1].rank
    };
    TIE! No points awarded
    `);
  }
  p1Cards.pop();
  p2Cards.pop();
  counter++;
}

if (player1.score > player2.score) {
  console.log(`
  Player one final Score : ${player1.score};
  Player two final Score : ${player2.score};
  PLAYER ONE WINS!
  `);
} else if (player2.score > player1.score) {
  console.log(`
  Player one final Score : ${player1.score};
  Player two final Score : ${player2.score};
  PLAYER TWO WINS!
  `);
} else {
  console.log(`
  Player one final Score : ${player1.score};
  Player two final Score : ${player2.score};
  WE ARE ALL WINNERS!!
  `);
}
