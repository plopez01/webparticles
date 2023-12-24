import {particles, spawnParticles} from './particle.js';
let canvas;
let holdingMouse = false;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, P2D);
  frameRate(60);
  background(0);
  spawnParticles(10000);
}

function draw() {
  fill(0, 50);
  rect(0, 0, width, height);
  particles.forEach(particle => {
    particle.tick(holdingMouse);
    particle.render();
  });
}

function mousePressed(){
  holdingMouse = true;
}

function mouseReleased(){
  holdingMouse = false;
}


window.setup = setup;
window.draw = draw;
window.mousePressed = mousePressed;
window.mouseReleased = mouseReleased;