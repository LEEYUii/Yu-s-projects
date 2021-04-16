

var btn = document.getElementById('open_btn');
var div = document.getElementById('background');
var close = document.getElementById('close-button');
var close2 = document.getElementById('foot');

btn.onclick = function show() {
	div.style.display = "block";
}

close.onclick = function close() {
	div.style.display = "none";
}

close2.onclick = function close() {
	div.style.display = "none";
}

window.onclick = function close(e) {
	if (e.target == div) {
		div.style.display = "none";
	}
}
