/* exercice pride and prejudice*/

let bold = document.getElementById('boldButton');
let color = document.getElementById('colorButton');
let big = document.getElementById('enlargeButton');
let p = document.querySelectorAll('p');


p.forEach((item)=>{
	item.addEventListener('click', function(){
	makeBold(this)
}) 
})




function makeBold(p) {
	p.classList.toggle('boldStyle');
}

function changeColor() {
	document.getElementById("text").classList.toggle('colorStyle');
}

function bigger() {
	document.getElementById("text").classList.toggle('biggerStyle');
}

document.getElementById("boldButton").onclick = function(){
	makeBold(p)
	
}

document.getElementById("colorButton").onclick = function(){
	changeColor()
}

document.getElementById("enlargeButton").onclick = function(){
	bigger()
}

// exercice 3 > refaire l'exercice en mode fonction fléchée 

// let bold = document.getElementById('boldButton');
// let color = document.getElementById('colorButton');
// let big = document.getElementById('enlargeButton');

// bold.onclick = () => {
// 	document.getElementById("text").classList.toggle('boldStyle');
// }

// color.onclick = () => {
// 	document.getElementById("text").classList.toggle('colorStyle');
// }

// big.onclick = () => {
// 	document.getElementById("text").classList.toggle('biggerStyle');
// }