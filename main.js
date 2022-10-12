import { filterData } from './data.js';
import data from './data/harrypotter/data.js';
import { playSound } from './music.js';

document.addEventListener('click', playSound);

const allCharacters = data.characters

function defineImage(image) {
  if (image !== undefined) { return image }
  else { return "" }
}


let divT = document.getElementById("charactersTable")
//Guardo en una variable los datos de los personajes, filtro por la casa y los creo en tabla
let characters = filterData(allCharacters, "Gryffindor")
document.getElementById("gryffindor").addEventListener("click", function () {
  divT.innerHTML = ""
  characters.forEach((character) => {

    return document.getElementById("charactersTable").innerHTML +=
      `<div class="allTables"><table><tr><td><strong>Nombre</strong>:${character.name}</td><br> 
    <tr><td><strong>Nacimiento</strong>:${character.birth}</tr></td>
    <tr><td><strong>Muerte</strong>:${character.death}</td></tr>
     <tr><td><strong>Especie</strong>:${character.species}</td></tr>
      <tr><td><strong>Ancestro</strong>:${character.ancestry}</td></tr>
      <tr><td><strong>Genero</strong>:${character.gender}</td></tr>
      <tr><td><strong>Color de Pelo</strong>:${character.hair_color}</td></tr>
      <tr><td><strong>Color de Ojos</strong>:${character.eye_color}</td></tr>
     <tr><td><strong>Varita</strong>:${character.wand}</td></tr>
     <tr><td><strong>Patronus</strong>:${character.patronus}</td></tr>
     <tr><td><strong>Casa</strong>:${character.house}</td></tr>
     <tr><td><strong>Grupo Asociado</strong>:${character.associated_groups}</td></tr>
     <tr><td><strong>Aparicion en Libros</strong>:${character.books_featured_in}</td></tr></table>
     ${defineImage(character.image)} </div>`
  })
});

let characters2 = filterData(allCharacters, "Slytherin")
document.getElementById("slythering").addEventListener("click", function () {
  divT.innerHTML = ""
  characters2.forEach((character) => {
    return document.getElementById("charactersTable").innerHTML +=
      `<div class="allTables"><table><tr><td><strong>Nombre</strong>:${character.name}</td><br> 
    <tr><td><strong>Nacimiento</strong>:${character.birth}</tr></td>
    <tr><td><strong>Muerte</strong>:${character.death}</td></tr>
     <tr><td><strong>Especie</strong>:${character.species}</td></tr>
      <tr><td><strong>Ancestro</strong>:${character.ancestry}</td></tr>
      <tr><td><strong>Genero</strong>:${character.gender}</td></tr>
      <tr><td><strong>Color de Pelo</strong>:${character.hair_color}</td></tr>
      <tr><td><strong>Color de Ojos</strong>:${character.eye_color}</td></tr>
     <tr><td><strong>Varita</strong>:${character.wand}</td></tr>
     <tr><td><strong>Patronus</strong>:${character.patronus}</td></tr>
     <tr><td><strong>Casa</strong>:${character.house}</td></tr>
     <tr><td><strong>Grupo Asociado</strong>:${character.associated_groups}</td></tr>
     <tr><td><strong>Aparicion en Libros</strong>:${character.books_featured_in}</td></tr></table>
     ${defineImage(character.image)} </div>`
  })
});

let characters3 = filterData(allCharacters, "Ravenclaw")
document.getElementById("revenclaw").addEventListener("click", function () {
  divT.innerHTML = ""
  characters3.forEach((character) => {
    return document.getElementById("charactersTable").innerHTML +=
      `<div class="allTables"><table><tr><td><strong>Nombre</strong>:${character.name}</td><br> 
    <tr><td><strong>Nacimiento</strong>:${character.birth}</tr></td>
    <tr><td><strong>Muerte</strong>:${character.death}</td></tr>
     <tr><td><strong>Especie</strong>:${character.species}</td></tr>
      <tr><td><strong>Ancestro</strong>:${character.ancestry}</td></tr>
      <tr><td><strong>Genero</strong>:${character.gender}</td></tr>
      <tr><td><strong>Color de Pelo</strong>:${character.hair_color}</td></tr>
      <tr><td><strong>Color de Ojos</strong>:${character.eye_color}</td></tr>
     <tr><td><strong>Varita</strong>:${character.wand}</td></tr>
     <tr><td><strong>Patronus</strong>:${character.patronus}</td></tr>
     <tr><td><strong>Casa</strong>:${character.house}</td></tr>
     <tr><td><strong>Grupo Asociado</strong>:${character.associated_groups}</td></tr>
     <tr><td><strong>Aparicion en Libros</strong>:${character.books_featured_in}</td></tr></table>
     ${defineImage(character.image)} </div>`
  })
});

let characters4 = filterData(allCharacters, "Hufflepuff")
document.getElementById("hafelpuf").addEventListener("click", function () {
  divT.innerHTML = ""
  characters4.forEach((character) => {
    return document.getElementById("charactersTable").innerHTML +=
      `<div class="allTables"><table><tr><td><strong>Nombre</strong>:${character.name}</td><br> 
    <tr><td><strong>Nacimiento</strong>:${character.birth}</tr></td>
    <tr><td><strong>Muerte</strong>:${character.death}</td></tr>
     <tr><td><strong>Especie</strong>:${character.species}</td></tr>
      <tr><td><strong>Ancestro</strong>:${character.ancestry}</td></tr>
      <tr><td><strong>Genero</strong>:${character.gender}</td></tr>
      <tr><td><strong>Color de Pelo</strong>:${character.hair_color}</td></tr>
      <tr><td><strong>Color de Ojos</strong>:${character.eye_color}</td></tr>
     <tr><td><strong>Varita</strong>:${character.wand}</td></tr>
     <tr><td><strong>Patronus</strong>:${character.patronus}</td></tr>
     <tr><td><strong>Casa</strong>:${character.house}</td></tr>
     <tr><td><strong>Grupo Asociado</strong>:${character.associated_groups}</td></tr>
     <tr><td><strong>Aparicion en Libros</strong>:${character.books_featured_in}</td></tr></table>
     ${defineImage(character.image)}`
  })
});

let characters5 = filterData(allCharacters, "Muggle")
document.getElementById("muggle").addEventListener("click", function () {
  divT.innerHTML = ""
  characters5.forEach((character) => {
    return document.getElementById("charactersTable").innerHTML +=
      `<div class="allTables"><table><tr><td><strong>Nombre</strong>:${character.name}</td><br> 
     <tr><td><strong>Nacimiento</strong>:${character.birth}</tr></td>
     <tr><td><strong>Muerte</strong>:${character.death}</td></tr>
      <tr><td><strong>Especie</strong>:${character.species}</td></tr>
       <tr><td><strong>Ancestro</strong>:${character.ancestry}</td></tr>
       <tr><td><strong>Genero</strong>:${character.gender}</td></tr>
       <tr><td><strong>Color de Pelo</strong>:${character.hair_color}</td></tr>
       <tr><td><strong>Color de Ojos</strong>:${character.eye_color}</td></tr>
      <tr><td><strong>Varita</strong>:${character.wand}</td></tr>
      <tr><td><strong>Patronus</strong>:${character.patronus}</td></tr>
      <tr><td><strong>Casa</strong>:${character.house}</td></tr>
      <tr><td><strong>Grupo Asociado</strong>:${character.associated_groups}</td></tr>
      <tr><td><strong>Aparicion en Libros</strong>:${character.books_featured_in}</td></tr></table>
      ${defineImage(character.image)}`
  })
});



// TO DO:
// hacer tabla para datos personajes
// crear una funcion que contenga los datos de los personajes
// crear una funcion que filtre los datos de los                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   personajes seleccionando solo gryffindor
// Meter esa funcion dentro de una variable
// Meter la variable dentro de la tabla

