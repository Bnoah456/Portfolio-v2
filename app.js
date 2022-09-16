const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const headline = document.querySelector('.headline');
const headline2 = document.querySelector('.headline2');

const tl = new TimelineMax();

tl.fromTo(hero,1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut})

.fromTo(hero, 1.2, {width: "100%"}, {width:"80%", ease: Power2.easeInOut})
.fromTo(slider, 1.2, {x:"-100%"}, {x:"0%", ease: Power2.easeInOut},"-=1.2")

.fromTo(headline, 0.5, {opacity:0, x:30}, {opacity: 1, x:0}, "-=0.5")

.fromTo(headline2, 1, {opacity: 0, x:10}, {opacity: 1, x:0}, "-=0.3");

//added a toggle hamburger menu icon//////////////////////
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n. addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))

////////////////////////////////////////////////////

function scrollAppear()
{
   // var section = document.querySelector('.section-3');
    var middleText = document.querySelector('.middle-text');
    var introText = document.querySelector('.intro-text');

    var middlePosition = middleText.getBoundingClientRect().top;
    var introPosition = introText.getBoundingClientRect().top;

    var screenPosition = window.innerHeight / 2.2;
    
    if(introPosition < screenPosition){
        introText.classList.add('intro-appear');
    }

    if(introPosition > screenPosition){
        introText.classList.remove('intro-appear');
    }

    if(middlePosition < screenPosition){
        middleText.classList.add('intro-appear');
    }

    if(middlePosition > screenPosition){
        middleText.classList.remove("intro-appear");
    }
    
}


window.addEventListener('scroll', scrollAppear);