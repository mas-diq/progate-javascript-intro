class Kendaraan {
    constructor(nama, roda) {
        this.nama = nama;
        this.roda = roda
    }

    info() {
        console.log(`${this.nama} anda memiliki ${this.roda} roda`);
    }
}

class Mobil extends Kendaraan {
    kecepatan() {
        return `120 km/s`;
    }
}

let avanza = new Mobil("mobil", 4);
avanza.info();
console.log(`Kecepatannya ${avanza.kecepatan()}`);