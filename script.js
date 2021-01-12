const BLANK = 0;
const WALL = 1;
const START = 2;
const END = 3;
const ROUTE = 8;
const VISITED = 9;

// let data = [];
let data = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1],
	[1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1],
	[1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1],
	[1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1],
	[1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1],
	[1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1],
	[1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1],
	[1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1],
	[1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1],
	[1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1],
	[1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1],
	[1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1],
	[1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1],
	[1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1],
	[1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1],
	[1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1],
	[1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1],
	[1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,3],
	[1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1],
	[1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1],
	[2,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1],
	[1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1],
	[1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1],
	[1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1],
	[1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1],
	[1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1],
	[1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1],
	[1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1],
	[1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1],
	[1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1],
	[1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1],
	[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

// User defined class
// to store element and its priority
class QElement {

	element;

	constructor(element, priority) {
		this.element = element;
		this.priority = priority;
	}
}

// PriorityQueue class
class PriorityQueue {

	// An array is used to implement priority
	constructor() {
		this.items = [];
	}

	search(priority) {
		let lo = 0;
		let hi = this.items.length - 1;
		while (lo <= hi) {
			let mid = Math.floor((lo + hi) / 2);
			if (this.items[mid].priority > priority) {
				hi = mid - 1;
			} else {
				lo = mid + 1;
			}
		}
		return lo;
	}

	// enqueue function to add element to the queue as per priority
	enqueue(element, priority) {
		// creating object from queue element
		let qElement = new QElement(element, priority);
		let idx = this.search(priority);
		this.items.splice(idx, 0, qElement);
	}

	// dequeue method to remove element from the queue
	// return the dequeued element and remove it. if the queue is empty returns Underflow
	dequeue() {
		if (this.isEmpty()) {
			throw new Error('Queue is empty');
		}
		return this.items.shift().element;
	}

	// return true if the queue is empty.
	isEmpty() {
		return this.items.length === 0;
	}
}

class Cell {
	
	row;
	col;
	type;
	
	constructor(row, col, type) {
		this.row = row;
		this.col = col;
		this.type = type;
	}
	
	update(type) {
		this.type = type;
		this.draw();
	}

	write(text) {
		if (text) {
			let board = document.getElementById('board');
			if (board && board.getContext) {
				let ctx = board.getContext('2d');
				let w = board.width / data[0].length;
				let h = board.height / data.length;

				let x = w * this.col;
				let y = h * this.row;

				let fontSize = Math.floor(h / 3);
				ctx.font = `bold ${fontSize}px serif`;
				ctx.fillStyle = "orange";
				ctx.fillText(text, x + 5, y + fontSize + 5);
			}
		}
	}

	draw(text) {
		let board = document.getElementById('board');
		if (board && board.getContext) {
			let w = board.width / data[0].length;
			let h = board.height / data.length;
			let ctx = board.getContext('2d');
			
			let x = w * this.col;
			let y = h * this.row;
			// border
			ctx.fillStyle = "grey";
			ctx.fillRect(x, y, w, h);
			// cell
			switch (this.type) {
				case BLANK:
					ctx.fillStyle = "white";
					break;
				case WALL:
					ctx.fillStyle = "black";
					break;
				case START:
					ctx.fillStyle = "yellow";
					break;
				case END:
					ctx.fillStyle = "red";
					break;
				case ROUTE:
					ctx.fillStyle = "green";
					break;
				case VISITED:
					ctx.fillStyle = "blue";
					break;
				default:
					ctx.fillStyle = "white";
			}
			ctx.fillRect(x + 1, y + 1, w - 1, h - 1);

			this.write(text);
		}
	}
}

function addOnClickListenerNoScaling() {
	let board = document.getElementById('board');
	board.width = board.clientWidth;
	board.height = board.clientHeight;

	let boardLeft = board.offsetLeft + board.clientLeft;
	let boardTop = board.offsetTop + board.clientTop;

	board.addEventListener('mousemove', function(event) {
		if (event.ctrlKey) {
			let x = event.pageX - boardLeft;
			let y = event.pageY - boardTop;

			// console.log(`x: ${x} y: ${y}`);
			// let sx = Math.floor(x / wScale);
			// let sy = Math.floor(y / hScale);
			// console.log(`Scaled x: ${sx} y: ${sy}`);

			let col = Math.trunc(x / (board.width / data[0].length));
			let row = Math.trunc(y / (board.height / data.length));
			// console.log(`Row: ${row}, Col: ${col}`);

			let t = Number(document.querySelector("input[name='cellType']:checked").value);
			// console.log(`Type is ${t}`);
			data[row][col] = t;
			new Cell(row, col, t).draw();
		}
	}, false);
}

function addOnClickListener() {
	let board = document.getElementById('board');
	let boardLeft = board.offsetLeft + board.clientLeft;
    let boardTop = board.offsetTop + board.clientTop;

	let wScale = board.clientWidth / board.width;
	let hScale = board.clientHeight / board.height;
	// console.log(`Width scale: ${wScale}`);
	// console.log(`Height scale: ${hScale}`);
	
	board.addEventListener('mousemove', function(event) {
		if (event.ctrlKey) {
			let x = event.pageX - boardLeft;
			let y = event.pageY - boardTop;

			// console.log(`x: ${x} y: ${y}`);
			let sx = Math.floor(x / wScale);
			let sy = Math.floor(y / hScale);
			// console.log(`Scaled x: ${sx} y: ${sy}`);

			let col = Math.trunc(sx / (board.width / data[0].length));
			let row = Math.trunc(sy / (board.height / data.length));
			// console.log(`Row: ${row}, Col: ${col}`);

			let t = Number(document.querySelector("input[name='cellType']:checked").value);
			// console.log(`Type is ${t}`);
			data[row][col] = t;
			new Cell(row, col, t).draw();
		}
	}, false);
}

function init(height, width) {
	console.log(`Init board with width: ${width} and height: ${height}`);
	data = new Array(height);

	for (let i = 0; i < data.length; i++) {
		data[i] = new Array(width);
		for (let j = 0; j < data[i].length; j++) {
			data[i][j] = BLANK;
		}
	}
	drawBoard();
}

function drawBoard() {
	for (let i = 0; i < data.length; i++) {
		for (let j = 0; j < data[i].length; j++) {
			new Cell(i, j, data[i][j]).draw();
		}
	}
}

function applyInit() {
	let height = Number(document.getElementById("board_height").value);
	let width = Number(document.getElementById("board_width").value);
	if (width > 50 || width < 1 || height > 50 || height < 1) {
		alert(`Invalid range. Width: ${width} and Height: ${height} combination is unsupported!`);
		return false;
	}
	init(height, width);
	return true;
}

function solve() {
	for (let i = 0; i < data.length; i++) {
		for (let j = 0; j < data[i].length; j++) {
			if (data[i][j] === START) {
				console.log(`Starting route from [${i},${j}]`)
				dfs(i, j).then(result => {
					console.log(`Found solution: ${result}`);
				});
				break;
			}
		}
	}
}

function shuffle(array) {
	let currentIndex = array.length;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		let randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		let temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}

function nextSteps(x, y) {
	let allowDiagonal = document.getElementById('allowDiagonal').checked;
	let next = [];
	for (let i = -1; i < 2; i++) {
		for (let j = -1; j < 2; j++) {
			if ((i === 0 && j === 0) || (!allowDiagonal && Math.abs(i) === Math.abs(j))) {
				continue;
			}
			next.push({"x": x + i, "y": y + j});
		}
	}
	return next;
}

async function dfs(i, j) {
	if (i >= 0 && i < data.length && j >= 0 && j < data[i].length) {

		if (data[i][j] === END) {
			// data[i][j] = ROUTE;
			// new Cell(i, j, ROUTE).draw();
			return true;
		}

		if (data[i][j] === BLANK || data[i][j] === START) {

			await sleep();

			if (data[i][j] !== START) {
				data[i][j] = VISITED;
				new Cell(i, j, VISITED).draw();
			}

			let next = nextSteps(i, j);
			shuffle(next); // pick a way randomly

			for (let idx in next) {
				let point = next[idx];
				let res = await dfs(point.x, point.y);
				if (res) {
					return true;
				}
			}

			if (data[i][j] !== START) {
				// await sleep();
				data[i][j] = ROUTE;
				new Cell(i, j, ROUTE).draw();
			}
			return false;
		}
	}
	return false;
}

async function bestFirstSearch() {
	let start = {};
	let end = {};
	for (let i = 0; i < data.length; i++) {
		for (let j = 0; j < data[i].length; j++) {

			if (start.x && end.x) {
				// found both
				break;
			}

			if (data[i][j] === START) {
				console.log(`Starting route from [${i},${j}]`)
				start.x = i;
				start.y = j;
			}
			// todo handle more than one end
			if (data[i][j] === END) {
				console.log(`End is [${i},${j}]`)
				end.x = i;
				end.y = j;
			}
		}
	}

	let queue = new PriorityQueue();
	queue.enqueue({"x": start.x, "y": start.y, "prev": null, "priority": 0}, 0);

	while (!queue.isEmpty()) {

		let p = queue.dequeue();
		console.log(`Processing point [${p.x},${p.y}] (dist: ${p.priority})`);
		if (data[p.x][p.y] === ROUTE) {
			console.log("Skipping already processed point");
			continue;
		}

		if (data[p.x][p.y] === END) {
			console.log("Best-First Search - solution found!");

			// restore the exact path taken
			p = p.prev;
			while (p.prev != null) {
				data[p.x][p.y] = VISITED;
				new Cell(p.x, p.y, VISITED).draw(p.priority);
				p = p.prev;
			}

			return;
		}

		await sleep();

		if (data[p.x][p.y] !== START) {
			data[p.x][p.y] = ROUTE;
			new Cell(p.x, p.y, ROUTE).draw(p.priority);
		}

		let next = nextSteps(p.x, p.y);

		for (let idx in next) {
			let item = next[idx];
			if (isValidSpace(item.x, item.y)) {
				let dist = distance(item.x, item.y, end);
				new Cell(item.x, item.y, data[item.x][item.y]).draw(dist);
				queue.enqueue({"x": item.x, "y": item.y, "prev": p, "priority": dist}, dist);
			}
		}
	}
}

async function sleep() {
	let timeout = Number(document.getElementById('sleep').value);
	await new Promise(r => setTimeout(r, timeout));
}

async function aStarSearch() {
	let start = {};
	let end = {};
	for (let i = 0; i < data.length; i++) {
		for (let j = 0; j < data[i].length; j++) {

			if (start.x && end.x) {
				// found both
				break;
			}

			if (data[i][j] === START) {
				console.log(`Starting route from [${i},${j}]`)
				start.x = i;
				start.y = j;
			}
			// todo handle more than one end
			if (data[i][j] === END) {
				console.log(`End is [${i},${j}]`)
				end.x = i;
				end.y = j;
			}
		}
	}

	// store step number which will be used for heuristics
	let stepData = new Array(data.length);
	for (let i = 0; i < stepData.length; i++) {
		stepData[i] = new Array(data[0].length);
		for (let j = 0; j < stepData[i].length; j++) {
			stepData[i][j] = data.length + data[0].length;
		}
	}


	let queue = new PriorityQueue();
	queue.enqueue({"x": start.x, "y": start.y, "prev": null, "priority": 0, "step": 0}, 0);
	stepData[start.x][start.y] = 0;

	while (!queue.isEmpty()) {
		let p = queue.dequeue();
		console.log(`Processing point [${p.x},${p.y}] (dist: ${p.priority})`);
		if (data[p.x][p.y] === ROUTE) {
			console.log("Skipping already processed point");
			continue;
		}

		if (data[p.x][p.y] === END) {
			console.log("Best-First Search - solution found!");

			// restore the exact path taken
			p = p.prev;
			while (p.prev != null) {
				data[p.x][p.y] = VISITED;
				new Cell(p.x, p.y, VISITED).draw(`[${p.priority}]+${p.step}`);
				p = p.prev;
			}

			return;
		}

		await sleep();

		if (data[p.x][p.y] !== START) {
			data[p.x][p.y] = ROUTE;
			let stepN = Math.min(stepData[p.x][p.y], p.step);
			new Cell(p.x, p.y, ROUTE).draw(`[${p.priority}]+${stepN}`);
		}

		let next = nextSteps(p.x, p.y);

		for (let idx in next) {
			let item = next[idx];
			if (isValidSpace(item.x, item.y)) {
				let dist = distance(item.x, item.y, end);
				let stepN = Math.min(stepData[item.x][item.y], p.step + 1);
				stepData[item.x][item.y] = stepN;
				new Cell(item.x, item.y, data[item.x][item.y]).draw(`[${dist}]+${stepN}`);
				queue.enqueue({"x": item.x, "y": item.y, "prev": p, "priority": dist, "step": stepN}, dist + stepN);
			}
		}
	}
}

function distance(i, j, end) {
	return Math.abs(end.x - i) + Math.abs(end.y - j);
}

async function bfs() {
	// start point
	let x = 0;
	let y = 0;
	for (let i = 0; i < data.length; i++) {
		for (let j = 0; j < data[i].length; j++) {
			if (data[i][j] === START) {
				console.log(`Starting route from [${i},${j}]`)
				x = i;
				y = j;
				break;
			}
		}
	}

	let queue = [];
	queue.push({"x": x, "y": y, "prev": null});

	while (queue.length > 0) {

		await sleep();

		let size = queue.length;
		for (let i = 0; i < size; i++) {
			let p = queue.shift();
			console.log(`Procesing point [${p.x},${p.y}]`)
			if (data[p.x][p.y] === ROUTE) {
				console.log("Already processed - skipping")
				continue;
			}

			if (data[p.x][p.y] === END) {
				console.log("BFS - shortest solution found!");

				// restore the exact path taken
				p = p.prev;
				let num = 1;
				while (p.prev != null) {
					data[p.x][p.y] = VISITED;
					new Cell(p.x, p.y, VISITED).draw(num++);
					p = p.prev;
				}

				return;
			}

			if (data[p.x][p.y] !== START) {
				data[p.x][p.y] = ROUTE;
				new Cell(p.x, p.y, ROUTE).draw();
			}

			let next = nextSteps(p.x, p.y);
			for (let idx in next) {
				let item = next[idx];
				if (isValidSpace(item.x, item.y)) {
					queue.push({"x": item.x, "y": item.y, "prev": p});
				}
			}
		}
	}
}

function isValidSpace(x, y) {
	return x >= 0 && x < data.length && y >= 0 && y < data[x].length
		&& (data[x][y] === BLANK || data[x][y] === END);
}

function cleanup() {
	for (let i = 0; i < data.length; i++) {
		for (let j = 0; j < data[i].length; j++) {
			switch (data[i][j]) {
				case BLANK:
				case WALL:
				case START:
				case END:
					// leave as is
					break;
				default:
					data[i][j] = BLANK;
			}
		}
	}
	drawBoard();
}

function showTimeout() {
	let timeout = Number(document.getElementById('sleep').value);
	document.querySelector('label[for="sleep"]').innerHTML = `Sleep (ms): ${timeout}`;
}

function stats() {
	let total = data.length * data[0].length;
	console.log(`Total cells: ${total}`);
	let wall = 0;
	let blank = 0;
	let route = 0;
	let visited = 0;
	for (let i = 0; i < data.length; i++) {
		for (let j = 0; j < data[i].length; j++) {
			switch (data[i][j]) {
				case BLANK:
					blank++;
					break;
				case WALL:
					wall++;
					break;
				case ROUTE:
					route++;
					break;
				case VISITED:
					visited++;
					break;
				case START:
				case END:
					break;
			}
		}
	}
	console.log(`Route: ${visited} (${Math.floor(visited * 100 / total)}%)`);
	console.log(`Wall: ${wall} (${Math.floor(wall * 100 / total)}%)`);
	console.log(`Visited: ${route + visited} (${Math.floor((route + visited) * 100 / (total - wall))}% of possible cells)`);
	console.log(`Blank: ${blank} (${Math.floor(blank * 100 / total)}%)`);

	document.getElementById('stats').innerText = `
Stats:
Route: ${visited} (${Math.floor(visited * 100 / total)}%)
Wall: ${wall} (${Math.floor(wall * 100 / total)}%)
Visited: ${route + visited} (${Math.floor((route + visited) * 100 / (total - wall))}% of possible cells)
Overhead: ${route} (visited - route)
Blank: ${blank} (${Math.floor(blank * 100 / total)}%)`;
}

window.onload = function() {
	// addOnClickListener();
	addOnClickListenerNoScaling();

	if (data.length === 0) {
		init(15, 20);
	} else {
		drawBoard();
	}

	document.getElementById('run_dfs').addEventListener('click', solve, false);
	document.getElementById('run_bfs').addEventListener('click', bfs, false);
	document.getElementById('run_best').addEventListener('click', bestFirstSearch, false);
	document.getElementById('run_a_search').addEventListener('click', aStarSearch, false);

	document.getElementById('save').addEventListener('click', function(event) {
		window.localStorage.setItem('board', JSON.stringify(data));
		alert("Saved");
	}, false);

	document.getElementById('load').addEventListener('click', function(event) {
		let item = window.localStorage.getItem('board');
		if (item) {
			data = JSON.parse(window.localStorage.getItem('board'));
			drawBoard();
			return true;
		}
		alert('No previously saved data found!');
		return false;
	}, false);

	document.getElementById('init').addEventListener('click', applyInit, false);
	document.getElementById('cleanup').addEventListener('click', cleanup, false);

	showTimeout();
	document.getElementById('sleep').addEventListener('change', showTimeout, false);

	setInterval(stats, 1000);
}