// Your code goes here
let get = (elementSelected) => {
    return document.querySelector('elementSelected');
}

//two ways to set a element to a variable

let firstLink = document.querySelector('.nav-link');
console.log(firstLink);

let turnRed = (event) => {
    event.target.style.color = 'red';
}

// First eventListener
firstLink.addEventListener('click', turnRed)

//Second eventListener

let home = document.getElementsByClassName('home');
let welcomeFunBus = home[0].children[0].children[1]

//console.log(home);
//console.log(welcomeFunBus);
 
let disappear = (el) => {
    el.target.style.display = 'none'
}

welcomeFunBus.addEventListener('copy', disappear)

//third eventListener

let navClass = document.getElementsByClassName('nav')
let secondLink = navClass[0].children[1]
console.log(secondLink);
let turnBlue = (el) => {
    el.target.style.color = 'blue'
}

secondLink.addEventListener('keydown', turnBlue)

//fourth eventListerner

let textContentClass = document.getElementsByClassName('text-content')
let letsGoParaOne = textContentClass[0].children[1]
let invertBG = (el) => {
    el.target.style.backgroundColor = "black"
    el.target.style.color = 'white'
}

letsGoParaOne.addEventListener('drag', invertBG)

// fifth eventListener










