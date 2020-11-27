'use strict';
const math = require('mathjs');

const CARD_SCORE = [1,2,3,4,5,6,7,8,9,0,0,0]

function play(){
    //shuffle
    var draw_CARD_SCORE = []
    for(var i=0;i<4;i++){
       draw_CARD_SCORE.push(CARD_SCORE[math.randomInt(0, CARD_SCORE.length)])
    }     

    //player score
    var player_score = draw_CARD_SCORE[0]+draw_CARD_SCORE[1]
    //dealer score
    var dealer_score = draw_CARD_SCORE[2]+draw_CARD_SCORE[3]
    
    //result
    console.log(`Your score: ${player_score}`)
    console.log(`Dealer score: ${dealer_score}`)
    if(player_score>dealer_score){
        return 'win'
    }else if(player_score==dealer_score){
        return 'tie'
    }
    return 'loss'
}

module.exports = play;