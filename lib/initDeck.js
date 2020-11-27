function initDeck() {
    var deck = []
    let FACES = ['Clubs', 'Diamons', 'Hearts', 'Spades']
    let VALUES = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']
    for (var i = 0; i < FACES.length; i++) {
        for (var j = 0; j < VALUES.length; j++) {
            deck.push(`${FACES[i]}-${VALUES[j]}`)
        }
    }
    return deck
}

module.exports = initDeck;