class KendaraanDarat {
    constructor(nama, roda, harga) {
        this.nama = nama;
        this.roda = roda;
        this.harga = harga;
    }

    cetak() {
        console.log(`${this.nama} adalah kendaraan roda ${this.roda}, dengan harga ${this.harga}`);
    }
}

let mobil = new KendaraanDarat("Mobil", 4, 250);
let motor = new KendaraanDarat("Motor", 2, 18);

mobil.cetak();
motor.cetak();