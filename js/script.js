'use strict'


const addEventOnElement = function (element, type, listener){
    if (element.length > 1){
        for (let i = 0; i < element.length ; i++) {
            element[i].addEventListener(type,listener)
        }
    }else{
        element.addEventListener(type,listener)
    }
}
//  
// 
const navbar = document.querySelector('[data-navbar]')
const navLink = document.querySelector('[data-nav-link]')
const navToggler = document.querySelector('[data-nav-toggle]')

const toggleNav = function(){
    navbar.classList.toggle('active')
    this.classList.toggle('active')
}
addEventOnElement(navToggler, 'click', toggleNav)

const closeNav = function(){
    navbar.classList.remove('active')
    navToggler.classList.remove('active')
}
addEventOnElement(navLink, 'click', closeNav)

// back to top btn

const header = document.querySelector('[data-header]')
const backToTopBtn = document.querySelector('[data-back-top-btn]')

window.addEventListener('scroll', function () {
    if (window.scrollY >= 50){
        header.classList.add('active')
        backToTopBtn.classList.add('active')
    }else{
        header.classList.remove('active')
        backToTopBtn.classList.remove('active')
    }
})

// tab butt

const tabBtns = document.querySelectorAll('[data-tab-btn]')
let lastTabClickedBtn = tabBtns[0]
console.log(lastTabClickedBtn)

const changeTab = function (){
    lastTabClickedBtn.classList.remove('active')
    this.classList.add('active')
    lastTabClickedBtn = this

}
addEventOnElement(tabBtns,"click",changeTab)