class enemigo {
  constructor (ex, ey, anche, ale, bx, y, alto, t) {
    this.velocidad = 1;
    this.diana = true;
    this.mato = false;
    this.muerto = false;
    this.vivo = false;
    this.x = ex;
    this.y = ey;
    this.anch = anche;
    this.alt = ale;
    this.bx = bx;
    this.posY = y;
    this.alto = alto;
    this.tam = t;
  }

  dibujarEnemigo() {
    fill(0);
    if (this.vivo == true && this.muerto == false && this.anch<600) {
      this.anch +=this.velocidad;
      this.alt +=this.velocidad;
      this.y -=this.velocidad;
      image(imgExtranjero, this.x, this.y, this.anch, this.alt);
      this.actual();
      this.DibujarBotones();
      this.matar();
    }
  }
  matar() {
    if (this.anch<500) {
      this.mato = false;
    } else if (this.anch>500) {
      this.mato = true;
    }
  }

  disparo() {
    if (this.colicion(this.x, this.y, this.anch, this.alt) && this.mato == false && this.diana == true) {
      this.vivo = !this.vivo;
      this.muerto = !this.muerto;
    }
  }
  colicion(x, y, anch, alt) {
    let ubicacion = mouseX > x && mouseX < x + anch && mouseY > y && mouseY < y + alt;
    return ubicacion;
  }
  mover() {
    this.x =random(10, 640);
    this.y = height/2;
    this.anch = random(10, 100);
    this.alt = random(50, 200);
  }
  DibujarBotones() {
    push();
    noStroke();
    fill(0, 0, 0, 0);
    rect(this.bx, this.posY, this.tam, this.alto);
    rect(width-this.tam, this.posY, this.tam, this.alto);
    pop();
  }
  actual() {
    if (this.colicion(this.bx, this.posY, this.tam, this.alto)) {
      this.x+=5;
    }
    if (this.colicion(width-this.tam, this.posY, this.tam, this.alto)) {
      this.x-=5;
    }
  }
  colicion(x, y, an, al) {
    let ubicacion = mouseX > x && mouseX < x + an && mouseY > y && mouseY < y + al;
    return ubicacion;
  }
}
