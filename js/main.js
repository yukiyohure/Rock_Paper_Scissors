const choices = document.querySelectorAll('.choices');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
	player: 0,
	computer: 0
}

//Play game
function play(e) {
	restart.style.display = 'inline-block';
	const playerChoice = e.target.id;
	const computerChoice = getComputerChoice();
	const winner = getWinner(playerChoice, computerChoice);
	showWinner(winner, computerChoice);
}

const getComputerChoice = () => {
	const random = Math.random();
	if (random < 0.34) {
		return 'rock';
	} else if (random <= 0.67) {
		return 'paper';
	} else {
		return 'scissors';
	}
}

const getWinner = (p, c) => {
	if (p === c) {
		return 'draw';
	} else if (p === 'rock') {
		if (c === 'paper') {
			return 'computer';
		} else {
			return 'player';
		}
	} else if (p === 'paper') {
		if (c === 'scissors') {
			return 'computer';
		} else {
			return 'player';
		}
	} else if (p === 'scissors') {
		if (c === 'rocl') {
			return 'computer';
		} else {
			return 'player';
		}
	}
}

const showWinner = (winner, computerChoice) => {
	if (winner === 'player') {
		scoreboard.player++;
		result.innerHTML = `
			<h2 class="text-win">You Win</h2>
			<i class="fas fa-hand-${computerChoice} fa-10x"></i>
			<p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
		`;
	} else if (winner === 'computer') {
		scoreboard.computer++;
		result.innerHTML = `
			<h2 class="text-lose">You Lose</h2>
			<i class="fas fa-hand-${computerChoice} fa-10x"></i>
			<p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
		`;
	} else {
		result.innerHTML = `
			<h2>It's A Draw</h2>
			<i class="fas fa-hand-${computerChoice} fa-10x"></i>
			<p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
		`;
	}
	score.innerHTML = `
		<p>Player:${scoreboard.player}</p>
		<p>Computer:${scoreboard.computer}</p>
	`;
	modal.style.display = 'block';
}

const closeModal = (e) => {
	if (e.target == modal) {
		modal.style.display = 'none';
	}
}

const resetsScore = () => {
	scoreboard.player = 0;
	scoreboard.computer = 0;
	score.innerHTML = `
		<p>Player:${scoreboard.player}</p>
		<p>Computer:${scoreboard.computer}</p>
	`;
}


// 以下悪くはない書き方
// choices.forEach(choice => choice.addEventListener('click', play));
// または
// choices.forEach(function (choice) {
// 	choice.addEventListener('click', play);
// });

// 以下モダンな繰り返し処理の書き方
for(const choice of choices) {
	choice.addEventListener('click', play);
}

window.addEventListener('click', closeModal);
restart.addEventListener('click', resetsScore);

