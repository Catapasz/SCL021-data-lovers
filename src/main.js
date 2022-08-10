import { filterData } from './data.js';
import data from './data/harrypotter/data.js';
const allCharacters = data.characters


const playSound = function () {
  let element = document.createElement('div');
  element.setAttribute('style', 'display: none');
  element.innerHTML = `
      <audio autoplay loop>s
        <source src="Harry Potter Theme Song.mp3" type="audio/mp3">    
      </audio>  `;
  document.body.appendChild(element);
  document.removeEventListener('click', playSound);
}
document.addEventListener('click', playSound);
let divT = document.getElementById("charactersTable")
//Guardo en una variable los datos de los personajes, filtro por la casa y los creo en tabla
let characters = filterData(allCharacters, "Gryffindor")
document.getElementById("gryffindor").addEventListener("click", function () {
  divT.innerHTML = ""
  characters.forEach((character) => {
    return document.getElementById("charactersTable").innerHTML +=
      `<table class="tableCharacter"><tr><td><strong>Nombre</strong>:${character.name}</td><br> 
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
     <tr><td><strong>Aparicion en Libros</strong>:${character.books_featured_in}</td></tr></table>`
  })
});

let characters2 = filterData(allCharacters, "Slytherin")
document.getElementById("slythering").addEventListener("click", function () {
  divT.innerHTML = ""
  characters2.forEach((character) => {
    return document.getElementById("charactersTable").innerHTML +=
      `<table class="tableCharacter"><tr><td><strong>Nombre</strong>:${character.name}</td><br> 
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
     <tr><td><strong>Aparicion en Libros</strong>:${character.books_featured_in}</td></tr></table>`
  })
});

let characters3 = filterData(allCharacters, "Ravenclaw")
document.getElementById("revenclaw").addEventListener("click", function () {
  divT.innerHTML = ""
  characters3.forEach((character) => {
    return document.getElementById("charactersTable").innerHTML +=
      `<table class="tableCharacter"><tr><td><strong>Nombre</strong>:${character.name}</td><br> 
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
     <tr><td><strong>Aparicion en Libros</strong>:${character.books_featured_in}</td></tr></table>`
  })
});

let characters4 = filterData(allCharacters, "Hufflepuff")
document.getElementById("hafelpuf").addEventListener("click", function () {
  divT.innerHTML = ""
  characters4.forEach((character) => {
    return document.getElementById("charactersTable").innerHTML +=
      `<table class="tableCharacter"><tr><td><strong>Nombre</strong>:${character.name}</td><br> 
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
     <tr><td><strong>Aparicion en Libros</strong>:${character.books_featured_in}</td></tr></table>`
  })
});

let characters5 = filterData(allCharacters, "Muggle")
document.getElementById("muggle").addEventListener("click", function () {
  divT.innerHTML = ""
  characters5.forEach((character) => {
    return document.getElementById("charactersTable").innerHTML +=
      `<table class="tableCharacter"><tr><td><strong>Nombre</strong>:${character.name}</td><br> 
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
      <tr><td><strong>Aparicion en Libros</strong>:${character.books_featured_in}</td></tr></table>`
  })
});



// TO DO:
// hacer tabla para datos personajes
// crear una funcion que contenga los datos de los personajes
// crear una funcion que filtre los datos de los                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   personajes seleccionando solo gryffindor
// Meter esa funcion dentro de una variable
// Meter la variable dentro de la tabla

