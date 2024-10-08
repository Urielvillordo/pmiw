let fondo = [];

let pantalla;
let X =20;
let Y = 350;
let x =500;
let y = 350;
let ancho = 100;
let alto = 50;

function preload() {
  A = loadImage("data/flecha.png");
  B = loadImage("data/flechae.png");
  for (i=0; i<5; i++) {
    fondo[i] = loadImage("data/fondo"+i+".png");
  }
}
function setup() {
  createCanvas (640, 480);
  for (i=0; i<5; i++) {
    fondo[i].resize(480, 480);
  }
  pantalla = 0;
}
function draw() {
  background(1);
  if (pantalla === 0) {
    loadfondo(fondo[0], 0, 0, 640, 480);
  } else if (pantalla === 1) {
    loadfondo(fondo[1], 0, 0, 640, 480);
  } else if (pantalla === 2) {
    loadfondo(fondo[2], 0, 0, 640, 480);
  } else if (pantalla === 3) {
    loadfondo(fondo[3], 0, 0, 640, 480);
  } else if (pantalla === 4) {
    loadfondo(fondo[4], 0, 0, 640, 480);
  }
  boton(x, y, ancho, alto);
  flecha(A, x, y, ancho, alto);
  boton(X, Y, ancho, alto);
  flecha(B, X, Y, ancho, alto);

}
function loadfondo(img, x, y, anch, alt) {
  fill(0, 0, 0, 0);
  image(img, x, y, anch, alt);
}


function boton(x, y, ancho, alto) {
  push();
  noStroke();
  fill(0, 0, 0, 0);
  rect(x, y, ancho, alto);
  pop();
}
function flecha(N, x, y, ancho, alto) {
  image(N, x, y, ancho, alto);
}



function mousePressed() {
  if (mouseX>= x && mouseX< x+ancho && mouseY> y && mouseY< y+alto && pantalla< 4 ) {
    pantalla++;
  }
  if (mouseX>= X && mouseX< X+ancho && mouseY> Y && mouseY< Y+alto && pantalla>0 ) {
    pantalla --;
  }
}
function keyPressed() {
  pantalla = 0;
}
