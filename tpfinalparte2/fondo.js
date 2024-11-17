class Fondo {
  constructor(bx, x, y, anc, alt, t) {
    this.bx = bx;
    this.posX = x;
    this.posY = y;
    this.ancho = anc;
    this.alto = alt;
    this.tam = t;
  }
  dibujarFondo() {
    push();
    fill(0, 250, 0);
    rect(this.posX, this.posY, this.ancho, this.alto);
    pop();
    this.DibujarBotones();
    this.posX = this.posX>width?-width:this.posX;
    this.posX = this.posX<-width?+width:this.posX;
    this.mover();
  }
  DibujarBotones() {
    push();
    noStroke();
    fill(0, 0, 0, 0);
    rect(this.bx, this.posY, this.tam, this.alto);
    rect(width-this.tam, this.posY, this.tam, this.alto);
    pop();
  }
  mover() {
    if (this.colicion(this.bx, this.posY, this.tam, this.alto)) {
      this.posX+=5;
    }
    if (this.colicion(width-this.tam, this.posY, this.tam, this.alto)) {
      this.posX-=5;
    }
  }
  colicion(x, y, an, al) {
    let ubicacion = mouseX > x && mouseX < x + an && mouseY > y && mouseY < y + al;
    return ubicacion;
  }
}
