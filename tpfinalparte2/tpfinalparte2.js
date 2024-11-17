function preload(){
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
function keyPressed(){
  j.reinicio();
}
