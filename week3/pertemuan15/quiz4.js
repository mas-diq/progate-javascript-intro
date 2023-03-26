class KendaraanDarat {
    constructor(nama, roda, harga) {
        this.nama = nama;
        this.roda = roda;
        this.harga = harga;
    }
}

let mobil = new KendaraanDarat("Mobil", 4, 250);
let motor = new KendaraanDarat("Motor", 2, 18);
let truk = new KendaraanDarat("Truk", 8, 2000);

console.log(`${mobil.nama} harganya ${mobil.harga} sedangkan ${motor.nama}, harganya ${motor.harga} Kalau ${truk.nama} rodanya ada ${truk.roda}`.s);