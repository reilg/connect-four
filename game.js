$(function () {
	var a, b, x, y, current, done, last;
	var player = $('#player');
	var p      = 'red';

	var isMine = function (x, y) {
		return cell(x, y)[0]['className'] === p;
	};

	var hasWon = function (i, j) {

		// horizontal
		for (a = j - 1; 0 < a && isMine(i, a); a--) {}
		for (b = j + 1; 8 > b && isMine(i, b); b++) {}
		if (4 < b - a) {
			return true;
		}

		// vertical
		for (c = i + 1; 7 > c && isMine(c, j); c++) {}
		if (3 < c - i) {
			return true;
		}

		// diagonal - top left to bottom right
		for (a = i - 1, b = j - 1; 0 < a && !(1 > b) && isMine(a, b); a--)
		b--;
		for (c = i + 1, b = j + 1; 7 > c && !(7 < b) && isMine(c, b); c++)
		b++;
		if (4 < c - a) {
			return true;
		}

        // diagonal - top right to bottom left
		for (a = i - 1, b = j + 1; 0 < a && !(7 < b) && isMine(a, b); a--)
		b++;
		for (c = i + 1, b = j - 1; 7 > c && !(1 > b) && isMine(c, b); c++)
		b--;
		if (4 < c - a)
			return true;

		return false;
	};

	// get cell object
	var cell = function (a, b) {
		return $('#cell' + a + b);
	};

	// start
	var start = function () {

		p = last = (!last || last == 'yellow') ? 'red' : 'yellow';
		player[0]['className'] = p;

		$('td').removeClass();
	};

	// fire when user makes a move
	var move = function (row, col, x) {
		x > 0 && (cell(x, col).removeClass());
		cell(x + 1, col).addClass(p);
		x === row - 1
			? hasWon(row, col)
				? confirm(p.charAt(0).toUpperCase() + p.slice(1) + ' has won the game. Play again?')
					&& start()
				: p = (p == 'red') ? 'yellow' : 'red'
			: setTimeout(function () {
				move(row, col, x + 1);
			}, 10);
	};

	$('td').click(function () {

		var col = +$(this).prop('id').replace('cell', '')[1];
		player[0]['className'] = (p == 'red') ? 'yellow' : 'red';

		for( row = 6; row > 0; row--) {
			if (!cell(row, col)[0]['className']) {
				move(row, col, 0, p);
				break;
			}
		}

	});

	$('#new-game').click(function () {
		confirm('Start a new game?') && start();
	});

	start();
});
