let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = documnet.querySelector('section');
let navLinks = document.querySelector('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrolly;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEarch(links)
        }
    })
}