const title = document.getElementById('title');
title.innerHTML = "Cursos"

const description = document.getElementById('description');
description.innerHTML = "Listado de cursos"

//const items = document.getElementsByClassName('list-group-item');
//const items = document.getElementsByTagName('li');
//const items = document.querySelectorAll('li');
//Obtener los elementos pares
const items = document.querySelectorAll('li:nth-child(odd)');
console.log(items)

for (var i = 0; i < items.length; i++) {
    //console.log(i % 2 === 0)
    //if (i % 2 === 0) {
        let element = items[i];
        element.style.background = '#f2f2f2';
    //}
}

/*const element = document.querySelector('#first-course');
const element_2 = document.querySelector('.list-group-item');
const element_3 = document.querySelector('li');
const element_4 = document.querySelector('div.row > ul.list-group > li');

console.log(element)
console.log(element_2)
console.log(element_3)
console.log(element_4)*/


const list = document.querySelector('ul');
console.log(list.childElementCount);
console.log(list.children);
console.log(list.firstElementChild.innerHTML)
console.log(list.lastElementChild.innerHTML)

for (var i = 0; i < list.children.length; i++) {
    console.log(list.children[i]);
}

const element = document.querySelector('div.row > ul.list-group > li');
console.log(element.parentElement);
console.log(element.nextElementSibling);

const element_2 = document.getElementById('last-course')
console.log(element_2.previousElementSibling)




