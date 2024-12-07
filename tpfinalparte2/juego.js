class juego {
  constructor() {
    this.start = true;
    this.suma = 10;
    this.balas = 12;
    this.puntos = 0;
    this.pj = new Personaje(0, 0, 100, 100);
    this.f = new Fondo(0, 0, 0, 940, 480, 200);
    this.f2 = new Fondo(0, 640, 0, 940, 480, 200);
    this.inicio = new pantallaI(0, 0, 640, 480);
    this.perdio = new pantallaP(0, 0, 640, 480);
    this.gano = new pantallaV(0, 0, 640, 480);
    this.ene = new enemigo(random(-40, 670), height/2, 100, 200, 0, 0, 480, 200);
    this.muni = [];
    for (let i=0; i<this.balas; i++, this.suma+=10) {
      this.muni[i] = new municion(50+this.suma, 50, 20);
    }
  }
  mostrar() {
    if (this.start == false) {
      this.f.dibujarFondo();
      this.f2.dibujarFondo();
      this.ene.dibujarEnemigo();
      for (let i=0; i<this.balas; i++) {
        this.muni[i].dibujarMunicion();
      }
      this.pj.dibujarPersonaje();
    } else {
      this.inicio.dibujarPantalla();
    }
  }
  actualizar() {
    if (this.ene.muerto == true) {
      this.ene.velocidad++;
      this.puntos++;
      this.ene.vivo = true;
      this.ene.muerto = false;
      this.ene.mover();
    }
    if (this.ene.mato == true || this.balas == 0) {
      this.perdio.dibujarPantalla();
      this.ene.diana = false;
    }
    if (this.puntos == 10) {
      this.gano.dibujarPantalla();
    }
  }
  shoot() {
    this.ene.disparo();
    this.balas--;
    push();
    disparo.amp(0.1);
    disparo.play();
    pop();
  }
  reinicio() {
    if (keyPressed) {
      this.start = false;
      this.ene.velocidad = 1;
      this.ene.diana = true;
      this.balas = 12;
      this.ene.mato = false;
      this.ene.vivo = true;
      this.ene.muerto = false;
      this.puntos = 0;
      this.ene.y = height/2;
      this.ene.anch = 100;
      this.ene.alt = 200;
    }
  }
}
