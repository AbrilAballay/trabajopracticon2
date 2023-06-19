//DESCRIPCIÓN: Crear una clase Cuenta Bancaria a la cual le podemos asignar fondos y  sacar fondos Si le asignamos más de 500000 disparamos una alarma  Si intentamos sacar más de lo que disponemos disparamos otra alarma  • Si intentamos sacar más de 100000 disparamos otra alarma  
//
class CuentaBancaria {
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    public asignarFondos(monto: number): void {
        this.saldo += monto;
    }

    public sacarFondos(monto: number): void {
        if (monto <= this.saldo) {
            this.saldo -= monto;
        } else {
            console.log("No hay suficientes fondos disponibles.");
        }
    }

    public obtenerSaldo(): number {
        return this.saldo;
    }
}

const cuenta = new CuentaBancaria(78000);
console.log("Saldo inicial:", cuenta.obtenerSaldo());

cuenta.asignarFondos(6850);
console.log("Saldo después de asignar fondos:", cuenta.obtenerSaldo());

cuenta.sacarFondos(3000);
console.log("Saldo después de sacar fondos:", cuenta.obtenerSaldo()); 

cuenta.sacarFondos(1000); 
console.log("Saldo final:", cuenta.obtenerSaldo());