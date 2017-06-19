// this defines how to make a Card object
function Card(suit, rank) {
    this.suit = suit;
    this.rank = rank;
    
    this.toString = function() {
        return this.rank + " of " + this.suit;
    }
}

// this defines how to make a Deck object
function Deck(){
    this.deal = function() {
        return this.deck.pop();
    };
    
    this.dealN = function(n) {
        let out = [];
        for(var i = 0; i < n; i++){
            out.push(this.deck.pop());
        }
        return out;
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
        suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
        ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        for(var s = 0; s < suits.length; s++){
            for(var r = 0; r < ranks.length; r++){
                this.deck.push(new Card(suits[s], ranks[r]));
            }
        }  
    };
    
    this.cards_left = function() {
        return this.deck.length;
    }
    
    this.reset();
}

let myCard = new Card("students", "cannibals");
console.log(myCard, myCard instanceof Card);

let myDeck = new Deck();
console.log(myDeck);
