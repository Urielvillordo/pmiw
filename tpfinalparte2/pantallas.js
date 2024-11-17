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
    rect(this.x, this.y, this.anc, this.alt);
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
    rect(this.x, this.y, this.anc, this.alt);
    pop();
  }
 
}
