function ImagenesDePantallas() {
  DatosDePantalla(0, 0);
  DatosDePantalla(1, 0);
  DatosDePantalla(2, 0);
  DatosDePantalla(3, 0);
  DatosDePantalla(4, 250);
  DatosDePantalla(5, 0);
  DatosDePantalla(6, 0);
  DatosDePantalla(7, 250);
  DatosDePantalla(8, 0);
  DatosDePantalla(9, 0);
  DatosDePantalla(10, 0);
  DatosDePantalla(11, 0);
  DatosDePantalla(12, 0);
  DatosDePantalla(13, 0);
  DatosDePantalla(14, 0);
  DatosDePantalla(15, 250);
  DatosDePantalla(16, 0);
  DatosDePantalla(17, 0);
  DatosDePantalla(18, 0);
  DatosDePantalla(19, 0);
  DatosDePantalla(20, 0);
  DatosDePantalla(21, 0);
  DatosDePantalla(22, 0);
  DatosDePantalla(23, 0);
  DatosDePantalla(24, 0);
  DatosDePantalla(25, 0);
}

function DatosDePantalla(x, y) {
  if (pantalla === x) {
    loadfondo(fondo[x], 0, 0, 640, 480);
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
function textosdepantalla() {
  cargaTexto(0, 10, 600, 500, 0);
  cargaTexto(10, 10, 600, 500, 1);
  cargaTexto(50, 50, 500, 500, 2);
  cargaTexto(50, 50, 500, 500, 3);
  cargaTexto(50, 50, 500, 500, 4);
  cargaTexto(50, 50, 500, 500, 5);
  cargaTexto(50, 50, 500, 500, 6);
  cargaTexto(50, 50, 500, 500, 7);
  cargaTexto(50, 50, 500, 500, 8);
  cargaTexto(50, 50, 500, 500, 9);
  cargaTexto(50, 50, 500, 500, 10);
  cargaTexto(50, 50, 500, 500, 11);
  cargaTexto(50, 50, 500, 500, 12);
  cargaTexto(50, 50, 500, 500, 13);
  cargaTexto(50, 50, 500, 500, 14);
  cargaTexto(50, 50, 500, 500, 15);
  cargaTexto(50, 50, 500, 500, 16);
  cargaTexto(50, 50, 500, 500, 17);
  cargaTexto(50, 50, 500, 500, 18);
  cargaTexto(50, 50, 500, 500, 19);
  cargaTexto(50, 50, 500, 500, 20);
  cargaTexto(50, 50, 500, 500, 21);
  cargaTexto(50, 50, 500, 500, 22);
  cargaTexto(50, 50, 500, 500, 23);
  cargaTexto(50, 50, 500, 500, 24);
  cargaTexto(50, 50, 500, 500, 25);
}
