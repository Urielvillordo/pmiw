class Personaje{
  constructor(x, y, an, al){
    this.posX = x;
    this.posY = y;
    this.ancho = an;
    this.alto = al;
  }
 dibujarPersonaje(){
   push();
   fill(250);
   rect(this.posX, this.posY, this.ancho, this.alto);
   this.movimientoDelPersonaje();
   pop();
 }
 movimientoDelPersonaje() {
    this.posX = mouseX - this.ancho / 2; 
    this.posY = mouseY - this.alto / 2;
    
    if (this.posX < 0) {
      this.posX = 0;  
    } else if (this.posX > width - this.ancho) {
      this.posX = width - this.ancho;
    }
    if (this.posY < 0) {
      this.posY = 0;  
    } else if (this.posY > height - this.alto) {
      this.posY = height - this.alto;
    }
  }
}
