'use strict'

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var play = true
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
  while (play) {
    // place bet
    var bet = await placeBet().catch(error => {
      console.error(error)
    })

    // play
    console.log('play')
    var win = bet

    // update total win
    console.log('update')
    total_win += bet

    // play more ask
    play = await playMoreAsk().catch(error => {
      console.error(error)
    })
  }

  // show total win
  console.log('You got total '+total_win+' chip(s)')
  rl.close()
}

main()