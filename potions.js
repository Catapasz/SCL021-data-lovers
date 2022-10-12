import data from './data/harrypotter/data.js';
import { playSound } from './music.js';

document.addEventListener('click', playSound);

const allPotions = data.potions

function defineImage(image) {
    if (image !== undefined) { return image }
    else { return "" }
}

allPotions.forEach((potion) => {
    document.getElementById("potionsDiv").innerHTML +=
        `<div class="allTables"><table><tr><td><strong>Nombre</strong>:${potion.name}</td><br> 
     <tr><td><strong>Descripción</strong>:${potion.description}</tr></td>
     </table>${defineImage(potion.image)}</div>`

});


