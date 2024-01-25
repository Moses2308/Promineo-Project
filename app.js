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

/*
    Card 
        member : should have a suit (symbol)
        member : should have a rank (number value)
        function : compare two cards by rank then suit [2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A ] suit doesnt matter 13 ranks [clubs, diamonds, hearts, spades]
    Deck
        member : array of cards[]
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
