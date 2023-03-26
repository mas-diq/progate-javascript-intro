class Kendaraan {
    constructor(nama, roda, harga) {
        this.nama = nama;
        this.roda = roda;
        this.harga = harga;
    }

    info() {
        console.log(`${this.nama} anda memiliki ${this.roda} roda`);
    }
}

class Mobil extends Kendaraan {
    constructor(nama, roda, harga, tipe) {
        super();
        this.nama = nama;
        this.roda = roda;
        this.harga = harga
        this.tipe = tipe;
    }

    info() {
        console.log(`${this.nama} anda memiliki ${this.roda} roda, dengan tipe ${this.tipe} di harga ${this.harga}`);
    }
}

let avanza = new Mobil("mobil", 4, 250, "S");
avanza.info();