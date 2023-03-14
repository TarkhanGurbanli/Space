"use strict";

const proton = document.querySelector("#sun");
const electron = document.querySelector("#earth");

const sunX = 750;
const sunY = 340;

let rad = (deg, speed) => deg * speed / 180;

let px = (coord) => coord + "px"

sun.style.top = px(sunY);
sun.style.left = px(sunX);

// const radius = 200;
let deg = 0

function setPlanet(id, speed, radius) {
    const planet = document.querySelector('#' + id)
    setInterval(() => {
        const x = sunX + radius * Math.cos(rad(deg, speed));
        const y = sunY + radius * Math.sin(rad(deg, speed));
        planet.style.top = px(y);
        planet.style.left = px(x);
        deg--;
    }, 35);
}

setPlanet('earth', 0.5, 90)
setPlanet('mercury', 0.7, 140)
setPlanet('venus', 0.9, 190)
setPlanet('mars', 1.1, 200)
setPlanet('jupiter', 1.3, 250)
setPlanet('saturn', 1.5, 280)
setPlanet('uranus', 1.7, 330)
setPlanet('neptun', 1.9, 345)



let screenWidth = window.innerWidth - 10;
let screenHeight = window.innerHeight - 10;

for (let i = 0; i < 1000; i++) {
    let x = Math.round(Math.random() *screenWidth);
    let y = Math.round(Math.random() * screenHeight);
let size = Math.round(Math.random() * 4 + 1);

    let star = document.createElement("div");
    star.classList.add('star');
    document.body.appendChild(star);

    star.style.top = px(y);
    star.style.left = px(x);
    star.style.width = px(size);
    star.style.height = px(size);

}