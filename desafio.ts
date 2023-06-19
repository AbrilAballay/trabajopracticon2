//DESAFIÓ:Supongamos que queremos crear un programa que trabaje con diferentes  formas geométricas, como rectángulos y círculos. Podemos utilizar interfaces para definir  las propiedades y métodos comunes que deben tener estas formas.//
interface FormaGeometrica {
    calcularArea(): number;
    calcularPerimetro(): number;
  }
  
  class Rectangulo implements FormaGeometrica {
    private ancho: number;
    private alto: number;
  
    constructor(ancho: number, alto: number) {
      this.ancho = ancho;
      this.alto = alto;
    }
  
    calcularArea(): number {
      return this.ancho * this.alto;
    }
  
    calcularPerimetro(): number {
      return 2 * (this.ancho + this.alto);
    }
  }
  
  class Circulo implements FormaGeometrica {
    private radio: number;
  
    constructor(radio: number) {
      this.radio = radio;
    }
  
    calcularArea(): number {
      return Math.PI * Math.pow(this.radio, 2);
    }
  
    calcularPerimetro(): number {
      return 2 * Math.PI * this.radio;
    }
  }
  
  // Uso de las clases
  
  const rectangulo = new Rectangulo(5, 3);
  console.log("Área del rectángulo:", rectangulo.calcularArea());
  console.log("Perímetro del rectángulo:", rectangulo.calcularPerimetro());
  
  const circulo = new Circulo(4);
  console.log("Área del círculo:", circulo.calcularArea());
  console.log("Perímetro del círculo:", circulo.calcularPerimetro());
  