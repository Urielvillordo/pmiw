/*uriel villordo legajo 120384/0
 DNI47020031
 https://youtu.be/wFoeh9GdzWw*/
let x = 25;
let y = 10;
let Ru = 1;
let a = 20;
let R = 5;
let ubic;
function preload() {
  imagOpArt = loadImage('data/M_25.jpg');
}
function setup() {
  createCanvas(800, 400);
  ellipseMode(CENTER);
}
function draw() {
  ubic = width/y;
  background(0);
  circuloGrande(a);
  push();
  translate(width/2, 0);
  circulo(y, x);
  pop();
  image( imagOpArt, 0, 0, 400, 400);
}
function circuloGrande(canti) {
  for (let t = tam(200); t>=canti; t -= R) {
    let colo = map(t, 0, 255, 0, 150);
    let col = map(t, 0, 255, 0, 255);
    if (t<=200) {
      R++;
    } else {
      R = 5;
    }
    stroke(50, 100, 50);
    fill(0, colo, col);
    ellipse(width/2+200, height/2, t, t);
  }
}
function circulo( can, cant) {
  for (let i=0; i<can; i++) {
    for (let j=0; j<can; j++) {
      for (let tam = 100; tam>=cant; tam -= Ru) {
        let colo = map(tam, 0, 100, 0, 100);
        let col = map(tam, 0, 100, 0, 100);
        if (frameCount%2 == 0) {
          Ru++;
        }
        if (Ru>30 && Ru<=33) {
          Ru = 1;
        }
        if ((i+j)%2==0) {
          stroke(50, 50, 100, 100);
          fill(0, colo, col, 0);
          ellipse(i*ubic+ubic/2, j*ubic+ubic/2, tam/2, tam/2);
        } else {
          stroke(50, 50, 100, 100);
          fill(0, colo, col, 0);
          ellipse(i*ubic+ubic/2, j*ubic+ubic/2, tam, tam);
        }
      }
    }
  }
}
function tam(tam) {
  return mouseX + tam + tam/2;
}
function keyPressed() {
  x = 25;
  y = 10;
  Ru = 1;
  a = 20;
  R = 5;
}
