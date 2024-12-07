class pantallaP {
  constructor (xp, yp, ancp, altp) {
    this.x = xp;
    this.y = yp;
    this.anc = ancp;
    this.alt = altp;
  }
  dibujarPantalla() {
    push();
    fill(250, 0, 0);
    image(imgPerdiste, this.x, this.y, this.anc, this.alt);
    fill(250, 100, 100);
    textSize(20);
    text("para volver toque cualquier tecla", 200, 200, 300);
    pop();
  }
}
class pantallaV {
  constructor (xp, yp, ancp, altp) {
    this.x = xp;
    this.y = yp;
    this.anc = ancp;
    this.alt = altp;
  }
  dibujarPantalla() {
    push();
    fill(0, 0, 250);
    image(imgGanaste, this.x, this.y, this.anc, this.alt);
    fill(250, 100, 100);
    textSize(20);
    text("para volver toque cualquier tecla", 200, 200, 300);
    pop();
  }
}
class pantallaI {
  constructor (xp, yp, ancp, altp) {
    this.x = xp;
    this.y = yp;
    this.anc = ancp;
    this.alt = altp;
  }
  dibujarPantalla() {
    push();
    fill(0, 250, 0);
    image(imgInicio, this.x, this.y, this.anc, this.alt);
    pop();
    push();
    fill(250, 100, 100);
    textSize(20);
    text("para empezar toque cualquier tecla", 200, 200, 300);
    text("evita quedarte sin balas", 200, 250, 300);
    text("disparale dandole click 10 veces", 200, 300, 300);
    text("cada disparo aumentara su velocidad", 200, 350, 300);
    pop();
  }
}
