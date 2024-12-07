class municion {
  constructor(x, y, tam) {
    this.x = x;
    this.y = y;
    this.tam = tam;
  }
  dibujarMunicion () {
    push();
    fill(250, 0, 0);
    image(imgBala, this.x, this.y, this.tam, this.tam);
    pop();
  }
}
