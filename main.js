'use strict'

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const initDeck = require('./lib/initDeck');
const score = require('./lib/score');
const shuffle = require('./lib/shuffle');

var cont = true
var total_win = 0
var deck = []

const placeBet = () => {
  return new Promise((resolve, reject) => {
    rl.question('Please place your bet.\n', (bet) => {
      if (bet.match(/^\d/)) {
        resolve(parseInt(bet))
      } else {
        reject('Invalid input')
      }
    })
  })
}

const playMoreAsk = () => {
  return new Promise((resolve, reject) => {
    rl.question('Wanna play more (Yes/No)?\n', (answer) => {
      answer = answer.toLowerCase()
      if (answer == 'yes' || answer == 'y' || answer == '1') {
        resolve(true)
      } else if (answer == 'no' || answer == 'n' || answer == '0') {
        resolve(false)
      } else {
        reject('Invalid input')
      }
    })
  })
}

const main = async () => {
  deck = initDeck()

  while (cont) {
    // place bet
    var bet = undefined
    while (typeof bet === 'undefined') {
      bet = await placeBet().catch(error => {
        console.error(error)
      })
    }

    // play
    // shuffle
    if (deck.length < 4) { deck = initDeck() }
    deck = shuffle(deck)
    // draw card
    var drawCards = deck.slice(0, 4)
    deck = deck.slice(4)
    console.log(`Your got ${drawCards[0]}, ${drawCards[1]}`)
    console.log(`Dealer got ${drawCards[2]}, ${drawCards[3]}`)
    // scoring 
    var result = score(drawCards)

    if (result == 'win') {
      total_win += bet
      console.log(`You won!!! received ${bet} chips.`)
    } else if (result == 'tie') {
      console.log(`A tie, no chips loss.`)
    } else if (result == 'loss') {
      total_win -= bet
      console.log(`You loss, loss ${bet} chips.`)
    }

    // play more ask
    var contTmp = undefined
    while (typeof contTmp === 'undefined') {
      contTmp = await playMoreAsk().catch(error => {
        console.error(error)
      })
    }
    cont = contTmp
  }

  // show total win
  if (total_win >= 0) {
    console.log(`You got total ${total_win} chip(s).`)
  } else {
    console.log(`You loss total ${total_win * (-1)} chip(s).`)
  }
  rl.close()
}

main()