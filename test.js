const expect = chai.expect;

//happy path
describe('Deck function test', function() {
    describe('#makeDeck', function() {
        it('should make a deck of 52 cards.', function(){
           //arrange
            let deck = new Deck;
            //act
            makeDeck();
            //assert
            expect(deck.numberOfCards).to.equal(52);
        })
    })
})