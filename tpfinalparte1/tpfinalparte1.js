// villordo uriel y Galán brisa
// tp1finalparte1 comicion 1
//https://youtu.be/yeobMCKi2lM
let fondo = [];
let texto = [];
let pantalla;
let sonido;


function preload() {
  sonido = loadSound("data/piano.mp3");
  texto = loadStrings("data/textos.txt");
  A = loadImage("data/flecha.png");
  B = loadImage("data/flechae.png");
  for (i=0; i<26; i++) {
    fondo[i] = loadImage("data/fondo"+i+".png");
  }
}


function setup() {
  createCanvas (640, 480);
  for (i=0; i<26; i++) {
    fondo[i].resize(480, 480);
  }
  pantalla = 0;
}


function draw() {
  background(1);
  ImagenesDePantallas();

  textosdepantalla();
}


function loadfondo(img, x, y, anch, alt) {
  fill(0, 0, 0, 0);
  image(img, x, y, anch, alt);
}


function flecha(N, x, y, ancho, alto) {
  image(N, x, y, ancho, alto);
}


function boton(x, y, ancho, alto, N, d) {
  push();
  fill(0, 0, 0, d);
  flecha(N, x, y, ancho, alto);
  detectarBoton(x, y, ancho, alto, 200);
  pop();
  push();
  noStroke();
  fill(94, 112, 72, d);
  rect(x, y, ancho, alto, 50, 20);
  opciones(d);

  pop();
}


function detectarBoton(x, y, an, al) {
  return mouseX > x && mouseX < x+an && mouseY > y && mouseY < y+al;
}

function mousePressed() {
  BotonesDePantallas();
}

function keyPressed() {
  pantalla = 0;
}
