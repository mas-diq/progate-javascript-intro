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
    info() {
        console.log(`${this.nama} anda harganya sebesar ${this.harga} juta rupiah`);
    }
}

let avanza = new Mobil("mobil", 4, 250);
avanza.info();