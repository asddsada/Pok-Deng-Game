'use strict';

function getPoint(card) {
    let value = card.split('-')[1]
    if (value === 'Ace') { return 1 }
    else if (value === 'King' || value === 'Queen' || value === 'Jack' || value === '10') { return 0 }
    else { return parseInt(value) }
}

function score(drawCards) {
    if (!(Array.isArray(drawCards) && drawCards.length == 4)) { return null}
    // first two for player
    var playerPoint = getPoint(drawCards[0]) + getPoint(drawCards[1])
    // anthoer two for dealer card
    var dealerPoint = getPoint(drawCards[2]) + getPoint(drawCards[3])

    //score
    if (playerPoint > dealerPoint) {
        return 'win'
    } else if (playerPoint == dealerPoint) {
        return 'tie'
    }
    return 'loss'
}

module.exports = score;