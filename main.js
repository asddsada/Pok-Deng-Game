'use strict'

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const play = require('./lib/play');

var cont = true
var total_win = 0

const placeBet = () => {
  return new Promise((resolve, reject) => {
    rl.question('Please place your bet.\n', (bet) => {
      if (bet.match(/^\d/)){
        resolve(parseInt(bet))
      }else{
        reject('Invalid input')
      }
    })
  })
}

const playMoreAsk = () => {
  return new Promise((resolve, reject) => {
    rl.question('Wanna play more (Yes/No)?\n', (answer) => {
      answer = answer.toLowerCase()
      if (answer=='yes' || answer=='y'|| answer=='1'){
        resolve(true)
      }else if (answer=='no' || answer=='n'|| answer=='0'){
        resolve(false)
      }else{
        reject('Invalid input')
      }
    })
  })
}

const main = async () => {
  while (cont) {
    // place bet
    var bet = await placeBet().catch(error => {
      console.error(error)
    })

    // play
    var result = play()
    if(result=='win'){
      total_win += bet
      console.log(`You won!!! received ${bet} chips.`)
    }else if(result=='tie'){
      console.log(`A tie, no chips loss.`)
    }else if(result=='loss'){
      total_win -= bet
      console.log(`You loss, loss ${bet} chips.`)
    }

    // play more ask
    cont = await playMoreAsk().catch(error => {
      console.error(error)
    })
  }

  // show total win
  if(total_win>=0){
    console.log(`You got total ${total_win} chip(s).`)
  }else{
    console.log(`You loss total ${total_win*(-1)} chip(s).`)
  }
  rl.close()
}

main()