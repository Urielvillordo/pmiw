// villordo uriel y Galán brisa
// tp1finalparte1 comicion 1
//https://youtu.be/wG3sRLtbOIw
let imgFondo;
let imgArma;
let sonido;
function preload() {
  disparo = loadSound("data/disparo.mp3");
  imgExtranjero = loadImage('data/extranjero.png');
  imgBala = loadImage('data/bullet.png');
  imgPerdiste = loadImage('data/perdiste.png');
  imgGanaste = loadImage('data/ganaste.png');
  imgArma = loadImage('data/Arma.png');
  imgFondo = loadImage('data/fondo.png');
  imgInicio = loadImage('data/inicio.png');
}
function setup() {
  createCanvas (640, 480);
  j = new juego();
}


function draw() {
  background(200);
  j.mostrar();
  j.actualizar();
}
function mousePressed() {
  j.shoot();
}

function keyPressed() {
  j.reinicio();
}
