const obj = {
    wins : 0,
    lose : 0,
    tied : 0
}
document.querySelector('.inform-result').innerHTML=`${output}`;
document.querySelector('.show-result').innerHTML=`you picked ${playerSelection} : computer picked ${computerTurn}`;
document.querySelector('.score-view').innerHTML=`wins:${obj.wins} , lose:${obj.lose} , tied:${obj.tied}`;
function computerMove() {
    let randomNumber= Math.random();
    let computerTurn='';
    if (randomNumber>=0 && randomNumber<=(1/3)) {
        computerTurn='rock'
    } else if  (randomNumber>=(1/3) && randomNumber<=(2/3)) {
        computerTurn='paper';
    } else {
        computerTurn='scissor';
    }
    return computerTurn;
}
function playerTurn(playerSelection) {
    let computerTurn = computerMove();
    let output='';
    if (playerSelection === 'rock') {
        if (computerTurn === 'rock') {
            output='tied';
        } else if (computerTurn === 'paper') {
            output='lost';
        } else {
            output='won';
        }
    }else if (playerSelection === 'paper') {
        if (computerTurn === 'rock') {
            output='won';
        } else if (computerTurn === 'paper') {
            output='tied';
        } else {
            output='lost';
        }
    } else if (playerSelection === 'scissor') {
        if (computerTurn === 'rock') {
            output='lost';
        } else if (computerTurn === 'paper') {
            output='won';
        } else {
            output='tied';
        }
    }
    if (output === 'won') {
        obj.wins += 1;
    }else if (output === 'lost') {
        obj.lose += 1; 
    }else if (output === 'tied') {
        obj.tied += 1;
    }
    document.querySelector('.inform-result').innerHTML=`${output}`;
    document.querySelector('.show-result').innerHTML=`you picked ${playerSelection} : computer picked ${computerTurn}`;
    document.querySelector('.score-view').innerHTML=`wons:${obj.wins} , lose:${obj.lose} , tied:${obj.tied}`;
    
    return output;
}