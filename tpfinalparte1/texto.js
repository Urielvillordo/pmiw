function BotonesDePantallas() {
  if (pantalla === 0) {  //inicio

    if (detectarBoton(500, 350, 100, 50)) {
      pantalla = 1;
      if (!sonido.isPlaying()) {
        sonido.loop(true);
      }
    }
    if (detectarBoton(20, 350, 100, 50)) {
      pantalla = 25;
    }
  } else if (pantalla === 1) {

    if (detectarBoton(500, 350, 100, 50)) {
      pantalla = 2;
    }
    if (detectarBoton(20, 350, 100, 50)) {
      pantalla = 0;
    }
  } else if (pantalla === 2) {

    if (detectarBoton(500, 350, 100, 50)) {
      pantalla = 3;
    }
    if (detectarBoton(20, 350, 100, 50)) {
      pantalla = 1;
    }
  } else if (pantalla === 3) {

    if (detectarBoton(500, 350, 100, 50)) {
      pantalla = 4;
    }
    if (detectarBoton(20, 350, 100, 50)) {
      pantalla = 2;
    }
  } else if (pantalla === 4) { // opcion

    if (detectarBoton(500, 350, 100, 50)) {
      pantalla = 5;
    }
    if (detectarBoton(20, 350, 100, 50)) {
      pantalla = 12;
    }
  } else if (pantalla === 5) {

    if (detectarBoton(500, 350, 100, 50)) {
      pantalla = 6;
    }
    if (detectarBoton(20, 350, 100, 50)) {
      pantalla = 4;
    }
  } else if (pantalla === 6) {

    if (detectarBoton(500, 350, 100, 50)) {
      pantalla = 7;
    }
    if (detectarBoton(20, 350, 100, 50)) {
      pantalla = 5;
    }
  } else if (pantalla === 7) { // opcion

    if (detectarBoton(500, 350, 100, 50)) {
      pantalla = 8;
    }
    if (detectarBoton(20, 350, 100, 50)) {
      pantalla = 22;
    }
  } else if (pantalla === 8) {

    if (detectarBoton(500, 350, 100, 50)) {
      pantalla = 9;
    }
    if (detectarBoton(20, 350, 100, 50)) {
      pantalla = 7;
    }
  } else if (pantalla === 9) {

    if (detectarBoton(500, 350, 100, 50)) {
      pantalla = 10;
    }
    if (detectarBoton(20, 350, 100, 50)) {
      pantalla = 8;
    }
  } else if (pantalla === 10) {

    if (detectarBoton(500, 350, 100, 50)) {
      pantalla = 11;
    }
    if (detectarBoton(20, 350, 100, 50)) {
      pantalla = 9;
    }
  } else if (pantalla === 11) { //final

    if (detectarBoton(500, 350, 100, 50)) {
      pantalla = 25;
    }
    if (detectarBoton(20, 350, 100, 50)) {
      pantalla = 10;
    }
  } else if (pantalla === 12) {

    if (detectarBoton(500, 350, 100, 50)) {
      pantalla = 13;
    }
    if (detectarBoton(20, 350, 100, 50)) {
      pantalla = 4;
    }
  } else if (pantalla === 13) {

    if (detectarBoton(500, 350, 100, 50)) {
      pantalla = 14;
    }
    if (detectarBoton(20, 350, 100, 50)) {
      pantalla = 12;
    }
  } else if (pantalla === 14) {

    if (detectarBoton(500, 350, 100, 50)) {
      pantalla = 15;
    }

    if (detectarBoton(20, 350, 100, 50)) {
      pantalla = 13;
    }
  } else if (pantalla === 15) { // opcion

    if (detectarBoton(500, 350, 100, 50)) {
      pantalla = 16;
    }

    if (detectarBoton(20, 350, 100, 50)) {
      pantalla = 19;
    }
  } else if (pantalla === 16) {

    if (detectarBoton(500, 350, 100, 50)) {
      pantalla = 17;
    }

    if (detectarBoton(20, 350, 100, 50)) {
      pantalla = 15;
    }
  } else if (pantalla === 17) {

    if (detectarBoton(500, 350, 100, 50)) {
      pantalla = 18;
    }

    if (detectarBoton(20, 350, 100, 50)) {
      pantalla = 16;
    }
  } else if (pantalla === 18) { //final

    if (detectarBoton(500, 350, 100, 50)) {
      pantalla = 25;
    }

    if (detectarBoton(20, 350, 100, 50)) {
      pantalla = 17;
    }
  } else if (pantalla === 19) {

    if (detectarBoton(500, 350, 100, 50)) {
      pantalla = 20;
    }

    if (detectarBoton(20, 350, 100, 50)) {
      pantalla = 15;
    }
  } else if (pantalla === 20) {

    if (detectarBoton(500, 350, 100, 50)) {
      pantalla = 21;
    }
    if (detectarBoton(20, 350, 100, 50)) {
      pantalla = 19;
    }
  } else if (pantalla === 21) { //final

    if (detectarBoton(500, 350, 100, 50)) {
      pantalla = 25;
    }

    if (detectarBoton(20, 350, 100, 50)) {
      pantalla = 20;
    }
  } else if (pantalla === 22) {

    if (detectarBoton(500, 350, 100, 50)) {
      pantalla = 23;
    }

    if (detectarBoton(20, 350, 100, 50)) {
      pantalla = 7;
    }
  } else if (pantalla === 23) {

    if (detectarBoton(500, 350, 100, 50)) {
      pantalla = 24;
    }
    if (detectarBoton(20, 350, 100, 50)) {
      pantalla = 22;
    }
  } else if (pantalla === 24) { //final

    if (detectarBoton(500, 350, 100, 50)) {
      pantalla = 25;
    }

    if (detectarBoton(20, 350, 100, 50)) {
      pantalla = 23;
    }
  } else if (pantalla === 25) { //creditos

    if (detectarBoton(500, 350, 100, 50)) {
      pantalla = 0;
    }

    if (detectarBoton(20, 350, 100, 50)) {
      pantalla = 0;
    }
  }
}
function opciones(o) {
  if (pantalla === 4) {
    push();
    fill(0, 50, 100, o);
    textSize(20);
    text("SI", 50, 370, 100, 50);
    text("NO", 530, 370, 100, 50);
    pop();
  }
  if (pantalla === 7 ) {
    push();
    fill(0, 50, 100, o);
    textSize(20);
    text("NO", 50, 370, 100, 50);
    text("SI", 530, 370, 100, 50);
    pop();
  }
  if (pantalla === 15 ) {
    push();
    fill(0, 50, 100, o);
    textSize(20);
    text("NO", 50, 370, 100, 50);
    text("SI", 530, 370, 100, 50);
    pop();
  }
}
