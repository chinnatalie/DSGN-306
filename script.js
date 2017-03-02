console.log('This is app is up and running!');

function gobytype() {
	window.location.href="nutrition_type.html";
}
function gobyingredient() {
	window.location.href="ingredient_type.html";
}
function gotopage(url) {
        window.location.href=url;
}
function startblend() {
	console.log('Start blending');
	setTimeout(endblend, 5000);
}
function endblend() {
	alert('Done blending!');
	window.location=href="done.html";
}