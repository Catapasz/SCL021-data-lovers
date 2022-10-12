import data from './data/harrypotter/data.js';
import { playSound } from './music.js';

document.addEventListener('click', playSound);

const allCuriositys = data.funFacts

allCuriositys.forEach((cusiosity) => {    
    document.getElementById("curiosityDiv").innerHTML+=
    `<table class="curiosityTable"><tr><td><strong>Nombre</strong>:${cusiosity.name}</td><br> 
     <tr><td><strong>Contenido</strong>:${cusiosity.content}</tr></td>
     </table>`
   
  });