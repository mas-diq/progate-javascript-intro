class KendaraanDarat {
    constructor(nama, roda, harga) {
        this.nama = nama;
        this.roda = roda;
        this.harga = harga;
    }

    info() {
        console.log(`${this.nama} adalah kendaraan roda ${this.roda}`);
        this.cetakHarga();
    }

    cetakHarga() {
        console.log(`${this.nama} harganya ${this.harga}`);
    }
}

let mobil = new KendaraanDarat("Mobil", 4, 250);
let motor = new KendaraanDarat("Motor", 2, 18);

mobil.info();
motor.info();