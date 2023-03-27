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
    constructor(nama, roda, harga, tipe, jenis, domisili) {
        super(nama, roda, harga);
        this.tipe = tipe;
        this.jenis = jenis;
        this.domisili = domisili;
    }
    info() {
        console.log(`${this.nama} anda memiliki ${this.roda} roda di harga ${this.harga}`);
    }
    cetak() {
        console.log(`${this.tipe} - ${this.jenis} - ${this.domisili}`);
    }
}

let avanza = new Mobil("Avanza", 4, 250, "SUV", "City Car", "Jakarta");
avanza.info();
avanza.cetak();