// var scores,roundscore,activePlayer,gamePlaying;

// init();

// //document.querySelector('#current-'+activePlayer).textContent=dice;
// //document.querySelector('#current-'+activePlayer).innerHTML='<em>' +dice+ '</em>';

// //var x=document.querySelector('#score-0').textContent;
// //console.log(x);

// //change css of elements by querySelector
// //document.querySelector('.dice').style.display='none';

// //when roll dice button is hit then
// document.querySelector('.btn-roll').addEventListener('click',function () {
// 	if (gamePlaying)
// 	{
// 		//1.random number
// 	 var dice=Math.floor(Math.random() *6) +1;

// 	 //2.display the result
// 	 var diceDOM=document.querySelector('.dice');
// 	 diceDOM.style.display='block';
// 	 diceDOM.src='dice-'+dice+'.png.png';

// 	 //update the round score if the round number was not a 1
// 	 if (dice!==1){
// 	 				//add score
// 	 				roundScore+=dice;
// 	 				document.querySelector('#current-'+activePlayer).textContent=roundScore;
// 	               }else{
// 	               		// next player
// 	               		nextPlayer();
// 	                    }
// 	}

// });

// document.querySelector('.btn-hold').addEventListener('click',function(){
// 	if (gamePlaying) {
// 		//add CURRENT score to GLOBAL score
//  	scores[activePlayer]+=roundScore;

//  	//update the UI
//  	document.querySelector('#score-' +activePlayer).textContent=scores[activePlayer];

//  	//check if player wins the game
//  	if(scores[activePlayer]>=20){
//  		document.querySelector('#name-'+ activePlayer).textContent='winner!';
//  		document.querySelector('.dice').style.display='none';
//  		document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
//  		document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
//  		gamePlaying=false;

//  	}else{
//  		//Next player
//  	nextPlayer();
//  	}
// 	}

// });
//  function nextPlayer()
//  {
//  	//next player
//  	activePlayer===0? activePlayer=1:activePlayer=0;
// 	roundScore=0;
// 	//so if 1 came so reset the current score to 0
//     document.getElementById('current-0').textContent='0';
//     document.getElementById('current-1').textContent='0';

//     //now also make that player as an active player
//    //by using active class
//    //document.querySelector('.player-0-panel').classList.remove('active');
//    //document.querySelector('.player-1-panel').classList.add('active');
//    document.querySelector('.player-0-panel').classList.toggle('active');
//    document.querySelector('.player-1-panel').classList.toggle('active');

//    //now when changing player set dice to hide
//    document.querySelector('.dice').style.display='none';
//  }

//  document.querySelector('.btn-new').addEventListener('click',init);

//  	function init() {
//  	scores=[0,0];
// 	roundScore=0;
// 	activePlayer=0;
// 	gamePlaying=true;

// 	document.querySelector('.dice').style.display='none';
// 	//now initially i want to set all the current and global score to 0
// 	 //by using an get element by method
// 	 document.getElementById('score-0').textContent='0';
// 	 document.getElementById('score-1').textContent='0';
// 	 document.getElementById('current-0').textContent='0';
// 	 document.getElementById('current-1').textContent='0';
// 	 document.getElementById('name-0').textContent='player 1';
// 	 document.getElementById('name-1').textContent='player 2';
// 	 document.querySelector('.player-0-panel').classList.remove('winner');
// 	 document.querySelector('.player-1-panel').classList.remove('winner');
// 	 document.querySelector('.player-0-panel').classList.remove('active');
// 	 document.querySelector('.player-1-panel').classList.remove('active');
// 	 document.querySelector('.player-0-panel').classList.add('active');

//  	}
//-------------------------------------------------------------------------------------

/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

// var scores, roundScore, activePlayer, gamePlaying;

// init();

// document.querySelector('.btn-roll').addEventListener('click', function () {
//   if (gamePlaying) {
//     // 1. Random number
//     var dice = Math.floor(Math.random() * 6) + 1;

//     //2. Display the result
//     var diceDOM = document.querySelector('.dice');
//     diceDOM.style.display = 'block';
//     diceDOM.src = 'dice-' + dice + '.png';

//     //3. Update the round score IF the rolled number was NOT a 1
//     if (dice !== 1) {
//       //Add score
//       roundScore += dice;
//       document.querySelector(
//         '#current-' + activePlayer
//       ).textContent = roundScore;
//     } else {
//       //Next player
//       nextPlayer();
//     }
//   }
// });

// document.querySelector('.btn-hold').addEventListener('click', function () {
//   if (gamePlaying) {
//     // Add CURRENT score to GLOBAL score
//     scores[activePlayer] += roundScore;

//     // Update the UI
//     document.querySelector('#score-' + activePlayer).textContent =
//       scores[activePlayer];

//     // Check if player won the game
//     if (scores[activePlayer] >= 100) {
//       document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
//       document.querySelector('.dice').style.display = 'none';
//       document
//         .querySelector('.player-' + activePlayer + '-panel')
//         .classList.add('winner');
//       document
//         .querySelector('.player-' + activePlayer + '-panel')
//         .classList.remove('active');
//       gamePlaying = false;
//     } else {
//       //Next player
//       nextPlayer();
//     }
//   }
// });

// function nextPlayer() {
//   //Next player
//   activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
//   roundScore = 0;

//   document.getElementById('current-0').textContent = '0';
//   document.getElementById('current-1').textContent = '0';

//   document.querySelector('.player-0-panel').classList.toggle('active');
//   document.querySelector('.player-1-panel').classList.toggle('active');

//   //document.querySelector('.player-0-panel').classList.remove('active');
//   //document.querySelector('.player-1-panel').classList.add('active');

//   document.querySelector('.dice').style.display = 'none';
// }

// document.querySelector('.btn-new').addEventListener('click', init);

// function init() {
//   scores = [0, 0];
//   activePlayer = 0;
//   roundScore = 0;
//   gamePlaying = true;

//   document.querySelector('.dice').style.display = 'none';

//   document.getElementById('score-0').textContent = '0';
//   document.getElementById('score-1').textContent = '0';
//   document.getElementById('current-0').textContent = '0';
//   document.getElementById('current-1').textContent = '0';
//   document.getElementById('name-0').textContent = 'Player 1';
//   document.getElementById('name-1').textContent = 'Player 2';
//   document.querySelector('.player-0-panel').classList.remove('winner');
//   document.querySelector('.player-1-panel').classList.remove('winner');
//   document.querySelector('.player-0-panel').classList.remove('active');
//   document.querySelector('.player-1-panel').classList.remove('active');
//   document.querySelector('.player-0-panel').classList.add('active');
// }

// //document.querySelector('#current-' + activePlayer).textContent = dice;
// //document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// //var x = document.querySelector('#score-0').textContent;

// /*
// YOUR 3 CHALLENGES
// Change the game to follow these rules:
// 1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
// 2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
// 3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
// */

var scores, roundScore, activePlayer,gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click',function(){

		if(gamePlaying)
	{
			//1.random number 
	var dice = Math.floor(Math.random() * 6) + 1;

	//2.Display the result
	var diceDOM = document.querySelector('.dice');
	diceDOM.style.display ='block';
	diceDOM.src ='dice-' +dice +'.png';

	//3.update the round score if the rolled number was not a 1
	if(dice !==1)
	{
		//add score
		roundScore += dice;
		document.querySelector('#current-' +activePlayer).textContent =roundScore;
    }   else
       {
       	   //next player
       	   nextPlayer();

       }

	}
});

document.querySelector('.btn-hold').addEventListener('click',function(){
	if (gamePlaying) 
{
	//add CURRENT score to GLOBAL score
	scores[activePlayer] += roundScore;

	//update the UI

	document.querySelector('#score-' +activePlayer).textContent = scores[activePlayer];
	//check if the player won the game
	if (scores[activePlayer] >= 20)
	 {
		document.querySelector('#name-' + activePlayer).textContent = 'winner!';
		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
		gamePlaying = false;
	}else
	{

	 //Next player 
	 nextPlayer();
	}
}
	

});


function nextPlayer(){
	//next player 
		   activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
       	   roundScore = 0;

       	   document.getElementById('current-0').textContent = '0';
       	   document.getElementById('current-1').textContent = '0';

       	   document.querySelector('.player-0-panel').classList.toggle('active');
       	   document.querySelector('.player-1-panel').classList.toggle('active');

       	   document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click',init);

function init() {
	scores = [0,0];
	activePlayer = 0;
	roundscore = 0;
	gamePlaying = true;

document.querySelector('.dice').style.display= 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.getElementById('name-0').textContent = 'player 1';
document.getElementById('name-1').textContent = 'player 2';

//removing the winner class from both after winning the game
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');

//also after winning remove the active class from both 
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');

//after winning or new game we want the first player to be active so we make it active
document.querySelector('.player-0-panel').classList.add('active');

}