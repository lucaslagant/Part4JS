let btnBold = document.querySelector ('#bold');
let btnColor = document.querySelector ('#color');
let btnZoom = document.querySelector ('#zoom');
let text = document.querySelector ('#text');

btnBold.addEventListener ('click' , () =>text.style.fontWeight='bold');
btnColor.addEventListener ('click' , () =>text.style.color='#800080');
btnZoom.addEventListener ('click' , () =>text.zoom='zoom');