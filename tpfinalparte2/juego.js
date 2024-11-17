class juego {
  constructor() {
    this.balas = 20;
    this.puntos = 0;
    this.pj = new Personaje(0, 0, 100, 100);
    this.f = new Fondo(0, 0, 0, 940, 480, 200);
    this.f2 = new Fondo(0, 640, 0, 940, 480, 200);
    this.perdio = new pantallaP(0, 0, 640, 480);
    this.gano = new pantallaV(0, 0, 640, 480);
    this.ene = new enemigo(random(10, 640), height/2, 100, 200, 0, 0, 480, 200);
  }
  mostrar() {
    this.f.dibujarFondo();
    this.f2.dibujarFondo();
    this.ene.dibujarEnemigo();
    this.pj.dibujarPersonaje();
  }
  actualizar() {
    if (this.ene.muerto == true) {
      this.puntos++;
      this.ene.vivo = true;
      this.ene.muerto = false;
      this.ene.mover();
    }
    if (this.ene.mato == true || this.balas == 0) {
      this.perdio.dibujarPantalla();
    }
    if (this.puntos == 10) {
      this.gano.dibujarPantalla();
    }
  }
  shoot() {
    this.ene.disparo();
    this.balas--;
  }
  reinicio() {
    if (keyPressed) {
      this.balas = 20;
      this.ene.mato = false;
      this.ene.vivo = true;
      this.ene.muerto = false;
      this.puntos = 0;
    }
  }
}
