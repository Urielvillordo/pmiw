class enemigo {
  constructor (ex, ey, anche, ale, bx, y, alto, t) {
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
      this.anch +=3;
      this.alt +=3;
      this.y -=3;
      rect(this.x, this.y, this.anch, this.alt);
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
    if (this.colicion(this.x, this.y, this.anch, this.alt) && this.mato == false) {
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
        if (this.x < 0) {
      this.x = 0;  // Si la imagen se pasa por la izquierda, se ajusta a 0
    } else if (this.x > width - this.anch) {
      this.x = width - this.anch;
    }
    if (this.y < 0) {
      this.y = 0;  // Si se pasa por la parte superior, se ajusta a 0
    } else if (this.y > height - this.alt) {
      this.y = height - this.alt;  // Si se pasa por la parte inferior, se ajusta al borde inferior
    }
  }
  colicion(x, y, an, al) {
    let ubicacion = mouseX > x && mouseX < x + an && mouseY > y && mouseY < y + al;
    return ubicacion;
  }
}
