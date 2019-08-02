const players = [
	{
		id: 1,
		fname: "Kaiden",
		lname: "Hart",
		number: 24
	},
	{
		id: 2,
		fname: "Noah",
		lname: "Travers",
		number: ''
	},
	{
		id: 3,
		fname: "Logan",
		lname: "Pascarella",
		number: ''
	},
	{
		id: 4,
		fname: "Mason",
		lname: "Pavez",
		number: ''
	},
	{
		id: 5,
		fname: "Robert",
		lname: "Quaid",
		number: ''
	},
	{
		id: 6,
		fname: "Liam",
		lname: "Stotts",
		number: ''
	},
	{
		id: 7,
		fname: "Christian",
		lname: "Ibscher",
		number: ''
	},
	{
		id: 8,
		fname: "Aiden",
		lname: "Patel",
		number: ''
	},
];

const playerTable = document.getElementById('player-table');
const headerRow = document.getElementById('header-row');

const toggleColor = () => {
	let el = this.event.target;
	if (el.classList.contains('green')) {
		el.classList.remove('green');
		el.classList.add('red');
		el.innerHTML = 'out'
	} else if (el.classList.contains('red')) {
		el.classList.remove('red');
		el.innerHTML = ''
	} else {
		el.classList.add('green');
		el.innerHTML = 'in'
	}
}

const createBoxes = (el) => {
	for (let i = 1; i <= 18; i++) {
		let box = document.createElement('td');
		box.classList.add('small-box', 'text-center');
		if (el.id === 'header-row') {
			box.innerHTML = i;
		}
		else {
			el.addEventListener('click', toggleColor)
		}
		el.appendChild(box);
	}
}

const createRow = (player) => {
	let newRow = document.createElement('tr');
	let number = document.createElement('td');
	number.classList.add('small-box', 'text-center');
	number.innerHTML = player.number;
	let fname = document.createElement('td');
	fname.classList.add('name-column', 'first-name');
	fname.innerHTML = player.fname;

	newRow.appendChild(number);
	newRow.appendChild(fname);

	createBoxes(newRow);
	playerTable.append(newRow);
}

const displayPlayers = () => {
	players.map(player => {
		createRow(player);
	})
}

displayPlayers();
createBoxes(headerRow);