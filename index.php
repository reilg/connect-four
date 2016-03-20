<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="styles.css" />
		<title>Connect Four</title>
		<meta charset="utf-8" />
		<meta name="description" content="Basic implementation of a Four in a row game">
	</head>
	<body>
		<div id="game">
			<table>
				<tr>
					<td id="cell11"></td>
					<td id="cell12"></td>
					<td id="cell13"></td>
					<td id="cell14"></td>
					<td id="cell15"></td>
					<td id="cell16"></td>
					<td id="cell17"></td>
				</tr>
				<tr>
					<td id="cell21"></td>
					<td id="cell22"></td>
					<td id="cell23"></td>
					<td id="cell24"></td>
					<td id="cell25"></td>
					<td id="cell26"></td>
					<td id="cell27"></td>
				</tr>
				<tr>
					<td id="cell31"></td>
					<td id="cell32"></td>
					<td id="cell33"></td>
					<td id="cell34"></td>
					<td id="cell35"></td>
					<td id="cell36"></td>
					<td id="cell37"></td>
				</tr>
				<tr>
					<td id="cell41"></td>
					<td id="cell42"></td>
					<td id="cell43"></td>
					<td id="cell44"></td>
					<td id="cell45"></td>
					<td id="cell46"></td>
					<td id="cell47"></td>
				</tr>
				<tr>
					<td id="cell51"></td>
					<td id="cell52"></td>
					<td id="cell53"></td>
					<td id="cell54"></td>
					<td id="cell55"></td>
					<td id="cell56"></td>
					<td id="cell57"></td>
				</tr>
				<tr>
					<td id="cell61"></td>
					<td id="cell62"></td>
					<td id="cell63"></td>
					<td id="cell64"></td>
					<td id="cell65"></td>
					<td id="cell66"></td>
					<td id="cell67"></td>
				</tr>
			</table>
			<div class="menu">
				<button id="new-game">New game</button>
				<span id="playing">Playing: <i id="player"></i></span>
			</div>
		</div>
		<script src="jquery.min.js"></script>
		<script src="game.js"></script>
	</body>
</html>
