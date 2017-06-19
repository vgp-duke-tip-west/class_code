// this defines how to make a Card object
function Card(suit, rank) {
    this.suit = suit;
    this.rank = rank;
}

// this defines how to make a Deck object
function Deck(){
    
    
    this.deal = function() {
        return this.deck.pop();
    };
    
    // This is the shuffle function from Rosetta Code: http://rosettacode.org/wiki/Playing_cards#JavaScript
    this.shuffle = function () {
        for (var i = 0; i < this.deck.length; i++){
            let j = parseInt(this.deck.length * Math.random());
            this.deck[i] = this.deck.splice(j, 1, this.deck[i])[0];
        }
    };
    
    this.reset = function() {
        this.deck = [];
        suits = ['clubs', 'diamonds', 'hearts', 'spades'];
        ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        for(var s = 0; s < suits.length; s++){
            for(var r = 0; r < ranks.length; r++){
                this.deck.push(new Card(suits[s], ranks[r]));
            }
        }  
    };
    
    this.reset();
}

let myCard = new Card("students", "cannibals");
console.log(myCard, myCard instanceof Card);

let myDeck = new Deck();
console.log(myDeck);
