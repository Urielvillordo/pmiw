function DatosDePantalla(x, y, p) {
  if (pantalla === p) {
    loadfondo(fondo[p], 0, 0, 640, 480);
    boton(20, 350, 100, 50, B, y);
    boton(500, 350, 100, 50, A, y);
  }
}


function cargaTexto(x, y, anch, alt, p) {
  if (pantalla === p) {
    push();
    noStroke();
    fill(0, 20, 0, 50);
    rect(5, 5, 6, height/2);
    pop();
    stroke(0);
    strokeWeight(2);
    fill(255);
    textSize(16)
      text(texto[p], x, y, anch, alt);
  }
}
